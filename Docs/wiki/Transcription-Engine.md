# Transcription Engine

Source: [DeepWiki `3.3-transcription-engine`](https://deepwiki.com/tmoroney/auto-subs/3.3-transcription-engine)

## Purpose

`transcription-engine` is a dedicated Rust crate that encapsulates speech processing and model logic used by the desktop application.

## Key Responsibilities

- model loading and caching
- transcription execution
- diarization support
- translation helpers
- inference backend and platform feature selection

## Location

- `AutoSubs-App/src-tauri/crates/transcription-engine/`

## Integration

The desktop app crate calls this engine crate through workspace dependencies so UI and platform orchestration stay separate from model internals.
