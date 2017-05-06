// function isPalindrome(string) {
//   setTimeout(function(){
//     var stringNoSpace = string.split(" ").join("")
//     var stringReverse = stringNoSpace.split('').reverse().join("");
//     return stringNoSpace == stringReverse;
//   },2000)
// }

function isPalindrome(string) {
  // setTimeout(function(){
    var stringNoSpace = string.split(" ").join("")
    var stringReverse = stringNoSpace.split('').reverse().join("");
    return stringNoSpace == stringReverse;
  // },2000)
}

setTimeout(function(){console.log(isPalindrome("kayak"));},3000)

// module.exports = isPalindrome;
// console.log(isPalindrome("kayak"));
// console.log(setTimeout(function(){isPalindrome("kayak")},2000));
