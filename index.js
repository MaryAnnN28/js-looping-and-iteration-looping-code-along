// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"]; 

function writeCards(nameArr, eventName) {
   let array = []
   for (let i in nameArr) {
      array.push(`Thank you, ${nameArr[i]}, for the wonderful ${eventName} gift!`)
   }
   return array
} 

function countDown(num) {
   while (num >= 0) {
      console.log(num)
      num--
   }
}