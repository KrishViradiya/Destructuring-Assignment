const swapValues = (x, y) =>  {
    [x, y] = [y, x];
  
    return [x, y];
  }
  
  let a = 5;
  let b = 10;
  
  const result = swapValues(a, b);
  
  a = result[0];
  b = result[1];

  console.log(`After swapping: a = ${a}, b = ${b}`);
  