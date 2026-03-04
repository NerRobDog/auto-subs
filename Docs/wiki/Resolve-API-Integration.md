# Resolve API Integration

Source: [DeepWiki `4.2-resolve-api-integration`](https://deepwiki.com/tmoroney/auto-subs/4.2-resolve-api-integration)

## Purpose

This layer is the frontend-side client for Resolve bridge endpoints, typically implemented in TypeScript API modules.

## Responsibilities

- sending requests to the local Resolve bridge
- normalizing request and response payloads
- handling bridge availability and errors
- exposing a clean interface to UI components

## Typical Location

- `AutoSubs-App/src/api/resolve-api.ts`
- `AutoSubs-App/src/api/resolveAPI.ts`

## Practical Risk

If bridge contracts change, update both Lua-side handlers and frontend API wrappers in sync.
