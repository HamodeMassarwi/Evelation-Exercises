//Exercise 1

// let isEven = function(num){
//     if(num%2==0)
//         return true
//     return false
// }
// console.log(isEven(9))

//Exercise 2 

// let loopArray = function(array){
//     for(let looping in array)
//     {
        
//         if(!isEven(array[looping]))
//         {
//             console.log(array[looping])
//         }
//     }
// }
// let jojo =[1,2,3,4]
// loopArray(jojo)

//Exercise 3
// let ifExists = function(array , num){
//     for(let index in array){
//         if(array[index] == num)
//             return true
//     }
//     return false
// }
// console.log(ifExists([1,2,3,4,5],9))

//Exercise 4

// const calculator = {
    
//     add: function(num1,num2) {
//       return num1+num2;
//     },
//     subtract: function(num1,num2) {
//       return num1-num2;
//     }
//   };
//   const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42

//Exercise 5 (Extra Practice)
// const increaseByNameLength = function(num , name){
//     return num*name.length;
// }
// const makeRegal = function(name){
//     return "His Royal Highness " + name;
    
// }
// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"