// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:

// Declare a function and name it hotEnough
// Use the given variables and declare variable for boilingPoint at 212 
// Set up a conditional statement to compare given values to boiling point
    // Use string interpolation in the output

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = 212

const  hotEnough= (fahrenheit) => {
    if(fahrenheit < boilingPoint){
        return `${fahrenheit} is below boiling point`
    } else if (fahrenheit > boilingPoint){
        return `${fahrenheit} is above boiling point`
    } else if (fahrenheit === boilingPoint){
        return `${fahrenheit} is at boiling point`
    }
}

console.log(hotEnough(temp1)) // 42 is below boiling point
console.log(hotEnough(temp2)) // 350 is above boiling point
console.log(hotEnough(temp3)) // 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:

// Combine the arrays using the getter concat
// Use the length built in method and console log to display combined length

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.concat(myNumbers2).length) // 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:

// Use split to take the string and make a newArray with single characters
// Use the reverse and join built in method to combine new array back into a string
    // Initially had reverse and join on separate lines of code but found it works on same line also

const currentCohort = "Delta 2022"

newArray = currentCohort.split("")

console.log( newArray.reverse().join("")) // 2202 atleD 


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:

// Use a for loop to check each value in the array
    // Starting index of 0 and increments of 1 until last index in array
    // Code logic into the loop
    // Output into console to see the results

const myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++){
    if( myArray[i] % 2 === 0){
        console.log("even")
    }else if ( myArray [i] % 2 === 1){
        console.log("odd")
    }
} // odd, even, odd, even, odd, even


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:

// Declare a function called subtraction
// Input two parameters and call them firstValue and secondValue
// Conditional statement to subtract the smaller number from the larger one
// Use abstraction when invoking the function 
    //Console log to see in terminal

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subtraction = (firstValue, secondValue) =>{
    if (firstValue > secondValue){
        return (firstValue - secondValue)
    } else if (firstValue < secondValue){
        return (secondValue - firstValue)
    }
}

console.log(subtraction(number1, number2)) // 42
console.log(subtraction(number3, number4)) // 3