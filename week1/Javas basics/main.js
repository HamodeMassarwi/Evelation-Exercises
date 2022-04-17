

//exercise 1 .
//!("knife" === "sword"); .. true
//(5 > 2) && false
//(1 < 2) || (-1 > -1) || !false 
//"" ..false
//  (31 % 5) == "1" ..true
//!!true ..true
//"5th Avenue" != "5th Avenue" 
//52 !== "52"; ..true
//(undefined || null); .. null

//exercise 2 
//let a = 3
//let c = 0
//let b = a
//b = a
//c = a
//b = c
//a = b
// answer 3 3 3 ;


//array exercise 1 
//const numbers  = [1,2,3,4,5,6,7,8,9,10];
//numbers.splice(1,2);
//numbers[4] =1;
//numbers.unshift(0);
//numbers.splice(6)


//OBJECT EXERCISE 1
// let p1 ={
//     name:"Hamode",
//     age:20,
//     city:"Haifa"
// }
// let p2 = {
//     name:"Jojo",
//     age:20,
//     city:"haifa"
// }
// if(p1.age == p2.age)
// {
//     if(p1.city == p2.city)
//     {
//         console.log(p2.name + " wanted to date " + p1.name)
//     } else {
//         console.log(p2.name + " wanted to date " + p1.name + ", but couldn't")
//     }
// }

// EXECRISE 2
// let library = {
//     books:[{title: "Jojo", author: "dodo"}]
// }

// LOOP EXECRISE 1



// names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []


// for(let i = 0 ; i<ages.length && i<names.length; i++)
// {
//    let x = {name:names[i] , age:ages[i]}
//    people.push(x)
// }


// //Exercise 2 Extra
// for(let pep in people){
//     console.log(people[pep].name , "is" , people[pep].age , "Years Old\n")

// }



//Exercise 3 

// let posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]
// var value = 2
// posts = posts.filter(function(item) {
//     return item.id !== value
// })
// console.log(posts)

// //Exercise 4
// const posts = [
//     {
//       id: 1,     
//       text: "Love this product",
//       comments: []
//     },
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [
//                   {id: 1, text: "Idiot has no idea"}, 
//                   {id: 2, text:"Fool!"}, 
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//        id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ]
//  posts[1].comments.splice(2)
// console.log(posts[1].comments)


