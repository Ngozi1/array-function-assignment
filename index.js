// // QUESTION 1

//  Mutation in context of JavaScript arrays is basically changing the array itself instead of 
// returning a new array with the new changes whereas Non-Mutation is returning a whole 
// new array which has all the changes.

// ARRAY METHODS THAT FALLS UNDER MUTATION 

//  array.copyWithin(), 
// array.fill(), 
// array.pop(), 
// array.push(), 
// array.reverse(), 
// array.shift(), 
// array.sort(), 
// array.splice(),
//  array.unshift()

 // ARRAY METHODS THAT FALLS UNDER NON-MUTATION

//  array.concat(),
//  array.includes(),
//  array.indexOf,
//  array.join(),
//  array.lastIndexOf,
//  array.slice(),
//  array.toString() 
//  array.toLocaleString()





// // QUESTION 2

 let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
console.log(languages)
 languages.push('Kotlin')
 console.log(languages)

 // 2b

 languages.splice(3,0, 'Java')
 console.log(languages)

 // 2c

 languages.shift();
 console.log(languages)

 // 2d

 languages.splice(0, 0, 'Scala', 'Swift')
 console.log(languages)

// 2e

 languages.splice(5, 1, 'Go', 'Rust')
 console.log(languages)

// Question 3

let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

        console.log(changeFruit( fruit ))



//    ANSWER

// After calling the function createFruit the values of fruit will be ['apple', 'mango', 'orange']
//  since it is index 2 and remember our index starts from 0 so it will change the 3rd item which is banana



// QUESTION 4


function maxFromArray(numbers) {
    let max = numbers[0];                      
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {                
            max = numbers[i];
        }
    }
    return max;                                
}

const numbers = [19, 30, 1000, 5, 1, 67];
 console.log("The maximum value is" + " " + maxFromArray(numbers) )

// QUESTION 5

function valTimesIndex(num){
    return num.map((val,index) => val * index);
}

let array = [1,3,9];
let multipliedResult = valTimesIndex(array);

console.log(multipliedResult)