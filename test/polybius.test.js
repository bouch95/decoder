// Write your tests here!

const expect = require("chai").expect;

const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("Decoding, number of characters should be even, else false", () => {
        const letters = [
            ["a","b","c","d","e"],
            ["f","g","h","(i/j)","k"],
            ["l","m","n","o","p"],
            ["q","r","s","t","u"],
            ["v","w","x","y","z"],
        ];
        
        const input = "54321233521254134"
        const expected = false;
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });   
    
    it("Encoding, spaces should be maintained", () => {
        const letters = [
            ["a","b","c","d","e"],
            ["f","g","h","(i/j)","k"],
            ["l","m","n","o","p"],
            ["q","r","s","t","u"],
            ["v","w","x","y","z"],
        ];
        
        const input = "Hello world";
        const expected = '3251131343 2543241341';
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });   
    
});
