//const nums = [22,55,90,456,77,34,78]
//for(let i=0;i= nums.length;i++){
   // console.log(nums[i])
//}
//for of loop

//for(let n of nums){
    //console.log(n)
//}

//for each function

//nums.forEach((n) => {console.log(n,a,b)});


//wap to print only even numbers
const nums = [22,55,90,456,77,34,78]
for(let n of nums){
    if(n%2===0){
        console.log(n)
    }
}
console.log("using forach")
nums.forEach((n)=>{if(n%2===0)console.log(n)})
console.log("multiply")

//wap to multiply each element by 2
let nums2=[]
for(let n of nums){
    //console.log(n*2)
    nums2.push(n*2)   
}
console.log(nums2)

//wap to store all odd num in new aray
let nums3=[]
for(let n of nums){
    if(n%2!==0){
        nums3.push(n)
    }
}
console.log(nums3)

let odd1=[]
nums.forEach((a)=>{if(a%2!==0)odd1.push(a)})
console.log(odd1)