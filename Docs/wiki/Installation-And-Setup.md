# Installation And Setup

Source: [DeepWiki installation and setup for `tmoroney/auto-subs`](https://deepwiki.com/tmoroney/auto-subs/8.3-installation-and-setup)

## Overview

This page focuses on post-installation setup, especially the integration steps that make AutoSubs visible to DaVinci Resolve on desktop systems.

## What Installation Needs To Accomplish

Beyond placing the app binary on disk, installation also needs to ensure:

- bundled resources are present
- Resolve integration scripts are installed or available
- platform-specific packaging behavior is respected

## Resolve Script Deployment

Windows and macOS installs are expected to make the Resolve-side script available in the correct scripts location so users can launch AutoSubs from Resolve without a manual setup process.

During development, this step is usually manual. In release packaging, it is part of the installer story.

## Current Fork Note

Installer download links are temporarily hidden in the README until stable release assets for this repository are published. When stable release packaging is finalized, this page should be updated to reflect the exact install behavior of the fork rather than the original project.
