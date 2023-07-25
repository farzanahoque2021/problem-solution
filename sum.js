function sum(value) {
    let positiveArray = [];
    for (let i = 0; i <= value.length; i++) {
        if (value[i] > 0) {
            positiveArray.push(value[i])
        }
    }
    let result = positiveArray.reduce((total, item) => total + item)
    return result;
}

let input = [10, 20, 30, 40, -50];
let result = sum(input);
console.log(result)