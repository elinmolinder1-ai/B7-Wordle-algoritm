/**
 *  
 * 
 */

export function chooseWord(words, length, allowDuplicates) {
  const filtered = words.filter(word => {
    if (word.length !== length) return false;

    if (!allowDuplicates) {
      const set = new Set(word);
      if (set.size !== word.length) return false;
    }

    return true;
  });

  if (filtered.length === 0) return null;

  const index = Math.floor(Math.random() * filtered.length);
  return filtered[index];
}

