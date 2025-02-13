const phone={
    brand:"vivo",
    price:20000,
    colour:["red","blue","green"],
    ram:"4Gb"

}
console.log(phone.price)
console.log(phone.brand="samsung")
console.log(phone)
phone.sim="dual"
console.log(phone)

const smartphonelist=[
    {
    brand:"vivo",
    price:20000,
    colour:["red","blue","green"],
    ram:"4Gb"
    },
    {
    brand:"samsung",
    price:25000,
    colour:["violet","cyan"],
    ram:"6Gb"
    },
    {
    brand:"apple",
    price:22000,
    colour:["matt blue","gray"],
    ram:"3Gb"
    },
    {
    brand:"xiomi",
    price:10000,
    colour:["black","navy blue"],
    ram:"5Gb"
    },
    {
    brand:"motorola",
    price:40000,
    colour:["pink","white"],
    colour:["pink","white"],
    ram:"8Gb"
    }

]
console.log(smartphonelist.length)

console.log(smartphonelist[0].price)
console.log(smartphonelist[0].brand)
console.log(smartphonelist.at(-1).colour[1])
console.log(smartphonelist.at(-1).colour.unshift("red"))

const brands=smartphonelist.map((phone)=>{return phone.brand})
console.log(brands)

const budget=smartphonelist.filter((phone)=>{return phone.price<=40000})
console.log(budget)

//wap to get prices of all brands
const budget2=smartphonelist.map((phone)=>{return phone.price})
console.log(budget2)

//wap to print all phones with black colour

const col=smartphonelist.filter((phone)=>{return phone.colour.includes("black")})
console.log(col)
//wap to print the phone with brand samsung
const search="samsung"
const br=smartphonelist.filter((phone)=>{return phone.brand.includes(search)})
console.log(br)
