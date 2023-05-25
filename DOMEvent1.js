//PERBEDAAN Event Handler dan addEventListener

//1. Event Handler => menimpa event sebelumnya
const p3 = document.querySelector('.p3');
p3.onclick = function () {
    p3.style.background = 'lightblue';
}

p3.onclick = function () {
    p3.style.color = 'red';
}
//maka event yang akan terjadi adalah yang terakhir

//2. addEventListener => menambah event baru
const p3 = document.querySelector('.p3');
p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'yellow'    ;
});

p3.addEventListener('click',function () {
    p3.style.color = 'red';
});