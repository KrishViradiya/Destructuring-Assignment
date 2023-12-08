const arr = [5,2,7,1,9]

const minmax = ( ) => {
    [max, min] = [Math.max(...arr),Math.min(...arr)]

    return {
        "max" : max,
        "min" : min
    }
}

const result = minmax(arr)  
console.log(result);
