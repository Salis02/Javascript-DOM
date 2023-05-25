//DOM Manipulation
//1. elemen.innerHTML => untuk mengubah isi dari tag yang telah diseleksi

const judul = document.getElementById('judul');
judul.innerHTML = '<em>Salis Nizar Qomaruzaman</em>';

//2. elemen.style(propertiCSS) 

const p = document.querySelector('p');
p.style.color = 'lightblue';
p.style.backgroundColor = 'salmon';

//3. elemen.setAttribute() => menambah attribute baru pada tag HTML

const a = document.querySelector('a');
// a.setAttribute('class','link');

//4. elemen.classList => method untuk mengelola class
//a. element.classList.add() => menambah class baru
//b. element.classList.remove() => menghilangkan class yang ada
//c. element.classList.toggle() => menambah class baru ketika tidak ada class tertentu, namun jika sudah ada maka akan dihilangkan
//d. element.classList.item() => mengetahui class tertentu dalam sebuah elemen, misal ada 3 class. jika class lebih dari satu (index)
//e. element.classList.contains() => mengecek dalam sebuah elemen adakah sebuah class tertentu
//f. element.classList.replace() => mengganti sebuah class tertentu
const p2 = document.querySelector('.p2');
p2.classList.add('tahu')

