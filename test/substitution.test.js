// Write your tests here!
const expect = require("chai").expect;

const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it("Encoding, alphabet should included have exactly 26 characters, else false", () => {
        
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "jrufscpw";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });   
    
    it("Decoding, alphabet should included have exactly 26 characters, encode must include 'false', else false", () => {
        
        const input = "y&ii$r&";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        const expected = "message";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.equal(expected);
    });   
    
});
