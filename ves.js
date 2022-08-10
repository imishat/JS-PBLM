//index of
//start with lekha ki diye suru hoise chake kora 
//const fibo=[0,1]
//for(let i=2; i<14;i++){
    //fibo[i]=fibo[i-1]+fibo[i-2];
//}
//console.log(fibo);
function maxarry(numbers){
   let lergetst=0;
   for(let i=0; i<numbers.length;i++){
       let element=numbers[i]
       if(element>lergetst){
           lergetst=element;
       }

   }
   return lergetst;
}
const height=[167,190,200,500,700,80,50]
const total=maxarry(height);
console.log(total);