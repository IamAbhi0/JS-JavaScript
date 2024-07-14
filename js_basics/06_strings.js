let nav="hitesh "
let repo="55"

console.log(nav+repo);

console.log(`hii my name is ${nav} my repo count is ${repo}!`);

let name= new String(`Hitesh`);

console.log(name.charAt(3));

console.log(name.length);

/* padStart */
/* slice = The letters/word to show*/


const phno='9021310041'
const last3digits=phno.slice(-3);
const phnoo=last3digits.padStart(phno.length,'*')
console.log(phnoo);

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



const loginName='Abhinav'
const pass=( loginName.substring('-3')  )

console.log(loginName.substring(3));
console.log(pass);  


