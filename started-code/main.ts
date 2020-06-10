import {
    StringManipulationService,
    NumberManipulationService
  } from "./main-service";
  
  class StringManipulations implements StringManipulationService {
    public print(word: string): void {
      console.log(word);
      console.log(word.toUpperCase());
      console.log(word.toLowerCase());
      console.log(word.charAt(2));
      console.log(word.concat(" Morning"));
      console.log(word.slice(2, -1));
  
      console.log(word.length);
    }
    printWithSpace(sentence: string): void {
      console.log(sentence);
      console.log(sentence.split("").join(" "));
    }
  
    findVowel(str: string): void {
      console.log(str);
      console.log(str.replace(/[^aeiou]/gi, "").length);
    }
  }
  let object = new StringManipulations();
  
  object.print("Harsha");
  object.printWithSpace("PROGRAD");
  object.findVowel("Harsha");
  
  class NumbersManipulations implements NumberManipulationService {
    findPrime(num: number): void {
      console.log(num);
      if (num % num == 0 && num % 1 == num) {
        console.log("prime number");
      } else {
        console.log("not a prime number");
      }
    }
  
    findMagic(num: number): void {
      console.log(num);
  
      if (num % 9 == 1) {
        console.log("magic number");
      } else {
        console.log("not magic number");
      }
    }
  }
  
  let obj = new NumbersManipulations();
  obj.findPrime(15);
  obj.findMagic(199);
