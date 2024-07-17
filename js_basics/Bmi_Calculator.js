
console.log("Welcome to BMI Calculator");

function getHeight(height,Weight){

let BMII=( Weight / (height*height))

let Bmii=Math.round(BMII)

let BmI=Number(Bmii)

console.log("Here is your BMI-" + Bmii);

if (BmI <16 ){
    console.log("Severe Thickness")
}
if(BmI>16 && BmI<18){
    console.log("Mild thickness")
}
if(BmI<25){
    console.log("Normal")
}
else{
    console.log("OverWeight")
}


}
getHeight(1.50,50);

