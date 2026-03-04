# Communication Protocol

Source: [DeepWiki `4.3-communication-protocol`](https://deepwiki.com/tmoroney/auto-subs/4.3-communication-protocol)

## Purpose

AutoSubs and Resolve integration use a local HTTP/JSON protocol for command and data exchange.

## Protocol Characteristics

- localhost transport
- JSON request and response payloads
- command-style endpoint methods
- error handling paths for unavailable bridge or invalid payloads

## Design Goal

Keep the protocol stable and explicit so UI features can evolve without silently breaking Resolve-side behavior.

## Fork Maintenance

When introducing fork-only features, avoid changing protocol shapes unless required. Prefer additive endpoint fields to reduce compatibility risks.
