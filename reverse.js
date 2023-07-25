function reverseString(value) {
    let reverse = [...value];
    let reverseString = [];
    for (let i = reverse.length - 1; i >= 0; i--) {
        reverseString.push(reverse[i])
    }
    return reverseString.join("");

}

let result = reverseString("Farzana")
console.log(result)