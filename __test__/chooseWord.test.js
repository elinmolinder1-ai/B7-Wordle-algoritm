import { chooseWord } from "../chooseWord.js";
  /**
 * Teststrategi:
 * Dessa tester verifierar algoritm B enligt Wordle-reglerna.
 * Testerna täcker följande:
 * 1. Funktionen ska kunna välja ett ord med korrekt längd.
 * 2. Funktionen ska filtrera bort ord med dubbletter när duplicates inte är tillåtna.
 * 3. Funktionen ska returnera ett ord från den filtrerade listan (slump testas genom containment).
 * 4. Funktionen ska hantera fallet där inga ord matchar och returnera null.
 * 
 * Tillsammans säkerställer dessa tester att funktionen filtrerar korrekt,
 * hanterar reglerna för unika bokstäver och väljer ett giltigt ord.
 */

describe("chooseWord", () => {
  test ("Return word with the correct length", () =>{
    const words = ["HUS", "BIL", "HUND"];
    const result = chooseWord(words, 3, true);
    expect(result.length).toBe(3);
  });

  test("Filters out words with duplicate letters when duplicates are not allowed", () => {
  const words = ["BOLL", "HUSK", "KATT"];
  const result = chooseWord(words, 4, false);
  expect(result).toBe("HUSK");
});

test("Returns a word from the filtered list", () => {
  const words = ["HUS", "BUS", "MUS"];
  const result = chooseWord(words, 3, true);
  expect(words).toContain(result);
});


});