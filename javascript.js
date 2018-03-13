const nameDup = 'Level';

function isPaldrom(string) {
 return string.split('').reverse().join('')
}

isPaldrom('Level');

console.log(isPaldrom('Level'));

// CHECK WHETHER LETTER IS REPEATED
function countRepeat(params, string) {
 let count = 0;
 for (i = 0; i < array.length; i++) {
  if (string[i] === params) {
   count++
  }
  return count;
 }
}