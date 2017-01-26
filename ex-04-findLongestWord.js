/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

var findLongestWord = function(str){

var newStr = str.split(' ');
var longestWord = "";

for(var i = 0; i < newStr.length; i++){
  newStr[i] = newStr[i].replace("'", "");
  newStr[i] = newStr[i].replace(".", "");

  if(longestWord.length < newStr[i].length){
    longestWord = newStr[i];
  }
}
return longestWord;
}




console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
