// solution of task 3(program to find the most frequent element in an array and return it)
function mostFrequent(arr) {
    arr.sort();
    let maxCount = 1, result = arr[0];
    let currCount = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            currCount++;
        }
        else {
            currCount = 1;
        }
        if (currCount > maxCount) {
            maxCount = currCount;
            result = arr[i - 1];
        }

    }

    return result;
}

// let arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
// console.log(mostFrequent(arr))