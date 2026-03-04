# Transcription Pipeline

Source: [DeepWiki `6.2-transcription-pipeline`](https://deepwiki.com/tmoroney/auto-subs/6.2-transcription-pipeline)

## Overview

The transcription pipeline transforms input media into editable subtitle segments.

## High-Level Steps

1. ingest input source
2. normalize or prepare audio
3. run speech model inference
4. optionally apply diarization
5. map output to subtitle segments
6. pass results to UI editing layers

## Implementation Boundary

Most execution stages are backend and engine responsibilities, while configuration and result interaction are frontend responsibilities.
