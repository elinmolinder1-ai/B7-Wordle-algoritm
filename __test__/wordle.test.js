import { checkWords } from "../wordle.js";

/**
 * Testen går ut på att kontrollera:
 * Om alla bokstäver är korrekta.
 * Om vissa bokstäver är korrekta eller felplacerade 
 * Om ingen bokstäverna matchar.
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
});
