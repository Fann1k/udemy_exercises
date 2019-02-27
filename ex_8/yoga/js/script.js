window.addEventListener('DOMContentLoaded', function () { //java script код начнет выполняться только после загрузки DOM

    'use strict'; //исп-ем строгий режим ES6
    //задаем переменные
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    //скрываем все info-tabcontent
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1); //скрываем все tabContent кроме tabContent[0], так как начинаем с tabContent[1]

    //показываем определенный info-tabcontent
    function showTabContent(b) {
        if (tabContent[b].matches('div.hide')) { //если у div есть класс hide, то
            tabContent[b].classList.add('show'); //добавляем класс show
            tabContent[b].classList.remove('hide'); //убираем класс hide
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target; //event - это click
        console.log(target); //target - это tab, на который нажали
        if (target && target.matches('div.info-header-tab')) { //если то на что кликнули содержит класс info-header-tab
            for (let i = 0; i < tab.length; i++) { //то пока не кончатся tab'ы
                if (target == tab[i]) { //и если tab на который мы нажали совпадает с tab'ом, который перебираем, так как мы перебираем все tab'ы, то какой-то из них обязательно совпадет
                    hideTabContent(0); //скрываем все табы
                    showTabContent(i); //показываем таб, который совпадает с target
                    break; //останаливаем цикл, чтобы дальше просто так не работал
                }
            }
        }
    });

    //Timer
    let deadline = '2019-03-06';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60))),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };
    }

    function setClock(id, endtime) {

        let timer = document.getElementById(id);
        console.log(timer);
        // hours = timer.querySelector('.hours'),
        // minutes = timer.querySelector('.minutes'),
        // seconds = timer.querySelector('.seconds'),
        // timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let a = getTimeRemaining(endtime);
            hours.textContent = a.hours;
            minutes.textContent = a.minutes;
            seconds.textContent = a.seconds;

            if (a.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(timer, deadline);

});