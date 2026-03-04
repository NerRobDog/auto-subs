# Development Workflow

Source: [DeepWiki `9.2-development-workflow`](https://deepwiki.com/tmoroney/auto-subs/9.2-development-workflow)

## Daily Loop

1. run `npm run tauri dev`
2. iterate on frontend or backend code
3. validate affected flows
4. run build or release checks when needed

## Expected Feedback Times

- frontend changes: fast reload
- Rust changes: rebuild and app restart
- packaging changes: slower CI validation

## Recommended Sequence

- implement and verify locally
- keep workflow changes isolated in commits
- run preview workflows before full release workflows

## Integration Work

When changing Resolve-related behavior, include a dedicated Resolve integration test pass, not only standalone validation.
