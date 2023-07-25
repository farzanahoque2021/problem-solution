function twoNumberSum(array, targetSum) {
    let indices = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                indices.push(i)
                indices.push(j)
                return indices;
            }
        }
    }
    return `${indices}`;
}

console.log(twoNumberSum([1, 3, 6, 8, 11, 15], 9))
