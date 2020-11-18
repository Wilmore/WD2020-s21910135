//Array

let nilai = [90, 88, 75, 95, 85];

for (let i=0; i<nilai.length; i++){
    console.log("Nilai = ", nilai[i] +5);
}

console.log(nilai);

//nilai[2] = 90;
//console.log{nilai [nilai.lenght -1]};

let john = ["john", "doe", 33, true];
console.log(john[john.length - 1]);
console.log(john);

//tostring()
console.log(john.toString());
//join()
console.log(john.join("  -  "));

//pop()
john.pop();
console.log(john.join("  -  "));

//push()
john.push(true);
john.push("HELLO");
console.log(john.join("  -  "));

//shift()
john.shift();
console.log(john.join("  -  "));

//unshift()
john.unshift("john");
john.unshift("prof");
console.log(john.join("  -  "));

//splice()
let buah=["durian", "jeruk", "apel"];
buah.splice(2,0, "Lemon", "Kiwi");
console.log(buah);

//concat()
let sayur=["kangkung", "wortel", "bayam"];
let biji=["kedelai", "kacang"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//slice()
let snack = ["Lays", "Taro", "Citato", "Oreo", "Tanggo"];
let snackGurih = snack.slice(0, 3);
let snackManis = snack.slice(3);

console.log(snackGurih);
console.log(snackManis);

//sort
let zodiac = ["Virgo", "Leo", "Gemini", "Cancer"];

zodiac.sort();

console.log(zodiac);

//reverse
let musicus = ["TaylorSwift", "Maroon5", "Sia", "Lauv"];
console.log(musicus);

musicus.reverse();
console.log(musicus);