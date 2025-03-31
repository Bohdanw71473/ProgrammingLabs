// 1. Wyświetlenie alertu „It’s muffin time!”
alert("It’s muffin time!");

// 2. Zmienne a=10, b=20, c=23.2 i operacje na nich:
let a = 10, b = 20, c = 23.2;
let sum = a + b + c;
let diff = a - b - c;
let prod = a * b * c;
let div = a / b / c;

console.log("Sum: " + sum);
console.log("Difference: " + diff);
console.log("Product: " + prod);
console.log("Division: " + div);

alert("Sum: " + sum + "\nDifference: " + diff + "\nProduct: " + prod + "\nDivision: " + div);

document.body.innerHTML += `<p>Sum: ${sum}</p>`;
document.body.innerHTML += `<p>Difference: ${diff}</p>`;
document.body.innerHTML += `<p>Product: ${prod}</p>`;
document.body.innerHTML += `<p>Division: ${div}</p>`;

// 3. Liczby w przedziale od 0 do 100:
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i); 
    }
}

let htmlContent = "";
for (let i = 0; i <= 100; i += 5) {
    htmlContent += `<p>${i}</p>`;  
}
document.body.innerHTML += htmlContent;

for (let i = 0; i <= 100; i++) {
    if (i % 13 === 0) {
        alert(i);
    }
}

// 4. Obliczanie pola trójkąta:
let triangleSideA = 5, triangleSideB = 6, triangleSideC = 7;
let s = (triangleSideA + triangleSideB + triangleSideC) / 2;
let area = Math.sqrt(s * (s - triangleSideA) * (s - triangleSideB) * (s - triangleSideC));
console.log("Pole trójkąta: " + area);

// 5. Pobranie imienia użytkownika i powitanie go:
let name = prompt("Podaj swoje imię:");
alert("Witaj, " + name + "!");

// 6. Dodawanie dwóch liczb:
let num1 = parseInt(prompt("Podaj pierwszą liczbę:"));
let num2 = parseInt(prompt("Podaj drugą liczbę:"));
alert("Wynik dodawania: " + (num1 + num2));

// 7. Największa z trzech liczb:
let num1ForMax = parseFloat(prompt("Podaj pierwszą liczbę:"));
let num2ForMax = parseFloat(prompt("Podaj drugą liczbę:"));
let num3ForMax = parseFloat(prompt("Podaj trzecią liczbę:"));
let max = Math.max(num1ForMax, num2ForMax, num3ForMax);
console.log("Największa liczba: " + max);

// 8. Największy wspólny dzielnik:
let num1ForGCD = parseInt(prompt("Podaj pierwszą liczbę:"));
let num2ForGCD = parseInt(prompt("Podaj drugą liczbę:"));

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

alert("Największy wspólny dzielnik: " + gcd(num1ForGCD, num2ForGCD));

// 9. Gra w zgadywanie liczby:
let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber)
let attempts = 0;
let guess;

while (guess !== randomNumber) {
    guess = parseInt(prompt("Zgadnij liczbę od 0 do 100:"+randomNumber));
    attempts++;
    if (guess < randomNumber) {
        console.log("Twoja liczba jest za mała!");
    } else if (guess > randomNumber) {
        console.log("Twoja liczba jest za duża!");
    }
}

alert("Gratulacje! Zgadłeś liczbę " + randomNumber + " w " + attempts + " próbach.");
