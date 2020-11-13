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
  console.log(counter)
 if (!Array.isArray(input)) {
   inputArray = input.split('')
 } else {
   inputArray = input
 }
 if (counter >= inputArray.length) {
   return inputArray
 } else {
  if (inputArray[counter] === ' ') {
    inputArray.splice(counter, 1, '%20')
    console.log(inputArray)
    console.log('here')
  }
  console.log(inputArray[counter])
  recursiveUrl(inputArray, counter + 1)
 }
 return inputArray.join('')
}

// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]


const arr = [1,1,2,3,4,5,5,6]

const filterDup = (inp) => {
  return inp.filter((e, i) => inp.indexOf(e) === i)
}

// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

const compressor = (str) => {
  result = []
  counter = 0
  for (let i = 0; i < str.length; i += counter) {
    counter = 0
    for (let x = i; x < str.length; x++) {

      if (str[i] === str[x] ) {
        counter += 1
      } else {
        break;
      }
    }
    if (counter > 1) {
      result.push(`${counter}${str[i]}`)
    } else {
      result.push(`${str[i]}`)
    }

  }
  return result.join('');
}


const unique = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let x = i + 1; x < str.length; x++) {
      if (str[i] === str[x]) {
        return false
      }
    }
  }
  return true;
}

const sorter = (arr) => {
  for (let x = 0; x < arr.length; x++){
    if (arr[x] > arr[x+1]) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp
        }
      }
      return sorter(arr)
    }
  }
 return arr
}



