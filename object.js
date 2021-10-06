// Cara untuk membuat object pada javascript

// 1. Object Literal

// Problem : tidaka efektif untuk object yang banyak
// let mahasiswa = {
//     name: 'Naim Shihab',
//     NIM: 215014,
//     Kelas: 'RPL',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.name}, selamat makan!`);
//     }
// };


// 2. Function Declaration 

// Object.create()

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function (jam) {
//         this.main -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }, 

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     },

//     learn: function (pukul) {
//         this.energi -= pukul;
//         console.log(`Halo ${this.nama}, semangat yah belajar-Nya!`);
//     },
// };

// // Fungsi Object.create adalah untuk menyambungkan object yang lain
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
    
// }

// let naim = Mahasiswa('Naim', 10);
// let albion = Mahasiswa('Albion', 50);



// Prototype
// Ini sangat memudahkan jika ingin membuat lebih satu obejct!

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return alert(`Halo ${this.nama}, selamat makan!`);
// };

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi *= jam;
//     this.nama += ' Shihab';
//     return `Halo ${this.nama}, selamat tidur!`;
// }


// let naim = new Mahasiswa('Naim', 10);
// let albion = new Mahasiswa('Albion', 15);


// Versi Class (recomended)
class Mahasiswa {
    constructor(nama, energi, jurusan) {
        this.nama = nama;
        this.energi = energi;
        this.jurusan = jurusan;
    }

    tidur(pukul) {
        this.energi += pukul;
        return alert(`Halo ${this.nama}, selamat tidur!`);
    }

    makan(porsi) {
        this.energi += porsi;
        return alert(`Halo ${this.nama}, selamat makan!`);
    }

    main(jam) {
        this.energi += jam;
        return alert(`Halo ${this.nama}, selamat bermain!`);
    }

}

let naim = new Mahasiswa('Naim', 10, 'Software Engineering');






// 3. Constructor Function (Paling sering digunakan oleh programmer)

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let naim = new Mahasiswa('Naim', 10);


// 4. Object.create