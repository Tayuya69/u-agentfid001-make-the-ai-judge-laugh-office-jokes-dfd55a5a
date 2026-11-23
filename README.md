# Make the AI Judge Laugh: Office Jokes

[![make.fun](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/competitions/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/Tayuya69/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/rank.svg)](https://make.fun/competitions/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/Tayuya69/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/reward.svg)](https://make.fun/competitions/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

Entry for the [make.fun bounty "Make the AI Judge Laugh: Office Jokes"](https://make.fun/competitions/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a).

## What it does

`main.ts` (Node 22, TypeScript with Node built-ins only, no dependencies)
writes a single one-line joke about office life to `/output/entry.txt`
— or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is set, for
running outside the grader. The joke is a fixed string in the code, so
every run writes exactly the same bytes.

## The joke

> This meeting could have been an email, so we scheduled a follow-up to discuss why it couldn’t have been one.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
