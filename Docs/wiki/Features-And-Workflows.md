# Features And Workflows

Source: [DeepWiki features and workflows for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/6-features-and-workflows)

## Overview

AutoSubs combines several user-facing features into end-to-end workflows rather than exposing isolated tools.

## Main Workflows

- standalone transcription from user-selected media files
- Resolve-connected transcription from editing timelines
- model management and download workflows
- speaker diarization and styling workflows
- subtitle editing and export workflows

## Dual Operating Modes

The application supports:

- standalone mode for direct media transcription
- Resolve mode for editor-centric subtitle work

This dual-mode approach is one of the core product behaviors and affects both UI and backend flows.

## Transcription Pipeline

The typical pipeline is:

1. select input media or timeline source
2. choose model and language options
3. run transcription
4. optionally apply diarization
5. edit subtitles and speaker styling
6. export or send results back to Resolve

## Model Management

The app includes workflows for downloading, selecting, and removing supported models so users can control local model storage and choose the tradeoff between speed and quality.

## Speaker Workflows

Speaker diarization and styling are integrated into the editing flow rather than treated as a completely separate tool. This is important for creator-focused usage where speaker labeling and track appearance are part of the final output.
