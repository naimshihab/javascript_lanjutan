// Destructuring Array
// Membongkar isi array
// const perkenalan = ['Halo', 'nama', 'saya', 'Naim'];
// const [salam, satu, dua, nama] = perkenalan;
// console.log(salam);

// -------------------------------------------------

// SKIPPING ITEMS
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// -------------------------------------------------

// Swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// -------------------------------------------------

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// -------------------------------------------------

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a);
// console.log(values);

// -------------------------------------------------

// Destructuring Object
// const mhs = {
//   nama: 'Naim Shihab',
//   umur: 18
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarsi object

// ({nama, umur} = {
//   nama: 'Naim Shihab',
//   umur: 18
// });
// console.log(nama);