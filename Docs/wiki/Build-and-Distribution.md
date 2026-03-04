# Build And Distribution

Source: [DeepWiki build and distribution for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/8-build-and-distribution)

## Overview

AutoSubs uses GitHub Actions to build and package desktop releases for multiple platforms. The release pipeline is centered around [package.yml](/Users/nik/Documents/auto-subs/.github/workflows/package.yml).

The fork now maintains its own release metadata and updater endpoint, so published assets must come from `NerRobDog/auto-subs`.

## Release Pipeline

The packaging workflow is responsible for:

- preparing release metadata
- building platform-specific binaries
- bundling Tauri artifacts
- generating updater metadata
- attaching artifacts to GitHub Releases

In practice, the current fork distinguishes:

- stable releases aligned with the original project version
- experimental releases for fork-specific builds

## Platform Outputs

The packaging flow is designed to produce:

- Windows installer artifacts
- macOS application artifacts
- Linux `.deb` packages
- updater metadata such as `latest.json`

The exact set of successful outputs depends on the configured secrets and platform prerequisites.

## FFmpeg Sidecars

Release builds bundle platform-specific FFmpeg and FFprobe binaries inside `AutoSubs-App/src-tauri/binaries/`.

These sidecars are architecture-specific and are expected by Tauri at bundle time. Their names follow target triples so the correct binary is selected per platform.

## Signing And Notarization

The original release pipeline expects different signing inputs per OS:

- Windows certificate data for installer signing
- Apple certificates and notarization credentials for macOS
- updater signing key and password for Tauri update metadata

In the fork, release automation currently depends on these secrets being configured correctly. Missing or malformed secrets will cause release jobs to fail even if compilation succeeds.

## Current Fork Notes

At the moment, the release pipeline in this repository has three practical constraints:

- macOS release jobs require Apple signing and notarization secrets
- Windows release builds may require Vulkan-related setup depending on the selected build path
- Linux updater artifact signing requires a valid Tauri updater private key and password

Preview workflows can still succeed even when the full release workflow does not.

## Local Build Shape

The Tauri build command uses platform-specific feature flags and forwards arguments through npm to Cargo and then to the Tauri CLI. This allows one repository to emit different binary variants without duplicating the full project structure.

## Related Files

- [package.yml](/Users/nik/Documents/auto-subs/.github/workflows/package.yml)
- [set-build-version.mjs](/Users/nik/Documents/auto-subs/.github/scripts/set-build-version.mjs)
- [tauri.conf.json](/Users/nik/Documents/auto-subs/AutoSubs-App/src-tauri/tauri.conf.json)
