// Destructuring Function

// function penjumlahanPerkalian(a,b) {
//   return [a + b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);


// -------------------------------------------------

// Recomended jika objectnya kompleks
const mhs1 = {
  nama: 'Naim Shihab',
  kelas: 'Rekayasa Prangkat Lunak',
  umur: 18,
  email: 'naim21032003@gmail.com',
  nilai: {
    tugas: 85,
    uas: 90,
    uts: 98
  }
}

// function cetakMhs({nama, umur}) {
//   return `Hai, nama saya ${nama}, saya berusia ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

// BISA JUGA SEPERTI INI 

// bersarang dalam parameter
function cetakMhs({nama, umur, kelas, nilai: {tugas, uas, uts}}) {
  return `Hai, nama saya ${nama}, saya berusia ${umur} tahun. Program studi ${kelas} dan nilai tugas saya selama satu semester adalah ${tugas}.`;
}

console.log(cetakMhs(mhs1));