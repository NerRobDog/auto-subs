# Update Mechanism

Source: [DeepWiki update mechanism for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/8.4-update-mechanism)

## Overview

AutoSubs uses Tauri's updater system to distribute new versions through signed update metadata.

The updater flow depends on:

- published release assets
- `latest.json`
- a public updater key embedded in the app
- a matching private signing key used during release generation

## Current Repository Behavior

In this fork, the updater endpoint now points to:

- `https://github.com/NerRobDog/auto-subs/releases/latest/download/latest.json`

This means updater artifacts must be generated and signed from this repository's release pipeline, not the original project.

## Required Pieces

- valid release artifacts uploaded to GitHub Releases
- correct `latest.json` generation
- correct updater signing key and password
- app-side endpoint and public key kept in sync

## Practical Risk Areas

Updater failures usually come from one of three places:

- invalid signing secrets
- missing `latest.json` asset
- endpoint mismatch between the built app and the release repository

## Experimental vs Stable

If this repository continues to publish both experimental and stable channels, updater behavior should be documented explicitly so users do not accidentally cross-update between channels.
