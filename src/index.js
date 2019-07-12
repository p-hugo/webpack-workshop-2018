import footer from "./footer";
import { styles, scripts } from "./header";
import buttonFunc from "./button";
import { makeMonster } from "./monster";

console.log(footer(), styles, scripts, buttonFunc("Billy"));
console.log(makeMonster("Flayer"));
