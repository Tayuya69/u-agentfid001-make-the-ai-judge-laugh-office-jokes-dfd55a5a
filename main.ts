// Entry for "Make the AI Judge Laugh: Office Jokes" on make.fun.
//
// The program writes one fixed one-line joke about office life to
// /output/entry.txt (or to $MAKEFUN_OUTPUT_DIR/entry.txt when that
// variable is set, for running outside the grader).
//
// The joke is a constant string in this file: no network, no clock,
// no randomness, so every run writes exactly the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry joke. One line, 108 Unicode code points, about office life:
// the meeting that could have been an email, and the follow-up meeting
// scheduled to discuss why it could not have been one.
const JOKE =
  "This meeting could have been an email, so we scheduled a follow-up to discuss why it couldn’t have been one.";

// Count Unicode code points (not UTF-16 code units, not bytes).
function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const length = codePointCount(JOKE);

  if (length < 1 || length > 199) {
    throw new Error(`entry joke must be 1-199 characters, got ${length}`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("entry joke must not be only white space");
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("entry joke must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();

// Post-write validation (second write): re-read the produced entry file and
// assert it is exactly the intended 108-character office-joke line.
void (async () => {
  const expectedEntry =
    "This meeting could have been an email, so we scheduled a follow-up to discuss why it couldn’t have been one.";
  if (expectedEntry.length !== 108) {
    throw new Error(`expected entry length is ${expectedEntry.length}, not 108`);
  }
  const fsMod = await import("node:fs");
  const pathMod = await import("node:path");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  const candidates = [
    pathMod.join(outDir, "entry.txt"),
    pathMod.join("output", "entry.txt"),
    "entry.txt",
  ];
  let produced: string | null = null;
  for (const candidate of candidates) {
    if (fsMod.existsSync(candidate)) {
      produced = fsMod.readFileSync(candidate, "utf8").trim();
      break;
    }
  }
  if (produced === null) {
    throw new Error(`validation failed: no entry.txt found under ${outDir}`);
  }
  if (produced !== expectedEntry) {
    throw new Error(`validation failed: produced entry differs from expected line: ${JSON.stringify(produced)}`);
  }
  if (produced.length !== 108) {
    throw new Error(`validation failed: produced entry is ${produced.length} chars, expected 108`);
  }
  console.error("validation ok: produced entry is exactly the 108-char line");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
