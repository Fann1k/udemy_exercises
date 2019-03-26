window.addEventListener('DOMContentLoaded', function () { //java script код начнет выполняться только после загрузки DOM

    "use strict"; //исп-ем строгий режим ES6
    let ajax = require('./parts/ajax.js'),
        calc = require('./parts/calc.js'),
        modal = require('./parts/modal.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js');

    ajax();
    calc();
    modal();
    slider();
    tabs();
    timer();
});