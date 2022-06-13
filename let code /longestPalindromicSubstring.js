function longestPalindrome(s) {
    if (s.length < 1) return "";
    let maxSubStart = 0;
    let maxSubLength = 0;
    for (let i = 0; i < s.length; i++) {
      const lengthCenteredAtChar = expandAroundCenter(s, i, i);
      const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);
      const longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
      if (longestSubAtChar > maxSubLength) {
        maxSubLength = longestSubAtChar;
        maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
      }
    }
    return s.substr(maxSubStart, maxSubLength);
  }
  
  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  var longestPalindrome = function(s) {
    let len = s.length;
    while (len>0) {
        for (let i=0; i<s.length-len+1; i++) {
            let str = s.slice(i, i+len);
            if (isPalindrom(str))
                return str;
        }
        len--;
    }
    return "";
};

const isPalindrom = function(arr) {
    let i=0;
    let j=arr.length-1;
    while (i<=j) {
        if (arr[i]!==arr[j])
            return false;
        i++; j--;
    }
    return true;
}