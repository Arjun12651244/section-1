 //map is a callback function
 //map modifies while filter filters the array
const nums=[2,9,30,20,50,25]
//wap to print the array of square of all numbers

const sqrnums=nums.map((n) =>{
    return(n**2)

});
console.log(sqrnums)
//wap to convert thestrings into integer
const prices=['50',"80.5","75","80.769"];
const intpri=prices.map((a)=>{
    return(parseInt(a))
})
console.log(intpri)

//filter function
//wap to keep only even numbers in an array
const evenums=nums.filter((e)=>{
    return(e%2===0)

})
console.log(evenums)

//wap to print all the prices between 2000 and 5000
const prices2=[22999,4500,2000,1700,2500]
const pricheck=prices2.filter((p)=>{
    return(p>=2000 && p<=5000)
})
console.log(pricheck)

//wap to search a string in array
const brands=["samsung","apple","xiomi","vivo","motorola","Android"]
const search=brands.filter((s)=>{
    return(s.toLowerCase().includes("a"))
})
console.log(search)

//wap to convert all in uppercase
const upper=brands.map((u)=>{
    return(u.toUpperCase())

})
console.log(upper)