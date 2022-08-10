//problem1=radianToDegree





function radianToDegree(radian) {
    let degree = radian * (180 / 3.1416).toFixed(2)
   
    
    return degree;
}
const total = radianToDegree(10)
console.log(total)
//problem2=






//problem3=oillprice

function oilPrice(diesel, Petrol, octane) {
    const dieselPrice = 114;
    const PetrolPrice = 130;
    const octanePrice = 135;
    const totalDieselPrice = dieselPrice * diesel
    const totalPetrolPrice = PetrolPrice * Petrol
    const totaloctanePrice = octanePrice * octane
    const totalPrice = totalDieselPrice + totalPetrolPrice + totaloctanePrice;
    return totalPrice;
}
const totaloillPrice= oilPrice(1,1,1,)
console.log(totaloillPrice);

//
function publicBusFare(People) {
    const bCapacity = 50;
    const micCapacity = 11;
    const remained = People % bCapacity;
    const rest = remained % micCapacity;
    const fare = rest * 250;
    return fare;

}
const totalPeople = publicBusFare(55)
console.log(totalPeople)