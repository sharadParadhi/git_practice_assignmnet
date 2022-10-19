// find the number is prime oe not. print Yes if number is prime else print No

let num=13;
let count=0
for(let i=0;i<=num;i++){
    if(num%i==0){
        count++
    }
    
}
if(count==1){
    console.log(Yes)
}else{
    console.log(No)
}