# Platform-Specific Builds

Source: [DeepWiki `8.2-platform-specific-builds`](https://deepwiki.com/tmoroney/auto-subs/8.2-platform-specific-builds)

## Purpose

Platform-specific builds define how AutoSubs is compiled and packaged differently for Windows, macOS, and Linux.

## Differences By Platform

- build flags and target triples
- signing and notarization requirements
- bundle formats and asset naming
- additional dependencies (for example Vulkan-related requirements in some paths)

## Current Practical Constraints

- macOS release jobs need complete Apple signing and notarization secrets
- Linux release jobs need valid updater signing keys
- Windows release behavior depends on selected workflow path and runtime dependencies
