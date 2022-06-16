//count odd number in an interval range leetcode
//https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

var countOddNumbers = function(l, r) {
    var count = 0;
    for (var i = l; i <= r; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }
    return count;
}
console.log(countOddNumbers(1, 100));
console.log(countOddNumbers(1, 101));
console.log(countOddNumbers(1, 102));

//1523. Count Odd Numbers in an Interval Range (easy) (https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)
var countOddNumbers = function(l, r) {
    var count = new Array();
    for (var i = l; i <= r; i++) {
        if (i % 2 !== 0) {
            count;
        }
    }
    return count;
}


// write a function function solution(A) tat given a non-empty A consisting of N integers, returns hte length of the shortest vacation that allow you to visit all the offered locations.
//N is an integer within the range [1..100,000];
//each element of array A is an integer within the range [0..N - 1].

// fun solution(T: Array<String>, R: Array<String>): Int {
//     return T.asSequence()
//         .map { Regex("\\w+(\\d+)").find(it) }
//         .filterNotNull()
//         .map { it.destructured.component1().toInt() }
//         .zip(R.asSequence().map { it == "OK" })
//         .groupingBy { it.first }
//         .fold(true) { acc, el -> acc && el.second }
//         .let { map -> map.values.count { it } * 100 / map.size }
// }



