function backspaceCompare(S, T) {
  let i = S.length - 1;
  let j = T.length - 1;
  let sSkipCount = 0;
  let tSkipCount = 0;

  while (i >= 0 || j >= 0) {
    if (S[i] === "#") {
      sSkipCount++;
      i--;
    } else if (sSkipCount > 0 && i >= 0) {
      sSkipCount--;
      i--;
    } else if (T[j] === "#") {
      tSkipCount++;
      j--;
    } else if (tSkipCount > 0 && j >= 0) {
      tSkipCount--;
      j--;
    } else if (S[i] !== T[j]) {
      return false;
    } else {
      i--;
      j--;
    }
  }
  return true;
}