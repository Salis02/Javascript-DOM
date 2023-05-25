//DOM Manipulation

//RUMUS :
//document.createElement()
//document.createTextNode()

//Membuat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

//simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

//simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); //simpan ke akhir elemen sectionA


//RUMUS :
//node.appendChild()
//node.insertBefore()

//Bagaimana cara menyisipkan element disela elemen yang telah ada?
 const liBaru = document.createElement('li');
 const teksliBaru = document.createTextNode('Item Baru');
 liBaru.appendChild(teksliBaru);

//sebelumnya, kita harus tahu elemen parent nya terlebih dahulu dan elemen setelahnya 
//kita tangkap parentNode nya
 const ul = document.querySelector('section#b ul');
 const li2 = ul.querySelector('ul li:nth-child(2)');

 ul.insertBefore(liBaru, li2);


 //RUMUS :
 //parentNode.removeChild()
 //parentNode.replaceChild()

 //Bagaimana cara menghilangkan sebuah element di HTML
 const link = document.getElementsByTagName('a')[0];
 sectionA.removeChild(link);

 //Bagaimana mengganti node lama menjadi node baru
 const sectionB = document.getElementById('b');
 const p4 = sectionB.querySelector('p');


 const h2Baru = document.createElement('h2');
 const teksH2Baru = document.createTextNode('Judul Baru');

 h2Baru.appendChild(teksH2Baru);

 sectionB.replaceChild(h2Baru, p4);

 pBaru.style.backgroundColor = 'lightgreen';
 liBaru.style.backgroundColor = 'lightgreen';
 h2Baru.style.backgroundColor = 'lightgreen';