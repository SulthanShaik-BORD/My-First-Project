//Arithmatic operators

// let a = 6;
// let b = 5;

// console.log("a + b = ",a + b);
// console.log("a - b = ",a - b);
// console.log("a / b = ",a / b);
// console.log("a * b = ",a * b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a ** b);

// // //unary operators (a++,a--,++a,--a) - which will need one opreand

// let a = 6;
// let b = 5;

// console.log("a++ = ",a++);//First takes the input. Then add the value
// console.log("++a = ",++a);//print the output, then adds the input
// console.log("a = ",a);
/* 0,1,2,3,4,5 --> a++ starts with zero
   0,1,2,3,4,5 --> ++a it will starts with the additional number that is "1"

   for unary operators a++ does post increment we can assume it like
   " a + 1 ".
   For ++a it will pre increment the number that is " a + 1 "
*/ 

// assignment operators (=, +=,-=,!=)
// let a = 6;
// let b = 5;

// console.log("a += b",a += b);// a +=b is a= a+b = 6+5 = 11
// console.log("a = ",a);// So, a will be "11"
// console.log("a -=b",a -= b);// a-= b --> a= a-b = 6-5 =1
// console.log("b = ",b);// so, be will be "1"

// //comparison operators (==,!=,>=,<=,===,!==,>,<)
//  let a = 6;
//  let b = 5;

//  console.log("a == b", a == b);//true
//  console.log("a != b", a != b);//true
// console.log("a >= b", a >= b);//true
// console.log("a <= b", a <= b);//false
// console.log("a === b", a === b);//false
// console.log("a !== b", a !== b);//true

//logical operators

// let a = 5;
// let b = 6 ;

// console.log("a != b &&  a === b ", a !=b && a === b);//false
// console.log(" a != b || a !== b ", a != b || a !== b);//true
// console.log(" !(a === b) ",!(a === b));//true


// conditional operators(if,else - if,else)

// let a = prompt("enter a number: ");
// let b = 10;

// if (a === b){
//     console.log(a, " is eqauls to b");
// }else if(a !== b){
//     console.log(a, " is not equals to b");
// }else {
//     console.log(" try again!!");
// }

// Ternary operator - which needs only one operand

// let age = prompt("Enter your age: ");

// const result = (age >= 18 ? "You can vote" : "you CANNOT vote");
// console.log(result);


//NON - PRIMITIVE DATA TYPES - object 

// const  details = {
//        name : prompt("Enter your name"),
//        age : prompt("enter your age (18,19,..)"),
//        city : prompt("enter your city"),
//        gender : prompt("enter your gender (Eg: male,female...)"),
//        password : prompt("enter your password (Min 8 characters)")

// }; 
// if(details["password"].length >= 8 && details["password"].length <= 20 ){
//     console.log("Your password match the constrainst");
//     console.log("your new password has saved successfully");
// }else if (details["password"].length >= 0 && details["password"].length < 8 ){
//     for (let i = 0; i < 2; i++ ){
//         alert("Pasword does not match the criteria, try again!!!");
//              prompt("Re - enter your password: ");
//     }
// alert("Attempts are reached Please try again! after few minutes");
// } 
// console.log(details["name"] + " Thanks for opening this page");
// console.log(details);
// if(details["age"] >=18 && details["age"] <=60){
//    // alert(details["name"] + " You are eligible to vote");
//     console.log(details["name"] + " You are eligible to vote");
// }else if (details["age"] >=0 && details["age"] <= 17){
//    // alert(details["name"] + " You are not eligible to vote")
//     console.log(details["name"] + " You are not eligible to vote")
// }else {
//     alert("Please give proper input");
// }
// alert("Please watch this image for motivation");

// Login to the web page V2

alert ("Please enter your details to\nproceed further..");
const userDetails = {
    name : prompt ("Enter your name: "),
    age : prompt ("Enter your age (18,19..): "),
    city : prompt("Enter your City: "),
};
console.log(userDetails);
alert("Thanks for updating your info your Info");

const Password = "Password@123";
let enterPassword = prompt("Enter your Password: ");
while(enterPassword !== Password){
    let reEnterPassword = prompt("InCorrect Password\nTry again: ");
    if(reEnterPassword === Password){
    alert("You loginned successfully");
    }break;
};
alert("Get motivation by watching this Personality");
