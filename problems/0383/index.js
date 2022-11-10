/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let noteMap = new Map();
  let magMap = new Map();
  for (let i = 0; i < ransomNote.length || i < magazine.length; i++) {
    let noteChar = ransomNote[i];
    if (noteChar) {
      if (noteMap.has(noteChar))
        noteMap.set(noteChar, noteMap.get(noteChar) + 1);
      else noteMap.set(noteChar, 1);
    }
    let magChar = magazine[i];
    if (magChar) {
      if (magMap.has(magChar)) magMap.set(magChar, magMap.get(magChar) + 1);
      else magMap.set(magChar, 1);
    }
  }
  let response = true;
  noteMap.forEach((value, key) => {
    if (!magMap.has(key) || value > magMap.get(key)) {
      response = false;
    }
  });
  return response;
};

console.log(canConstruct('a', 'b')); //false
console.log(canConstruct('aa', 'ab')); //false
console.log(canConstruct('aa', 'aab')); //true
