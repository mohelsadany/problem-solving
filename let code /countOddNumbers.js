//count odd number in an interval range leetcode
//https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

// var countOddNumbers = function(l, r) {
//     var count = 0;
//     for (var i = l; i <= r; i++) {
//         if (i % 2 !== 0) {
//             count++;
//         }
//     }
//     return count;
// }


//1523. Count Odd Numbers in an Interval Range (easy) (https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)
var countOddNumbers = function(l, r) {
    var count = new Array();
    for (var i = l; i <= r; i++) {
        if (i % 2 !== 0) {
            count.push(i);
        }
    }
    return count;
}
console.log(countOddNumbers(1, 100));
console.log(countOddNumbers(1, 101));
console.log(countOddNumbers(1, 102));
