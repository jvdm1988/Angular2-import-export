"use strict";
exports.__esModule = true;
// Here we are importing the functions written in math.ts
// functions are written out in math.ts, and we call it here in the main file
// This is to avoid big files with many lines of code
// we break it up into smaller files per onderdeel
var math_1 = require("./math");
// import * as mathThing from "./math";
// this means we import the whole file of math.ts
// mathThing is a made up name. If we use this option, we have to call
// functions like this: console.log(mathThing.powerOf2(50));
console.log(math_1.powerOf2(50));
console.log("RANDOM INTEGER");
console.log(math_1.randomInteger(999));
