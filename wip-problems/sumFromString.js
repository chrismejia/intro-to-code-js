let string = "1abc2def3";

function sumFromString(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    const currChar = string[i];

    if (currChar.match(/[0-9]/g)) sum += Number(currChar);
  }
  return sum;
}
