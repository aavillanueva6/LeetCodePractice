var wordPattern = function (pattern, s) {
  let objBuild = {};
  pattern = pattern.split('');
  s = s.split(' ');
  if (pattern.length !== s.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (!objBuild[pattern[i]]) {
      objBuild[pattern[i]] = s[i];
    } else {
      if (objBuild[pattern[i]] !== s[i]) {
        return false;
      }
    }
  }
  let values = Object.values(objBuild);
  for (let i = 0; i < values.length - 1; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return false;
      }
    }
  }
  return true;
};
console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // flase
console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
console.log(wordPattern('abba', 'dog dog dog dog')); // false
console.log(wordPattern('jquery', 'jquery')); // false
