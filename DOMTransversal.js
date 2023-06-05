// // const close = document.querySelector('.close'); => membaca elemen pertama
// // const card = document.querySelector('.card');

// // close.addEventListener('click', function () {
// //     card.style.display = 'none';
// // })

// //DOM Transversal
// const close = document.querySelectorAll('.close');

// // for (let i = 0; i < close.length; i++) {
// //        close[i].addEventListener('click', function (e) {
// //             // close[i].parentElement.style.display = 'none';
// //             // card[i].style.display = 'none'; => tidak menggunakan DOM Transversal
// //             // console.log(e.target);
// //             e.target.parentElement.style.display = 'none';
// //        });
// // }

// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         // e.stopPropagation(); untuk menghentikan event dari cards
//     })
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//     card.addEventListener('click', function (e) {
//         alert('ok');
//     })
// })

// //DOM Transvokrsal Method
//     //parentNode => bisa node, bisa element (HTML) {node}
//     //parentElement {element}
//     //nextSibling {node}
//     //nextElementSibling {element}
//     //previousSibling {node}
//     //previousElementSibling [element]

//     // const nama = document.querySelector('.nama');
//     // // console.log(nama.parentElement.parentElement);
//     // console.log(nama.nextElementSibling);

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    // console.log(e.target)
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})