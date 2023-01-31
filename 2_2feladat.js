const nums = [4, 2, 2, 1, 1];

function Add(array) {
  // deklarálunk sum változót, aminek az értéke 0
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    //sum változóhoz adjuk az elemeket
    sum += array[i];
  }
  console.log(sum);
}

Add(nums);
