// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is a post on X: a GTA 6 meme whose picture carries
// make.fun's ghost mascot, posted from a public account. This repository
// hands in the post's address, and this program's one job is to deliver
// that address to the grader exactly as committed:
//
//   1. Read POST.json from the repository root (MAKEFUN_BOT_DIR).
//   2. Check it is a JSON object whose "url" names an X post
//      (https://x.com/<handle>/status/<id> or the twitter.com twin).
//   3. Copy the file, byte for byte, to /output/POST.json
//      (MAKEFUN_OUTPUT_DIR), where the gate reads it.
//
// The program is deterministic: no network, no clock, no randomness and
// no reads outside the repository, so two runs write identical bytes.
// On success it prints nothing; a malformed POST.json exits non-zero.
//
// The meme picture itself (meme.png, kept in this repository for the
// record) is judged from the X post, not from /output, so it is
// deliberately not copied: the gate asks for POST.json and nothing else.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postFile = join(botDir, "POST.json");

// An X post address: a handle of letters, digits or underscores, then a
// purely numeric status id. Anything else is not a post we can hand in.
const POST_URL = /^https:\/\/(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/[0-9]+$/;

function fail(reason: string): never {
  console.error(`main.ts: ${reason}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(postFile, "utf8"));
} catch (err) {
  fail(`POST.json is not readable JSON: ${(err as Error).message}`);
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== "string" || !POST_URL.test(url)) {
  fail('POST.json must look like {"url": "https://x.com/<handle>/status/<id>"}');
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postFile, join(outputDir, "POST.json"));
