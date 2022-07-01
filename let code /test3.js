var twoSum = function(nums, target) {
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (hash[diff] !== undefined) {
            return [hash[diff], i];
        }
        hash[nums[i]] = i;
    }
}

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
console.log(twoSum([2, 7, 11, 15], 9))


function email(){
    return new Promise((resolve) => 
    {
        setTimeout(() => {
            resolve('welcom user 1');
        }, 5000);
    }
    );
}
async  function emailmag(){
    const emailmag = await email();
    console.log("email", emailmag);
}
emailmag();


const button = document.querySelector('button');

    button.addEventListener('click', event  => {
        waitfunction();
    }
    );
    async function waitfunction(){
        setTimeout('alerbox()', 1000);
    }
    function alerbox(){
        alert("10");
    }


    function display(){
        console.log("jon");
        setTimeout(function(){console.log("olive");}, 1000);
        console.log("mike");
    }
    display();

    var x= 0;
    y=""    ;
    z=4;
    if(x==y){
z++    }
console.log(z);

a=[1,2,3];
b=[3];
c=a*b;
console.log(c)


var went = true;
var going = went ? "yes" : "no";
var x = "yes";
if(going!=no){
  x+=1+"no";
}
console.log(x);

a='hello';
b=3;
c=a*b;
console.log(c);


var went = true;
var going = went ? "yes" : "no";
var x = "yes";
if(going!="no"){
  x+=1+"no";
}
console.log(x);


const greeting = async() => {
    var y = await "Welcome";
    console.log(y);
}

console.log(1);
greeting();
console.log(2);

var h = function k() { return 40;} ;
console.log(typeof k());


var went = true;
var going = went ? "yes" : "no";
console.log(going);

!([empty] === 6) && "RAce" === "RAce"