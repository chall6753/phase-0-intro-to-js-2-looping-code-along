// Code your solutions in this file


function writeCards(names, event){
   const greeting = []
    for(let i = 0; i < names.length; i++){
        console.log(greeting.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`   ));
    }
    return greeting
}



function countDown(num){
    
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

