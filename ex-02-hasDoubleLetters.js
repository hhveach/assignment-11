
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/

var hasDoubleLetters = function(str){

var timeFound = 0;
var big = str.toLowerCase();

for (var i = 0; i < big.length; i++){
  if (big[i] === big[i +- 1]){
    timeFound += 1;
  }
}

if(timeFound > 0){
  return true;
}

else {
  return false;
}
}

console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
