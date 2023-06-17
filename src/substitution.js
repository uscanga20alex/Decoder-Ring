// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  

  function substitution(input, alphabet, encode = true) {
  // Check if the alphabet is valid
  if (!isValidAlphabet(alphabet)) {
    return false;
  }
  
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const inputLowercase = input.toLowerCase();
  let output = "";

  for (let i = 0; i < inputLowercase.length; i++) {
    const char = inputLowercase[i];
    let index;

    if (char === " ") {
      // Preserve spaces
      output += " ";
      continue;
    } else if (encode) {
      // Encoding: find the corresponding substitution character
      index = standardAlphabet.indexOf(char);
      if (index !== -1) {
        output += alphabet[index];
      }
    } else {
      // Decoding: find the corresponding standard character
      index = alphabet.indexOf(char);
      if (index !== -1) {
        output += standardAlphabet[index];
      }
    }
  }

  return output;
}

function isValidAlphabet(alphabet) {
  // Check if the alphabet length is 26
  if (alphabet === undefined || alphabet.length !== 26) {
    return false;
  }

  // Check if all characters are unique
  const uniqueChars = [...new Set(alphabet)];
  if (uniqueChars.length !== 26) {
    return false;
  }

  return true;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
