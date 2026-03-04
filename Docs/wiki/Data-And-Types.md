# Data And Types

Source: [DeepWiki data and types for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/7-data-and-types)

## Overview

AutoSubs relies on shared data structures as a contract between frontend and backend layers.

These types define how the application represents:

- transcripts and subtitle segments
- speaker metadata
- model catalog entries
- workflow configuration
- file and export formats

## Why It Matters

The shared type layer reduces drift between:

- Rust backend logic
- TypeScript frontend state
- serialization across Tauri command boundaries

## Important Data Areas

### Subtitle Data

Subtitle records need to represent text, timing, and speaker-related metadata in a way that works for editing, export, and Resolve integration.

### Model Catalog

Model metadata describes what can be downloaded, what is installed, and what should be offered in the UI.

### File Formats

The application has to handle media inputs, subtitle outputs, and internal state serialization consistently across platforms.

## Practical Note For This Fork

If release channels or updater metadata continue to diverge from the original project, keeping type definitions explicit becomes more important because build metadata and UI-facing release information can no longer be assumed to match upstream.
