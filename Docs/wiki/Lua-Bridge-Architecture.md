# Lua Bridge Architecture

Source: [DeepWiki `4.1-lua-bridge-architecture`](https://deepwiki.com/tmoroney/auto-subs/4.1-lua-bridge-architecture)

## Purpose

The Lua bridge runs inside DaVinci Resolve and provides the integration boundary between Resolve internals and the desktop app.

## Key Pieces

- Resolve-facing Lua entry script
- Lua helper modules bundled with AutoSubs resources
- HTTP bridge endpoint consumed by the frontend

## Responsibilities

- script bootstrap from Resolve
- reading Resolve context
- exposing local bridge methods
- passing data between Resolve and AutoSubs runtime

## Development Note

When testing integration locally, script placement and dev-mode path configuration are the first things to validate.
