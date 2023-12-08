const arr = [1,2,1,2,3,4,3,4]

const unique = (arr) => {
    let a = new Set();
    for (const num of arr) {
        a.add(num);
    }
    return a;
}

console.log(unique(arr));