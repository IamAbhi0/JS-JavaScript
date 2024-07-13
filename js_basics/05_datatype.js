/* Primitive */

// Number,String,Boolean,Symbol,NUll,Undefined

/* Non-Primitive*/

// Array,Object,Function

let nos=123

let arr=["JS","by","hitesh"]

const id= Symbol('123')

const studId= Symbol('123')

let no=null

let type=true

let text=



// console.log(typeof nos);
// console.log(typeof arr);
// console.log(typeof id);
// console.log(typeof studId);
// console.log(typeof no);
// console.log(typeof text);
// console.log(typeof type)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*  Stack and Heap  */

user1= "codelearn.com "

let user2=user1
user2= "learncode.com "

console.log(user1);
console.log(user2);

//heap changes data for two if any change is made in one var

let ownerone={

    email:"owner1googledotcom"
}


let owner2=ownerone
owner2.email="owner2googledotcom"

console.log(ownerone);
console.log(owner2);
