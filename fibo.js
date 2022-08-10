//dhara ber korar niyom

//const fibo=[0,1]
 //for(let i=2; i<15; i++ ){
   //  fibo[i]=fibo[i-1]+fibo[i-2]
 //}
 //console.log(fibo);
 //const fibo=[0,1]
 //for(let i=2;i<15;i++){
   //  fibo [i]=fibo[i-1]+fibo[i-2]
 //}
// console.log(fibo);
function min(numbers){
    let lowest =0;
    let second=0;
    for(let i=1; i<numbers.length;i++){
        let element=numbers[i]
        if(element>lowest){
            lowest=element
            
        }
        if(element>second &&lowest>element){
            lowest=element
        }
    }
    return lowest;
}
const lowestnumber=[12,35,67,89,48]
const total=min(lowestnumber)
console.log(total);