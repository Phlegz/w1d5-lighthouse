function check(num) {
  //create an array of digits
  var arr = (num + "").split('').map(function(s) { return +s })
  for(i = arr.length - 2 ; i >= 0 ; i = i - 2) {
    var double = 2 * arr[i]
    var sub = (double > 9) ? double - 9 : double
    arr.splice(i, 1, sub)
  }
  var sum = arr.reduce(function(a,b) { return a + b }, 0)
  return (sum % 10 == 0) ? 'valid' : 'not valid'
}

module.exports = {check : check}
