# System Architecture

Source: [DeepWiki system architecture for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/2-system-architecture)

## Overview

AutoSubs is structured as a Tauri desktop application with four main layers:

- React and TypeScript frontend
- Rust Tauri backend
- Transcription engine crate for model execution
- Lua bridge and resources for DaVinci Resolve integration

These layers communicate through Tauri commands, local file access, and a localhost bridge used by Resolve integration.

## Repository Layout

The main code lives under `AutoSubs-App/`.

- `AutoSubs-App/src/`: frontend application, pages, contexts, and UI
- `AutoSubs-App/src-tauri/src/`: Rust backend and command handlers
- `AutoSubs-App/src-tauri/crates/transcription-engine/`: transcription and model logic
- `AutoSubs-App/src-tauri/resources/`: Lua scripts and Resolve-side resources
- `AutoSubs-App/src-tauri/binaries/`: bundled FFmpeg sidecars for release builds

## Frontend Layer

The frontend is built with React, TypeScript, Vite, Tailwind CSS, and Radix UI primitives.

Key responsibilities:

- subtitle editing and viewer UI
- model management screens
- settings and update prompts
- workflow switching between standalone and Resolve-backed usage

State is organized through React Context providers in `AutoSubs-App/src/contexts/`.

## Backend Layer

The Tauri backend is responsible for:

- exposing commands to the frontend
- file system and OS integration
- coordinating transcription jobs
- bundling updater, shell, and dialog capabilities
- managing app resources such as FFmpeg sidecars

The main application config is in `AutoSubs-App/src-tauri/tauri.conf.json`.

## Transcription Engine

The Rust workspace separates the desktop shell from the inference engine:

- the Tauri app crate builds the desktop binary
- `transcription-engine` contains model execution and related logic

This separation keeps inference logic more isolated and makes platform-specific feature flags easier to manage.

## Resolve Integration

DaVinci Resolve support is implemented through Lua resources shipped with the application.

The integration uses:

- a Resolve script entry point
- bundled Lua helper modules
- a localhost connection between Resolve-side Lua and the desktop app

This allows AutoSubs to launch from Resolve and exchange project or timeline-related data with the desktop application.

## Platform Features

Builds use platform-specific Cargo feature flags to select the correct native dependencies and packaging behavior. In the current fork, this matters especially for:

- macOS ARM and Intel differences
- Windows packaging and signing
- Linux packaging
- optional Vulkan-related dependencies in some Windows paths
