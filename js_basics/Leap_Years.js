  console.log("Leap Year Identifiy");

function getYear(Years){  

Yr=Years%4
Yr1=Years%100
Yr2=Years%400
console.log(Years)

if (Yr==0){
    if(Yr1==0){
        if(Yr2==0){

           console.log("It is a Leap Year! Ye 366Days")

        }else{
            ("It is a Normal Year!365 to go");
        }
    }else{
        console.log("It is a Leap Year!")
    }
}else{
    console.log("Its a Normal Year! 365Days")
}

 }

getYear(1800);