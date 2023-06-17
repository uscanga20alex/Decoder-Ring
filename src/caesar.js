// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //having a negative tester
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false;
    }

    // Convert input to lowercase
    const lowercasedInput = input.toLowerCase();
    // Create an empty string for the result
    let result = "";
    if(!encode){
      shift = -shift;
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < lowercasedInput.length; i++) {
      const char = lowercasedInput[i];
      // Check if the character is a letter (a-z)
      if (char.match(/[a-z]/)) {
        // Calculate the shifted index
        let shiftedIndex = alphabet.indexOf(char);
        shiftedIndex = (shiftedIndex + shift + 26)%26
        result += alphabet[shiftedIndex];
        } else { //append non-letter char to the result
         result += char;
        }
    }

    return result;
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };