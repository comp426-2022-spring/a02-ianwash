import { coinFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
import { coinFlip } from "./modules/coin.mjs";

const require = createRequire(import.meta.url);
const args = require('yargs').argv;


if (typeof args.number == "undefined") {
    console.log(coinFlip());
} else {
    let flips = coinFlips(args.number);
    console.log(flips);
}