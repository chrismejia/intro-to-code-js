function stringSorter(stringArr, sortFn) {
  const result = {};

  for (const string of stringArr) {
    if (sortFn(string)) {
      if (!result.true) {
        result.true = [string];
      } else {
        result.true.push(string);
      }
    }
  }
  return result;
}

export { stringSorter };
