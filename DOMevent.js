//EVENT

//1. Event Handler => merupakan cara lama 
//Kita coba mengganti backgroundColor paragraf 3 ketika event berhasil dijalankan
const p3 = document.querySelector('.p3');

function ubahWarna() {
    p3.style.backgroundColor = 'lightblue';
}
function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}

//a. Inline HTML attribute => tidak disarankan karena mencampuradukkan HTML dan JS dan memodifikasi HTML
//<p class="p3" onclick="ubahWarna()">Paragraf 3</p>


const p2 = document.querySelector('.p2') ;
p2.onclick = ubahWarnaP2;

//2. addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener ('click', function () {
    //Ambil parent
    const ul = document.querySelector('section#b ul');

    //Membuat elemen baru
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Baru');

    //Kita rangkai
    liBaru.appendChild(teksLiBaru);

    //Simpan didalam ul
    ul.appendChild(liBaru);
})