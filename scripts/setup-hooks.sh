#!/usr/bin/env bash
#
# One-time per clone: point git at the version-controlled .githooks/ so the Size cap judges each
# commit here. Run from anywhere in the repo. On Windows `git config core.hooksPath .githooks` alone
# is enough: Git for Windows runs the hooks under Git Bash, and the exec bit is not needed there.
#
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"
git config core.hooksPath .githooks
chmod +x .githooks/* 2>/dev/null || true

echo "Hooks installed: core.hooksPath -> .githooks (pre-commit: the Size cap on the staged files; post-commit: an Agent box's landing; prepare-commit-msg: an Agent box's Ticket: trailer)."
