// identify sting is palindrome or not

let string="racecar";
let bag=""
for(let i=string.length-1;i>=0;i--){
    bag+=string[i]
}
if (bag==string ){
    console.log("Yes")
}else{
    console.log("No")
}