//DOM Selection

//1. document.getElementById() 
//-> mengembalikan element
const judul = document.getElementById('judul');
judul.style.color = 'green';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Salis Nizar';

//2. document.getElementsByTagName() 
//-> mengembalikan HTMLCollection
// const p = document.getElementsByTagName('p');

// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
    
// }

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//3. document.getElementsByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari Javascript';

//4. document.querySelector()
// -> mengembalikan element
const p4 = document.querySelector('#b p');
p4.style.color = 'blue';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p'); maka akan membaca elemen yang pertama kali
// p.innerHTML = 'Ini diubah melalui Javascript';

//5. document.querySelectorAll()
// -> mengembalikan nodeList
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}