var reverseWords = function (s) {
  s = s.split(' ');
  let ansArr = [];
  s.forEach((element) => {
    ansArr.push(element.split('').reverse().join(''));
  });
  return ansArr.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest")); //"s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords('God Ding')); //"doG gniD"
