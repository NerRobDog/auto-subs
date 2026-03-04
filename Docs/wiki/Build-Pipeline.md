# Build Pipeline

Source: [DeepWiki `8.1-build-pipeline`](https://deepwiki.com/tmoroney/auto-subs/8.1-build-pipeline)

## Purpose

This page focuses on CI/CD workflow execution for builds, packaging, and release publishing.

## Main Workflow

- [package.yml](/Users/nik/Documents/auto-subs/.github/workflows/package.yml)

## Responsibilities

- version and release metadata preparation
- platform matrix builds
- artifact packaging
- release asset upload
- updater metadata generation

## Fork Notes

This fork already includes channel-aware release metadata. Keep pipeline logic aligned with the stable and experimental release strategy.
