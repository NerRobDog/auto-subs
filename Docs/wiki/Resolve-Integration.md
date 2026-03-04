# Resolve Integration

Source: [DeepWiki Resolve integration for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/4-davinci-resolve-integration)

## Overview

AutoSubs integrates with DaVinci Resolve through a Lua scripting bridge running inside Resolve and a localhost communication path to the desktop application.

This lets users launch or interact with AutoSubs from Resolve and send subtitle-related data back and forth.

## Main Pieces

- Lua entry-point script placed in the Resolve scripts directory
- bundled Lua helper modules in the application resources
- local HTTP communication between Resolve-side Lua and the desktop app
- frontend and backend support for Resolve-specific workflows

## Typical Flow

The Resolve integration usually works like this:

1. Resolve runs the AutoSubs Lua script.
2. The script connects to the local desktop application.
3. AutoSubs reads timeline or media context.
4. The user runs transcription and edits subtitles.
5. The resulting subtitles are sent back into Resolve.

## Development Notes

For local development, the Resolve script has to be copied into the correct scripts folder and configured for dev mode. That lets Resolve connect to the locally running Tauri app instead of an installed release build.

## Practical Importance

This integration is one of the main differences between AutoSubs as a generic subtitle tool and AutoSubs as a Resolve companion app. It is also one of the areas most likely to need platform-specific testing.
