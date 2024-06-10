// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const letters = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  function shiftLetter(char, shift) {
    
    
    let indexPosition = letters.indexOf(char);
    if (indexPosition + shift > 25) {
        shiftIndex = indexPosition + shift - 26;
    } else if (indexPosition + shift < 0) {
        shiftIndex = indexPosition + shift + 26;  
    } else {
        shiftIndex = indexPosition + shift;
    }
    return shiftIndex;
  }
  
  
  function caesar(input, shift, encode = true) {
    // your solution code here
    
    
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    if (!encode) shift = shift * -1;
    let shiftArray = [];
    let lowerInput = input.toLowerCase();
    let inputArray = lowerInput.split("");
    console.log(inputArray);
    inputArray.forEach(char => {
        if (/[a-zA-Z]/.test(char)) {
            shiftLetter(char,shift);
            shiftArray.push(letters[shiftIndex]);
        } else {
            shiftArray.push(char);
        }
    });
    let output = shiftArray.join('');
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
