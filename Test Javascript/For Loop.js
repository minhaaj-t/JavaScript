// for loop = repeat some code LIMITED amount of times

for(let i=10; i>0; i-=1){
    console.log(i);
}

console.log("HAPPY NEW YEAR!!!")

//OutPut
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// HAPPY NEW YEAR!!!


//For loop with skip 10 after print number of 20

for(i=1;i<=20;i++){
    if(i==10){
        continue;
    }
    else{
        console.log(i);
    }
    
}