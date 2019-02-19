let menu = document.querySelector('.menu'),
    fifthItem = document.createElement('li'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    columns = document.querySelectorAll('.column');

menu.appendChild(fifthItem);
fifthItem.innerHTML = 'Пятый пункт';
fifthItem.classList.add('menu-item');

document.body.style.background = 'url(img/apple_true.jpg)';
title.innerHTML = 'Мы продаем только подлинную технику Apple';
columns[1].removeChild(adv);

let answer = prompt('Как вы относитесь к технике apple?');
document.querySelector('#prompt').textContent = answer;