function isAnagram(str1, str2) {
  let register1 = {};
  let register2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (!register1[str1[i]]) {
      register1[str1[i]] = 0;
    }
    register1[str1[i]]++;
  }

  for (let i = 0; i < str2.length; i++) {
    if (register1[str2[i]]) {
      register1[str2[i]]--;
    } else {
      return false;
    }
  }
  return true;
}

const str1 = "deeev";
const str2 = "deevv";
console.log(isAnagram(str1, str2));
