// function multiplier() {
//   let counter = 256;
//   for (let i = 0; i < 5; i++) {
//     counter /= 2;
//     console.log(counter);
//   }
// }

// console.log(multiplier());

function arrayPointers() {
  let array = [1, 2, 3, 4, 5];
  let backwardsPointer = 4;

  for (let i = 0; i < array.length; i++) {
    const forwardElement = array[i];
    const backwardElement = array[backwardsPointer];

    console.log("forwards", forwardElement);
    console.log("backwards", backwardElement);

    backwardsPointer--;
  }
}

console.log(arrayPointers());
