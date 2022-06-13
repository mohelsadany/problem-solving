//Add to Array-Form of Integer - Leetcode problem

var addToArrayForm = function(A, K) {
    let result = [];
    let carryover = 0;
    let i = A.length - 1;
    while (i >= 0 || carryover > 0) {
        let sum = (i < 0 ? 0 : A[i] * 1) + carryover;
        result.unshift(sum % 10);
        carryover = Math.floor(sum / 10);
        i--;
    }
    return result;
}

