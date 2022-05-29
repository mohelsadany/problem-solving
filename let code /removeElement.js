//remove element from array
var removeElement = function(arr, element) {
let i = 0;
for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== element) {
        arr[i] = arr[j];
        i++;
    }  //if the element is not equal to the element we are looking for, then we copy it to the new array
}
return i;   
};
 //end removeElement

