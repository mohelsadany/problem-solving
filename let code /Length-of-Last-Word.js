// Length of Last Word  https://leetcode.com/problems/length-of-last-word/
var lengthOfLastWord = function(s) {
    let lastWord = s.trim().split(' ').pop();
    return lastWord.length;
};

//Remove Outermost Parentheses  https://leetcode.com/problems/remove-outermost-parentheses/
var removeOuterParentheses = function(S) {
    let result = '';
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            count++;
        } else {
            count--;
        }
        if (count > 0) {
            result += S[i];
        }
    }
    return result;
}

//Median of Two Sorted Arrays  https://leetcode.com/problems/median-of-two-sorted-arrays/
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2);
    nums.sort((a, b) => a - b);
    let len = nums.length;
    if (len % 2 === 0) {
        return (nums[len / 2 - 1] + nums[len / 2]) / 2;
    } else {
        return nums[Math.floor(len / 2)];
    }
};

//First Day Where You Have Been in All the Rooms  https://leetcode.com/problems/first-unique-character-in-a-string/
var firstUniqChar = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};


//Longest Palindromic Substring  https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function(s) {
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        let odd = helper(s, i, i);
        let even = helper(s, i, i + 1);
        longest = odd.length > even.length ? odd : even;
    }
    return longest;
};



