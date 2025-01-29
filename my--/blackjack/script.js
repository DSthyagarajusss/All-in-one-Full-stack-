let Fristcard=10
let secondcard=11
let sum =Fristcard+secondcard
let balackjak=false
let isAlive=true
if(sum<=20){
    console.log("do you want to draw a new card ")
}else if(sum ===21){
    console.log("whoo you got blackjak")
    balackjak=true

}else{
    console.log("your out of the game ")
    isAlive=false
}
console.log(balackjak)
console.log(isAlive) 