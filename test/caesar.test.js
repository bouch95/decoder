// Write your tests here!
const expect = require("chai").expect;

const {caesar} = require("../src/caesar");
describe("caesar", () => {
    it("Shift equal to 0, less than -25, or greater than 25, the function should return false.", () => {
    const input = "good morning"
      const expected = false;
      const actual = caesar(input, 30);
      expect(actual).to.equal(expected);
   });   
      it("Decode the input correctly", () => {
      const expected = 'thinkful';
      const actual = caesar("wklqnixo", 3, false);
      expect(actual).to.equal(expected);
   });   
    
  });