

// Bai 4
// console.log(`1. ${age}`);//undefined
// var age = 20;
// console.log(`2. ${age}`);//20

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// console.log(`3. ${calAge(yearOfBirth)}`)//27
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`)//27

// console.log(`5. ${getFullName(firstName, lastName)}`);//error
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }
// console.log(`6. ${getFullName(firstName, lastName)}`);


//Bai5 :
// console.log(age);//undefined

// let age = 27;

// console.log(age)//27

// {
// console.log(firstName);//undefinend
// console.log(age);//undefinend
// console.log(age);//undefinend

// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";

// console.log(firstName);//Peter
// console.log(lastName);//Parker
// console.log(job);//Spider man
// }

// Bai 6:
// a = 2;
// var a;
// console.log( a );//2

// Bai 7:
// console.log( a );//undifined;
// var a = 2;
//Bai 8:
// var a = 10;
// function foo() {
// var a;
// console.log( a );//undifined;
// a = 2;
// }
// foo();



// Bai 11: Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array

// function removeEnd(arr, n) {
//     for(let i=0;i<n;i=i+1){
//       arr.pop();   
//     }return arr;
//   }

//  console.log(removeEnd([1,2,3,4,5,6],4));
  


// function removeEnd(arr, n) {
//   let n1 =arr.length-n
//    arr.splice(n1,n);   
//    return arr;

//   }
//  console.log(removeEnd([1,2,3,4,5,6,7,8], 2));


//   12. Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array
// let arr = [1,2,3,4,5];
// let n = prompt("nhập phần tử thêm vào");
// function first(arr,n){
//   arr.length=n;
//   return arr;

// }console.log(first(arr,n));





// function first(arr, n) {
//     var arrKq=arr.slice();
//     for(var i=0;i<arr.length-n;i++)
//      arrKq.pop();
//     return arrKq;
//   }
  
//   console.log(first([1,2,3,4,5,6], 2)); // expect [1, 2]
// Bai 13: 
const users = [
{
    name: "Angelina Jolie",
    age: 80
    },
    {
    name: "Eric Jones",
    age: 2
    },
    {
    name: "Paris Hilton",
    age: 5
    },
    {
    name: "Kayne West",
    age: 16
    },
    {
    name: "Bob Ziroll",
    
    age: 100
    }
    ]

// let newArr = users.map(function (users){
//   return{
//     name: `<h1>${users.name}</h1>`,
//     age: `<h2>${users.age}</h2>`,
//   }
// })
// console.log(newArr);


// Bai 14
// let newArr = users.map(function (users){
//   return{
//     name:users.name,
//   }
// })
// console.log(newArr);




// Bai 15:

// function triple(number){
//   num = number*3;
//   return num;
// }
// console.log(triple(3));

// let arr = [1,2,3,4]
// let newArr = arr.map(function multiply (arr){
//   return triple(arr)
// })
// console.log(newArr);



// Bai 16
// let arr = [1,2,80,4,5,6,7,8]
// let newArr = arr.filter(function (arr){
//   return arr >5
// })

// console.log(newArr);

//Bài 17:
// var members = [
//   { name: 'Lan', gender: 'female' },
//   { name: 'Linh', gender: 'female' },
//   { name: 'Trung', gender: 'male' },
//   { name: 'Peter', gender: 'gay' }
//   ];

//   let newMembers = members.filter(function(members){
//     return members.gender =="female"
//   })
//   console.log(newMembers);


  //Bai 18:Viết một hàm nhận vào một mảng số tự nhiên, sử dụng find method của array trả về số
// chẵn đầu tiên của mảng đó, nếu không tìm thấy trả về undefined

let arr = [1,2,3,4];
let newArr= arr.find(function(arr){
  return  arr%2==0
})
console.log(newArr);