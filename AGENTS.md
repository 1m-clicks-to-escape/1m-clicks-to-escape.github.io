# Repository rules

These rules are enforced by Git hooks in `.githooks/` and by the `Repository rules` GitHub Action. Do not bypass them (no `--no-verify`).

1. **Commit messages are a bare version number only**, e.g. `1.0`, `1.1`, `1.2`. Each commit must be greater than the previous one (minor +1: `1.9` → `1.10`). No other text, no body, no prefixes.
2. **README.md contains exactly one line:** `# 1M Clicks To Escape`. Do not add any other content to README.md; put notes elsewhere.
3. Merge pull requests with **Squash and merge** and set the commit message to the next version number.
4. **Never commit internal build research**, such as the game detail export `*详情资料*.txt`. It is ignored by `.gitignore` and rejected by the hooks and the Action; keep it outside the repository.

Run `npm install` once after cloning so the hooks are enabled (`core.hooksPath=.githooks`).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
