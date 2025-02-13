const nums1 = [22,55,90,456,77,34,78];
for(let i=0;i< nums1.length;i++){
   console.log(nums1[i]);
}
console.log("for of loop")
for(let n of nums1){
    console.log(n)
}
console.log("foreach function")
nums1.forEach((n,a,b) => {console.log(n,a,b)}) //1st parameter value 2nd parameter index 3rd parameter whole array
//for of loop

for(let n of nums){
    console.log(n)
}
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
    console.log(n*2)
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