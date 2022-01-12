#!/usr/bin/env zx

// Remove the dist directory
await $`rm -rf dist`

// Transpile typescript to ESM/CJS and emit declaration files
await $`tsc --project tsconfig.cjs.json & tsc --project tsconfig.esm.json & tsc --project tsconfig.types.json`

// Copy emoji.json
await $`xargs -n 1 cp -v src/assets/emoji.json<<<"dist/esm/assets/ dist/cjs/assets/"`