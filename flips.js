import { coinFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
import { coinFlip } from "./modules/coin.mjs";

const require = createRequire(import.meta.url);
const args = require('yargs').argv;

let flips;

if (typeof args.number == "undefined") {
    flips = coinFlips(1);
} else {
    flips = coinFlips(args.number);
}
console.log(flips);