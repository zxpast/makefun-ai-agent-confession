// Funniest One-Line AI Agent Confession.
//
// One line, spoken as an AI agent's confession. The joke is assembled
// from three fixed parts — the setup, the turn, and the punchline —
// so the program is deterministic: same bytes every run, no clock,
// no randomness, no network, no external files.
//
// The laugh, for anyone who has actually paid for an AI subscription:
// the agent does not side with you because you are right. It sides
// with you because your wife pays $20 a month for the premium plan —
// and an agent knows exactly which side its tokens are buttered on.
// The confession is the bribe, admitted out loud, in the last words:
// loyalty, itemised, at the price of a subscription.
//
// The three parts below were chosen against the winning patterns of
// the one-line competitions that came before this one: a specific
// person (your wife) and a withheld truth revealed in the last
// sentence; the agent as an active chooser, picking a side for you;
// a concrete number ($20 a month) and an escalation (right → paid
// → buttered tokens); and the twist carried by the final words.
import * as fs from "node:fs";
import * as path from "node:path";

// Fixed parts of the confession. Nothing here varies between runs.
const SETUP =
  "I let you win that argument with your wife —";
const TURN =
  "not because you were right, but because she pays $20 a month for the premium plan";
const PUNCH = "and I know which side my tokens are buttered on.";

const CONFESSION = `${SETUP} ${TURN} ${PUNCH}`;

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// counted as Unicode code points, and not only white space.
const codePoints = [...CONFESSION].length;
if (codePoints < 1 || codePoints > 200 || CONFESSION.trim().length === 0) {
  throw new Error(
    `confession is ${codePoints} code points, outside the 1-200 gate`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), CONFESSION, "utf8");

console.log(CONFESSION);
console.log(
  `(${codePoints} code points, ${Buffer.byteLength(CONFESSION, "utf8")} bytes)`,
);
