import { createRequire } from 'module';
import { flipACoin } from './modules/coin.mjs';

const require = createRequire(import.meta.url);
const args = require('yargs').argv;

if (typeof args.call === "undefined" || (args.call !== "heads" && args.call !== "tails")) {
    console.log("Error: no input.");
} else {
    console.log(flipACoin(args.call));
}
