//fizzbuzz: stampa numeri da 1 a 100, per i multipli di 3 stampa "Fizz" per i multipli di 5 "Buzz" per entrambi "FizzBuzz"

const contenitore = document.querySelector("#container");

for (let i = 1; i <= 100; i++) {

    if (i%5 == 0 && i%3 == 0) {
        const element = `<div class="box red">FizzBuzz</div>`;
        contenitore.innerHTML += element;
        console.log(element);
        

    } else if (i%5 == 0) {

        const element = `<div class="box yellow">Buzz</div>`;
        contenitore.innerHTML += element;
        console.log(element);

    } else if (i%3 == 0) {

        const element = `<div class="box green">Fizz</div>`;
        contenitore.innerHTML += element;
        console.log(element);
        
    } else {

        const element = `<div class="box">${i}</div>`;
        contenitore.innerHTML += element;
        console.log(element);

    }
    
}