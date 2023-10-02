/*Name - Ronak Mishra
  Student Number - 0837612
  Assignment - ronak_as2.js
  Date - 28/09/2023*/
  
const userString = prompt("Enter a string:");
function fourth(inputString) {
  if (inputString.length < 4) {
    return "The given word is short";}
  const fourthChar = inputString.charAt(3);
  if (fourthChar === " ") {
    return "Space";}
  return fourthChar;}
const result = fourth(userString);
console.log(`Original String: ${userString} : Result: ${result}`);