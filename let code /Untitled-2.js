//write function function solution (A) that given a non-empty array A consisting of N integers, returns the length of shortest vacation that allows you to visit all the offered locations.
// Example:
// A = [2, 1, 1, 3, 2, 1, 1,3] 
// solution(A) = 3
function solution(A) {
    let min = A[0];
    let max = A[0];
    let sum = A[0];
    for (let i = 1; i < A.length; i++) {
        sum += A[i];
        min = Math.min(min, sum);
        max = Math.max(max, sum);
    }
    return max - min;
}
console.log(solution([2, 1, 1, 3, 2, 1, 1, 3]));
console.log(solution([10, 15, 20]));
