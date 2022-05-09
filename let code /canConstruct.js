const canConstruct = (ransomNote, magazine) => {
  const dicMap = new Map();
  for (const c of magazine) dicMap.set(c, ~~dicMap.get(c) + 1);
  for (const c of ransomNote) {
    if (!dicMap.get(c)) return false;
    dicMap.set(c, ~~dicMap.get(c) - 1);
  }
  return true;
};

const canConstruct1 = (ransomNote, magazine) => {
  let dicArr = [...magazine];
  for (const c of ransomNote) {
    const index = dicArr.indexOf(c);
    if (index < 0) return false;
    dicArr.splice(index, 1);
  }
  return true;
};

const canConstruct2 = (ransomNote, magazine) => {
  let dicObj = {};
  for (let i = 0; i < magazine.length; ++i) {
    if (dicObj[magazine[i]]) ++dicObj[magazine[i]];
    else dicObj[magazine[i]] = 1;
  }
  for (let i = 0; i < ransomNote.length; ++i) {
    if (dicObj[ransomNote[i]] === undefined || dicObj[ransomNote[i]] <= 0)
      return false;
    --dicObj[ransomNote[i]];
  }
  return true;
};
