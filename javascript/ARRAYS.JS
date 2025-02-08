    const arr=[56,'hello',true,null]
    console.log(arr);
    console.log(Array.isArray(arr));

    const movies=['kanchana','sikandar','jab we met','kal ho na ho']
    console.log( movies.length)//also works with strings
    console.log( movies[2])//also works with strings
    console.log(movies.indexOf('kanchana'))//also works with strings
    console.log(movies.at(-3))//also works with strings
    console.log(movies.at(3))//also works with strings
    movies[1]='son of sardar'
    console.log(movies)

    //slicing of arrays
    console.log(movies.slice()) //excludes the last index // if index is out of range or last index is not given it does not gives error it just gives the array till the last element
    //if nothing is passed in slicing parameter it gives whole array..


    //adding and removing elements
    movies.push('ironman','hulk') // adds value at last
    console.log(movies)
    movies.unshift('squid game') // adds value in the start
    console.log(movies)
    movies.pop() //removes last element
    movies.shift() //removes first element
    console.log(movies)
    
    // removing using splicing
   // movies.splice(2,2) // 1st value is starting index and 2nd value is number of elements to be removed
    console.log(movies)

    //add using splicing 
    movies.splice(2,2,'badshah','deadpool and wolverine')
    console.log(movies)

    movies.splice(2,0,'homealone','dunki')
    console.log(movies)

