// # Recursion

// #### Write a function which can reverse string
// * Write a JavaScript function that reverse a string.
// Sample Data and output:
// Example reverse("hello world")
// Expected Output: dlrow olleh

// ```javascript
//     const string="hello world"
//     reverse(string)  // return dlrow olleh
// ```

const string = "hello word";
console.log(string.length);

let iterator = 0;
function stringReverse(string) {
  if (iterator >= string.length) {
    return;
  }
  let reversedString = string.split("").reverse().join("");
  console.log(reversedString);
  iterator += 1;
}

stringReverse(string);
