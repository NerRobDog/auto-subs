# User Interface

Source: [DeepWiki user interface for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/5-user-interface)

## Overview

The AutoSubs UI is a React-based desktop frontend that covers the full end-user workflow from input selection to subtitle editing and export.

## Main UI Areas

- application layout and navigation
- transcription workspace
- subtitle management and editing
- settings and configuration
- reusable component library

## Layout

The interface is centered around a desktop workspace with controls for transcription, model selection, and subtitle editing. The app supports both standalone usage and Resolve-connected usage without requiring two separate products.

## Subtitle Editing

The UI includes dedicated subtitle management features such as:

- editing subtitle text and timing
- speaker labeling
- style customization
- subtitle viewer support

## Settings

Settings cover the application behavior that users need to control without editing files manually, including model behavior, workflow preferences, and release-related options where applicable.

## Component Strategy

The interface uses shared UI primitives and reusable components so pages can stay consistent while still supporting more specialized subtitle and speaker-editing controls.
