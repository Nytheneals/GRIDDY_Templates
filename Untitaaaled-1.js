  // Repeated Value
  function findDup(array) {
   var obj = {};
   for (var i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
     obj[array[i]] = 1;
    } else {
     return array[i];
    }
   }
  }
  console.log(findDup([3, 4, 4, 2]));

  // FACTORIAL
  function factorial(n) {
   return (n != 1) ? n * factorial(n - 1) : 1;
  }
  console.log(factorial(8))