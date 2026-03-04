# Rust Backend

Source: [DeepWiki `3.2-rust-backend`](https://deepwiki.com/tmoroney/auto-subs/3.2-rust-backend)

## Purpose

The Rust backend is the core runtime behind the desktop UI. It handles command execution, startup logic, integration plugins, and bridge responsibilities that are not suitable for frontend code.

## Key Areas

- app startup and lifecycle in `src-tauri/src/main.rs`
- Tauri command surface exposed to React
- model and transcription coordination
- file and process management
- logging and runtime diagnostics

## Why It Matters

Most behavior that depends on OS integration, long-running jobs, or secure app capabilities should remain in the backend layer rather than in UI code.
