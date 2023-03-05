// // QUESTION 1




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
  function changeFruit(fruit) {
     fruit [2] = 'orange';
     return fruit;
}