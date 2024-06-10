// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function substitution(input, alphabet, encode = true) {
  if (!alphabet) return false;  
  if (!uniqueCipher(alphabet) || alphabet.length !== 26) return false;
    let cipher = alphabet.split("")
    if (encode) return encodeSub(input, cipher);
    if (!encode) return decodeSub(input, cipher);
}

function encodeSub(input, cipher) {
    let encodedMessage = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") encodedMessage.push(" ");
        for (let a = 0; a < alpha.length; a++) {
            if (input[i] === alpha[a]) encodedMessage.push(cipher[a]);
        }
    }
    let encodedOutput = encodedMessage.join('');
    return encodedOutput;    
}

function decodeSub(input, cipher) {
    let decodedMessage = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") decodedMessage.push(" ");
        for (let c = 0; c < cipher.length; c++) {
            if (input[i] === cipher[c]) decodedMessage.push(alpha[c]);
        }
    }
    let decodedOutput = decodedMessage.join('');
    return decodedOutput;    
}  
    
function uniqueCipher(alphabet) {
    let charSet = new Set();
    for (let char of alphabet) {
      if (charSet.has(char)) {
        return false;
      }
      charSet.add(char);
    }
    return true;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
