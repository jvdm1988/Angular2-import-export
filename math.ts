// In this file we write out the functions which are compiled to the
// math.js file. We import them in the main file app.ts to use them
// export is used to be able to import them in app.ts/app.js


// ---------------------------------- takes strictly a number
//------------------------------------------|
export function powerOf2(x: number = 0): number {
// ----------------------------------|
// ------------ if no x is provided, x will be 0 (default)
  return x * x;
}


export function randomInteger(max: number = 100): number{
  return Math.floor(Math.random() * max);
}
