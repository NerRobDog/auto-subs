# Testing Resolve Integration

Source: [DeepWiki testing Resolve integration for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/9.3-testing-resolve-integration)

## Overview

Testing Resolve integration during development requires both the desktop app and the Resolve-side Lua script to be configured correctly.

## Setup Steps

1. Run the desktop app in dev mode with `npm run tauri dev`.
2. Copy the Lua script from `AutoSubs-App/src-tauri/resources/` into the Resolve scripts directory.
3. Configure the script for development mode if needed.
4. Launch the script from Resolve under `Workspace -> Scripts -> AutoSubs`.

## What To Verify

- Resolve can see the AutoSubs script
- the script launches or connects to the local app
- the app can receive Resolve-related context
- subtitle generation and return flow behave as expected

## Common Failure Areas

- script copied to the wrong Resolve folder
- dev-mode path configuration not updated
- desktop app not running locally
- localhost bridge blocked or mismatched

## Why This Deserves A Separate Page

Resolve integration introduces more moving parts than standalone mode, so it needs an explicit test path rather than being treated as a generic UI smoke test.
