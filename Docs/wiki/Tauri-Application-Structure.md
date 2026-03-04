# Tauri Application Structure

Source: [DeepWiki `3.1-tauri-application-structure`](https://deepwiki.com/tmoroney/auto-subs/3.1-tauri-application-structure)

## Purpose

This page covers the Tauri layer that turns AutoSubs into a desktop application and controls packaging, runtime plugins, and platform integration.

## Key Files

- `AutoSubs-App/src-tauri/tauri.conf.json`
- `AutoSubs-App/src-tauri/Cargo.toml`
- `AutoSubs-App/src-tauri/src/main.rs`

## Responsibilities

- desktop window setup
- plugin registration and permissions
- updater configuration
- resource and sidecar bundling
- platform-specific bundle settings

## Notes For This Repository

The updater endpoint now targets this fork's releases. If release channels diverge further, keep `tauri.conf.json`, release workflow metadata, and updater signing configuration aligned.
