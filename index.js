// Code your solutions in this file


const arrNew = []

function writeCards(arr,event) {
  for (let i = 0; i < arr.length; i++) {
    
    arrNew[i] = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
  }
  return arrNew
}



function countDown(n){
    while (n >= 0){
        console.log(n--)
    }
}