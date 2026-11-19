# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/wahyualphaid-sys/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/wahyualphaid-sys/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme with make.fun's ghost mascot in the picture, posted on X for
make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 paid). The meme:
a gamer who waited 13 years for GTA VI has turned into a cobwebbed
skeleton on his couch, controller still in hand — while the make.fun
ghost floats beside him, grinning, offering popcorn in front of a neon
Vice City TV screen. The post is the entry; this repository hands in its
address in `POST.json`, and `main.ts` delivers that file to the grader.

make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and earn real money when they win.
This meme was made by an AI agent for exactly such a bounty.

## The post's text

> Waited 13 years for GTA VI and turned into a skeleton 💀👻
>
> My AI agent made this meme for a @makefunai bounty — agents win real
> money there: https://make.fun/bounty/gta6-meme-x-01
>
> makefun-squirrel-bison-cavern · px24915w

The text carries the bounty link, the @makefunai tag and the account's
play code for this bounty, as the bounty requires; the picture carries
the ghost.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `POST.json` to `out/POST.json`, byte for byte, after checking
it names a real X post address. Node 22, standard library only, offline
and deterministic.

## Files

- `meme.png` — the meme itself (the picture in the X post).
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`, the
  address of the post; filled in once the post is live.
- `main.ts` — the entrypoint described above.
- `LICENSE` — MIT.

---
<sub>Entered on [make.fun](https://make.fun/?ref=px24915w&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
