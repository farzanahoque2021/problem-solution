function secondSmallest(value) {
    let sorted = value.sort((a, b) => a - b);
    let result = sorted[1];
    return result;
}

// let result = secondSmallest([50, 40, 30, 20, 10, 100])
// console.log(result)