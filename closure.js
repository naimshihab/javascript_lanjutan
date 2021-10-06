// Closure

// function init() {
//     let nama = 'Naim Shihab';

//     function tampilNama() {
//         console.log(nama);
//     }
//     return tampilNama;
// }

// let panggl = init(); 
// panggl();

// ---------------------------------------

// Bisa juga sprti ini
// function init() {
//     return function (nama) {
//         console.log(nama);
//     }
// }

// let panggl = init(); 
// panggl('Naim Shihab');
// panggl('Naim Voldigoad');

// ----------------------------------------

// Now, my question is why use closure?

// 1. Untuk membuat u=function factories (seperti yang di atas)
// 2. Untuk membuat private method



// Example :

function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
    }
}

let goodMorning = ucapkanSalam('pagi');
let siang = ucapkanSalam('siang');
let malam = ucapkanSalam('malam');

goodMorning('Naim');
malam('Shihab');