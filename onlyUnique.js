//Given a string, remove any characters that are not unique from the string.

const onlyUnique = (str) => {
  let storage = {};
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!storage[str[i]]) {
      storage[str[i]] = 1;
    } else {
      storage[str[i]] += 1;
    }
  }
  
  for (let key in storage) {
    if (storage[key] === 1) {
      result += key;
    }
  }
  return result;
}
