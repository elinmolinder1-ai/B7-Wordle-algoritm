import { checkWords } from "../wordle.js";

/**
 * Teststrategi:
 * Dessa tester verifierar algoritm A (feedback-funktionen) enligt Wordle-reglerna.
 * Testerna täcker följande scenarier:
 * 1. Alla bokstäver är korrekta (hela ordet matchar).
 * 2. En blandning av correct, misplaced och incorrect.
 * 3. Inga bokstäver matchar alls.
 * 4. Hantering av dubbletter – korrekt ordning: correct → misplaced → incorrect.
 * 
 * Tillsammans säkerställer dessa tester att funktionen fungerar enligt specifikationen
 * och hanterar både enkla och mer komplexa fall.
 */

describe("checkWords", () => {
  test("Returns all letters as correct when guess matches answer", () => {
    expect(checkWords("HALLÅ", "HALLÅ")).toEqual([
      { letter: "H", result: "correct" },
      { letter: "A", result: "correct" },
      { letter: "L", result: "correct" },
      { letter: "L", result: "correct" },
      { letter: "Å", result: "correct" },
    ]);
  });


  test("Returns mix of correct, misplaced and incorrect letters", ()=>{
    expect(checkWords("LILLA", "KALLE")).toEqual([
      {letter: "L", result: "incorrect" },
      {letter: "I", result: "incorrect" },
      {letter: "L", result: "correct" },
      {letter: "L", result: "correct" },
      {letter: "A", result: "misplaced" }
    ]);
  });

  test("Returns all letters as incorrect when there is no match", ()=>{
    expect(checkWords("MATA", "GÅS")).toEqual([
      {letter: "M", result: "incorrect" },
      {letter: "A", result: "incorrect" },
      {letter: "T", result: "incorrect" },
      {letter: "A", result: "incorrect" },
    ]);

    
  });

  test("Handles duplicate letters", () =>{
      expect (checkWords("LLLAA", "LALAL")).toEqual([
      {letter: "L", result: "correct" },
      {letter: "L", result: "misplaced" },
      {letter: "L", result: "correct" },
      {letter: "A", result: "correct" },
      {letter: "A", result: "misplaced" }
      ])
    });
});
