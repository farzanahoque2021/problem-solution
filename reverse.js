// solution of task 1(a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method)
function reverseString(value) {
    let reverse = [...value];
    let reverseString = [];
    for (let i = reverse.length - 1; i >= 0; i--) {
        reverseString.push(reverse[i])
    }
    return reverseString.join("");

}

// let result = reverseString("Farzana")
// console.log(result)