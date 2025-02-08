//wap to print all those numbers which a divisible from both 7 and 11 between 50 and 320
for(let i=50; i<=320;i++){
    if(i%7===0 && i%11===0){
        console.log(i)
    }
}

// program to reverse a number
//let num = 1835;
//let result = num.toString().split('').reverse().join('');
//console.log(result)

//reversing a number
let num = 1853;
let reverse = 0;
while(num>0){
    num=num%10;
    reverse= reverse*10+ num;
    num=parseInt(num/10);
}
console.log(reverse)

//homework
// perfect square
let n=25;
let p= n*0.5
if(p.isInteger){
    console.log("perfect square")
}else{
    console.log("not a perfect square")
}
//

