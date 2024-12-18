// Scrivi un programma che stampi i numeri da 1 a 100, 
// ma per i multipli di 3 stampi “Fizz” al posto del numero e 
// per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// FUNZIONE

// ciclo che stampa numeri da 1 a 100
for(i = 1; i <= 100; i++){

    let valore;
    
    if(i % 3 === 0 && i % 5 === 0){
        valore = "FizzBuzz";
         
    }else if (i % 3 === 0){
        valore = "Fizz";
        
    }else if(i % 5 === 0){
        valore = "Buzz";
        
    }else{
        valore = i;
    }

    console.log(valore);
    
}




