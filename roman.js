// solution of task 7 (a function that converts a Roman numeral to an integer)
function romanToInteger(str) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let res = 0;
    str.split('').forEach((num, i) => {
        if (map[num] < map[str[i + 1]]) {
            res -= map[num]
        }
        else {
            res += map[num]
        }
    })
    return res;
}

// let result = romanToInteger("III")
// console.log(result)