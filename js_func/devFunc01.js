//using https://repl.it/repls/ParallelEsteemedQuotes
var a1 = function(a,b){ return a+b};
var a2 = (a,b) => a+b;
var a3 = (a,b) => {return a+b};
var a4 = a => b => a+b;
var a5 = 0;
var a6 = () => {};

console.log("a1: " + a1(2,3));
console.log("a2: " + a2(1,2));
console.log("a3: " + a3(1,2));
console.log("a4: " + a4(1)(2));
