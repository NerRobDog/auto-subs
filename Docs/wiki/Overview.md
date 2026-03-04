# Overview

Source: [DeepWiki overview for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs)

## What AutoSubs Is

AutoSubs is a cross-platform desktop application for generating, editing, and exporting subtitles from audio and video. It combines a Rust backend with a React and TypeScript frontend through Tauri.

The app includes a local transcription engine with multiple model backends, optional speaker diarization, subtitle post-processing, and DaVinci Resolve integration through a Lua bridge and a local HTTP connection.

## Operating Modes

AutoSubs supports two main workflows:

- Standalone mode for transcribing user-selected media files and exporting subtitles or transcript text.
- DaVinci Resolve mode for working from the active Resolve timeline and sending styled subtitles back into the editor.

## Core Capabilities

- Local transcription with multiple speech model backends
- Voice activity detection and optional speaker diarization
- Subtitle editing and speaker styling
- SRT import and export
- In-app update support
- Cross-platform packaging for Windows, macOS, and Linux

## High-Level Architecture

- `AutoSubs-App/src/`: React and TypeScript frontend
- `AutoSubs-App/src-tauri/src/`: Rust application backend
- `AutoSubs-App/src-tauri/crates/transcription-engine/`: transcription engine
- `AutoSubs-App/src-tauri/resources/`: DaVinci Resolve Lua resources

## Technology Stack

- Tauri for the desktop shell
- React, TypeScript, Vite, Tailwind CSS, and Radix UI for the frontend
- Rust for backend commands and transcription logic
- LuaJIT for DaVinci Resolve integration
- Hugging Face for downloadable models

## Repository Layout

The repository is centered around `AutoSubs-App`, which contains the frontend, Tauri backend, Resolve integration resources, and the transcription engine crate.
