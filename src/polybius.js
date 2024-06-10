// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const letters = [
    ["a","b","c","d","e"],
    ["f","g","h","(i/j)","k"],
    ["l","m","n","o","p"],
    ["q","r","s","t","u"],
    ["v","w","x","y","z"],
];

function polybius(input, encode = true) {
    if (!input) return false;
    
    // Encode or Decode
    if (encode === true)  return encodeInput(input);
    if (encode === false) return decodeInput(input);
     
}

    //// ENCODE ///
function encodeInput(input) {
    let lowerInput = input.toLowerCase();
    let inputArray = lowerInput.split("");
    console.log(inputArray);
    let encodedMessage = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === ' ') {
            encodedMessage.push(' ');
        } else if (inputArray[i] === 'i' || inputArray[i] === 'j') {
            encodedMessage.push(42);
        } else {
            for (let x = 0; x < letters.length; x++) {
                for (let y = 0; y < letters[x].length; y++) {
                    if (inputArray[i] === letters[x][y] || inputArray[i] === 'i' || inputArray[i] === 'j') {
                        encodedMessage.push(y+1,x+1);
                    }
                     
                }
            }
        }
    }
    let encodedOutput = encodedMessage.join('');
    return encodedOutput;
}    
    //// DECODE ////
function decodeInput(input) {
    // Test to see if even numbers
    let testIfEven = input.replace(/\s/g, '');
    
    let length = testIfEven.length;
    if (length % 2 !== 0) {
        return false;
    }
    
    let decodedMessage = [];
    let inputArray = input.split("");
    for (let i = 0; i < inputArray.length; i++) {
        let poly = i;
        if (inputArray[i] === " ") {
            decodedMessage.push(inputArray[i]);
        } else {
            decodedMessage.push(letters[(inputArray[poly+1])-1][(inputArray[poly])-1]);
            i++;    
        }   
    }
    let decodedOutput = decodedMessage.join('');
    return decodedOutput;
}
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
