function typeCollector(inputObj) {
  const types = {};

  for (const value of Object.values(inputObj)) {
    let label;
    const type = typeof value;

    if (Array.isArray(value)) {
      label = "array";
    } else {
      label = type;
    }

    if (!types[label]) {
      types[label] = [value];
    } else {
      types[label].push(value);
    }
  }

  return types;
}

export default typeCollector;
