const input = document.getElementById('input');
const btn = document.getElementById('btn');
const box = document.querySelector('.box');



btn.addEventListener('click', (e) => {
    e.preventDefault
    color = input.value
    box.style.backgroundColor = color

});