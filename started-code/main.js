"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(2));
        console.log(word.concat(" Morning"));
        console.log(word.slice(2, -1));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence);
        console.log(sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log(str);
        console.log(str.replace(/[^aeiou]/gi, "").length);
    };
    return StringManipulations;
}());
var object = new StringManipulations();
object.print("Harsha");
object.printWithSpace("PROGRAD");
object.findVowel("Harsha");
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        console.log(num);
        if (num % num == 0 && num % 1 == num) {
            console.log("prime number");
        }
        else {
            console.log("not a prime number");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        console.log(num);
        if (num % 9 == 1) {
            console.log("magic number");
        }
        else {
            console.log("not magic number");
        }
    };
    return NumbersManipulations;
}());
var obj = new NumbersManipulations();
obj.findPrime(15);
obj.findMagic(199);
