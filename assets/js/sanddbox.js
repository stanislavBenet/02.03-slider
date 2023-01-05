"use srtict";

const createAdder = (start = 100) => value => start += value; 

// function createAdder(start = 100) {
//    let accum = start;
//    return function adder(value) {
//      return accum = start + value;
//    };
// }

const adder = createAdder(100);