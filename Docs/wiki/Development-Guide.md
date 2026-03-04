# Development Guide

Source: [DeepWiki development guide for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/9-development-guide)

## Minimum Tooling

The practical baseline for local development is:

- Node.js 18+
- npm
- Rust toolchain
- Tauri CLI 2.x

Platform-specific release work may additionally require signing tools or packaging prerequisites.

## Quick Start

From the repository root:

```bash
cd AutoSubs-App
npm install
npm run tauri dev
```

This starts the Vite frontend and the Tauri desktop shell together.

## Development Flow

Typical local development behavior:

- frontend `.tsx`, `.ts`, and CSS changes are handled by Vite with fast reloads
- Rust backend changes trigger a rebuild and application restart
- `tauri.conf.json` changes usually require an app restart

The frontend iteration loop is much faster than backend or packaging changes, so UI work and Rust work have different feedback times.

## Resolve Development

For Resolve integration during development, the Lua script from `AutoSubs-App/src-tauri/resources/` must be copied into the DaVinci Resolve scripts directory and configured for local development.

That setup allows Resolve to launch or connect to the dev application over the local bridge.

## Main Areas Of Work

### Frontend

Primary location: `AutoSubs-App/src/`

Focus areas include:

- workspace and editor UI
- model management
- subtitle styling and speaker presentation
- settings and release-channel behavior

### Backend

Primary location: `AutoSubs-App/src-tauri/src/`

Focus areas include:

- Tauri command handlers
- file and OS integration
- app startup and plugin registration
- updater and resource configuration

### Transcription Engine

Primary location: `AutoSubs-App/src-tauri/crates/transcription-engine/`

Focus areas include:

- model downloads and cache handling
- transcription backends
- diarization and translation helpers
- platform-specific inference configuration

## Verifying A Dev Setup

A healthy dev setup should let you:

- launch the desktop window with `npm run tauri dev`
- open the standalone UI
- select media files
- access model-management UI without runtime failures

If Resolve integration is being tested, the script should also appear under `Workspace -> Scripts -> AutoSubs`.

## Recommended Reading

- [Overview](Overview.md)
- [System Architecture](System-Architecture.md)
- [Build And Distribution](Build-and-Distribution.md)
