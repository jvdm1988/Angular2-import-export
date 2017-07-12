"use strict";
// In this file we write out the functions which are compiled to the
// math.js file. We import them in the main file app.ts to use them
// export is used to be able to import them in app.ts/app.js
exports.__esModule = true;
// ---------------------------------- takes strictly a number
//------------------------------------------|
function powerOf2(x) {
    if (x === void 0) { x = 0; }
    // ----------------------------------|
    // ------------ if no x is provided, x will be 0 (default)
    return x * x;
}
exports.powerOf2 = powerOf2;
function randomInteger(max) {
    if (max === void 0) { max = 100; }
    return Math.floor(Math.random() * max);
}
exports.randomInteger = randomInteger;
