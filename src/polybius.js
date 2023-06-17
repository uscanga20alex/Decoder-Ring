// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //create the grid, encoded and decoded
  const polyAlpha = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
    l: 13, m: 23, n: 33, o: 43, p: 53, 
    q: 14, r: 24, s: 34, t: 44, u: 54, 
    v: 15, w: 25, x: 35, y: 45, z: 55,
  }
  const polyNums = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  }
  for (let letter in polyAlpha){
    const num = polyAlpha[letter];
    polyNums[num] = letter;
  }
  const charToNum = (char) =>{
    const num = polyAlpha[char];
    if(!num){
      return char;
    }
    return num;
  };
  const decodeNum = (num) => {
    if (num === "42"){
      return "i/j";
    }
    else if (num === " "){
      return num;
    }
    return polyNums[num];
  }

  function polybius(input, encode = true) {
    const lowercaseInput = input.toLowerCase();
    const splitInput = lowercaseInput.split("");
    // encoding
    if(encode) {
      const encoder = splitInput.map(charToNum);
      return encoder.join("");
      } else {
        let counter = [];
        splitInput.map((element) => {
          if (element !== " "){
            counter.push(element);
          }
        }); //looking for odd counter to return false
        if (counter.length % 2 === 1){
          return false;
        }
      }
    //decoding
    let firstDigit;
    const numsToDecode = [];
    splitInput.forEach((digit) => {
      if (digit === " "){
        numsToDecode.push(digit);
      } else if (!firstDigit) {
        firstDigit = digit;
      } else {
        numsToDecode.push(firstDigit + digit);
        firstDigit = null;
      }
    });
    const decoder = numsToDecode.map(decodeNum);
    return decoder.join("");
  }

  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
