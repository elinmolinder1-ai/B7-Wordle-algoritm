import { checkWords } from "../wordle.js";

describe("Test function to check if all letters in the guess word is correct", () => {
  test("Returns all letters as correct when guess matches answer", () => {
    expect(checkWords("HALLÅ", "HALLÅ")).toEqual([
      { letter: "H", result: "correct" },
      { letter: "A", result: "correct" },
      { letter: "L", result: "correct" },
      { letter: "L", result: "correct" },
      { letter: "Å", result: "correct" },
    ]);
  });


  test("Some letters ar correct but misplaced", ()=>{
    expect(checkWords("LILLA", "KALLE")).toEqual([
      {letter: "L", result: "incorrect" },
      {letter: "I", result: "incorrect" },
      {letter: "L", result: "correct" },
      {letter: "L", result: "correct" },
      {letter: "A", result: "misplaced" }
    ]);
  });

  test("All letters are wrong", ()=>{
    expect(checkWords("MATA", "GÅS")).toEqual([
      {letter: "M", result: "incorrect" },
      {letter: "A", result: "incorrect" },
      {letter: "T", result: "incorrect" },
      {letter: "A", result: "incorrect" },

    ]);
  });
});
