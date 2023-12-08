arr = [1,2,3,4,5]

const dest = (arr) => {
    [first , second ,...end] = arr
    let last = end.pop()
    return [first , second , last]

}

const result = dest(arr)
console.log(result);