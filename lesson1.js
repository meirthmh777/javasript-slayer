// ------------- number 3 ----------------
/*
buatlah sebuah perulangan (loop) angka dari 1-100
dengan ketentuan jika angkanya ganjil cetak "fiz"
jika angkanya genap cetak "buzz"
dan jika angkanya kelipatan 3 cetak "fizbuzz"
note: optimalkan pengunaan modulo "%"
*/
// try 1 ??????
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    //angka ganjil === odd numbers
    console.log("fiz");
  } else if (i % 2 === 0) {
    // angka genap === even numbers
    console.log("buzz");
  } else i % 3 === 0; // angka kelipatan 3
  {
    console.log("fizbuzz");
  }
}
// try 2
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    // angka kelipatan 3
    console.log("fizbuzz");
  } else if (i % 2 === 0) {
    console.log("buzz"); // angka genap === even numbers
  } else i % 2 !== 0;
  {
    //angka ganjil === odd numbers
    console.log("fiz");
  }
}
// try 3
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    // angka kelipatan 3
    console.log("fizbuzz");
  } else if (i % 2 === 0) {
    console.log("buzz"); // angka genap === even numbers
  } else {
    //angka ganjil === odd numbers
    console.log("fiz");
  }
}
// ------------ number 1 -----------------
/*
buatlah variable xp dengan value 0, health dengan value 100,
fighting style tanpa initialize value nya, lalu assign string warrior ke variable fighting style, 
inventory dengan value array of string, profile dengan value object yang memiliki property name dengan type string,
race dengan type string, dan gender dengan type boolean
*/
// buatlah variable xp dengan value 0
const xp = 0;
// health dengan value 100
const health = 100;
// fighting style tanpa initialize value nya
let fightingStyle;
// lalu assign string warrior ke variable fighting style
fightingStyle = "warrior";
// inventory dengan value array of string
const inventory = [""];
// variable profile dalam bentuk object {} yg memiliki properties
const profile = {
  name: " ",
  race: " ",
  gender: true,
};

// -------- number 2 ----------------
/*
buat lah sebuah variable dengan nama nilai, 
dan buatlah percabangan if dan switch case
dengan menggunakan variable tersebut sebagai indikator kondisi nya.
*/
// variable dengan nama nilai misal ambil nilai 100
const nilai = 100;
// if
if (nilai === 100) {
  console.log("very good!");
} else {
  console.log("you can try again yeeahhh!");
}
// switch case
switch (nilai) {
  case 100:
    console.log("very good!");
    break;
  case 80:
    console.log("you can try again yeeahhh!");
}
