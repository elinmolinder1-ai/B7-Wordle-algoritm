/**
 * Skapa en result array
 * Markera correct först
 * Räkna kvarvarande bokstäver som finns i ordet
 * Gå igenom resten och markera misplaced eller incorrect. 
 * 
 */

export function feedback(guess, answer) {
  const result = [];
  const answerLetters = answer.split("");

  //Kontrollera om första bokstäven är correct
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      result[i] = { letter: guess[i], result: "correct" };
      answerLetters[i] = null; // markera använd
    } else {
      result[i] = { letter: guess[i], result: null };
    }
  }

  //Kontrollera om andra bokstaven är misplaced / incorrect
  for (let i = 0; i < guess.length; i++) {
    if (result[i].result === "correct") continue;

    const index = answerLetters.indexOf(guess[i]);

    if (index !== -1) {
      result[i].result = "misplaced";
      answerLetters[index] = null; //förbrukad/använd bokstav
    } else {
      result[i].result = "incorrect";
    }
  }

  return result;
}
console.log(feedback("HALLÅ", "HEJÅA"));