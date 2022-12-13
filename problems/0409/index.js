/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let hashMap = new Map();
  let charCode = 0;
  for (let i = 0; i < s.length; i++) {
    charCode = s.charAt(i);
    if (!hashMap.has(charCode)) hashMap.set(charCode, 1);
    else hashMap.set(charCode, hashMap.get(charCode) + 1);
  }
  let length = 0;
  let oddUsed = false;
  hashMap.forEach((val, key) => {
    if (val % 2 === 0) length += val;
    else {
      length += val - 1;
      oddUsed = true;
    }
  });
  if (oddUsed) length += 1;
  return length;
};

console.log(longestPalindrome('abccccdd')); //7
console.log(longestPalindrome('a')); //1
console.log(longestPalindrome('Aa')); //1
console.log(longestPalindrome('ccc')); //3
console.log(longestPalindrome('bananas')); //5
console.log(
  longestPalindrome(
    'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
  )
); //983
