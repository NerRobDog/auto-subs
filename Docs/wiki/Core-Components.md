# Core Components

Source: [DeepWiki core components for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/3-core-components)

## Overview

AutoSubs is made up of four major technical components:

- the Tauri desktop application shell
- the Rust backend
- the transcription engine crate
- the React frontend

These components are separated so UI, desktop integration, and model execution can evolve with clearer boundaries.

## Tauri Application Shell

The Tauri layer packages the application, defines window and bundle settings, and exposes native capabilities to the frontend.

Its responsibilities include:

- desktop window lifecycle
- updater integration
- plugin registration
- resource bundling
- platform-specific packaging behavior

## Rust Backend

The backend exposes command handlers to the UI and coordinates app-side logic such as:

- transcription orchestration
- model and file handling
- bridge communication
- process and resource management

This is the main boundary between the React UI and the lower-level transcription engine.

## Transcription Engine

The engine is a separate Rust crate used by the desktop application.

It is responsible for:

- model download and caching
- speech inference backends
- diarization support
- translation helpers
- platform-specific inference feature selection

## React Frontend

The frontend owns user-facing workflows:

- selecting files and models
- editing subtitles
- managing speakers and styling
- presenting settings and update prompts

The UI is implemented under `AutoSubs-App/src/` and communicates with the backend through Tauri APIs and app-specific commands.
