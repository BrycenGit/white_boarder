// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"
const urlMaker = (input) => {
  let result = []
  inputArray = input.split('')
  for(let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === ' ') {
      result.push('%20')
    } else {
      result.push(inputArray[i])
    }
  }
  return result.join('')
}

const recursiveUrl = (input, counter = 0) => {
 if (!Array.isArray(input)) {
   inputArray = input.split('')
 } else {
   inputArray = input
 }
 if (counter >= inputArray.length) {
   return inputArray.join('')
 } else {
  if (inputArray[counter] == ' ') {
    inputArray[counter].slice(0, -1).push('%20')
  }
  recursiveUrl(inputArray, counter + 1)
 }
}