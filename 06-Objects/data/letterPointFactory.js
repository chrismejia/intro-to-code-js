function letterPoints() {
  let obj = {};
  let points = 1;
  let startCharCode = 97;
  while (points <= 26) {
    const keyName = String.fromCharCode(startCharCode);
    obj[keyName] = points;
    points++;
    startCharCode++;
  }
  return obj;
}
