// Function Declaration
// function tampilPesan(nama) {
//   alert(`Halo ${nama}, good night!`);
// }
// tampilPesan('Naim');

// ------------------------------------------------------------

// Function Expression
// let tampilPesan = function (nama) {
//   alert(`Welcome ${nama} in my house!`);
// }
// tampilPesan('Naim');

// ------------------------------------------------------------

// Arrow Function (Jika parameter hanya ADA 1)

// let tampilNama = (nama) => {
//   alert(`Hai ${nama}, how are you today, beautiful?`);
// }
// tampilNama('Ciel');

// Arrow Function (Jika parameter LEBIH DARI 1)

// let tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama} harus tidur!`;
// }
// alert(tampilNama('Naim', 'Malam'));


// implisit return
// let tampilNama = nama => `Halo ${nama}, Selamat Malam!`;
// alert(tampilNama('Naim'));

// Tanpa parameter
// let tanpaParameter = () => `Hello World!`;
// alert(tanpaParameter());


// Example :

// let mahasiswa = ['Naim', 'Shihab', 'Albion'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);


// Ubah ke Arrow Function

// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// console.log(jumlahHuruf);

// Ubah ke bentuk object
// let jumlahHuruf= mahasiswa.map( nama => ({ nama: nama, jmlhHuruf: nama.length }) );
// console.log(jumlahHuruf);