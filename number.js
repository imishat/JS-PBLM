const item1={
    name:'abul',
    friend:'kaul'
    
}
const item2={
    name:'kaul',
    friend:'abul'
}
function isBestFriend(item1,item2){
    if(item1.name===item2.friend && item2.friend==item1.name){
        return true;
    
    }
    else{
       return false;
    }
    
}
 console.log (isBestFriend(item1,item2));