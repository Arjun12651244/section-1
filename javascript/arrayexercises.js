const fruits=['apple','orange','banana','mango','guava']
// access elements from 2 to 4
console.log(fruits.slice(1,4))
// add 2 elements after apple
fruits.splice(1,0,'pineapple','papaya')
console.log(fruits)
//remove second last element
fruits.splice(-2,1)
console.log(fruits)
//remove orange and banana and insert kiwi
fruits.splice(3,2,'kiwi')
console.log(fruits)
