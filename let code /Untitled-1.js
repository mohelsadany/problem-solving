//A of n arrays integer and s is a string.
//write task to compute how many ways one can choose a contiguous fagment of A that has an arithmeic mean equal to s.
//Example:
//A = [1,2,3,4,5,6,7,8,9,10]
//s = 5
//Answer: 4
function solution(A, s) {
    var count = 0;
    var map = {};
    for (var i = 0; i < A.length; i++) {
        if (map[A[i]]) {
            map[A[i]]++;
        } else {
            map[A[i]] = 1;
        }
    }
    for (var i = 0; i < A.length; i++) {
        if (map[s - A[i]]) {
            count++;
        }
    }
    return count;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));