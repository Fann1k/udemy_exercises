!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){window.addEventListener("DOMContentLoaded",function(){"use strict";var e=n(1),t=n(2),o=n(3),r=n(4),c=n(5),i=n(6);e(),t(),o(),r(),c(),i()})},function(e,t){e.exports=function(){var e="Загрузка...",t="Спасибо! Скоро мы с вами свяжемся!",n="Произошла ошибка!",o=document.querySelector(".main-form"),r=o.querySelectorAll("input"),c=document.createElement("div"),i=document.querySelector("#form"),u=i.querySelectorAll("input");function a(e){e.forEach(function(e){e.value=""})}c.classList.add("status"),o.addEventListener("submit",function(i){
//!вешаем обработчик события SUBMIT, т.е событие - отправка формы. + Вешаем событие на form, а не на кнопку, чтобы отслеживать когда форма отправляется на сервер
i.preventDefault(),o.appendChild(c);var u=new FormData(o),s={};u.forEach(function(e,t){s[t]=e});var l=JSON.stringify(s);new Promise(function(e,t){var n=new XMLHttpRequest;n.open("POST","php/server.php"),n.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.send(l),n.addEventListener("readystatechange",function(){n.readyState<4?e():4===n.readyState&&200==n.status?e():t()})}).then(function(){c.innerHTML=e}).then(function(){return c.innerHTML=t}).catch(function(){c.innerHTML=n}).then(a(r))}),i.addEventListener("submit",function(o){o.preventDefault(),i.appendChild(c),function(){var e=new XMLHttpRequest;e.open("POST","php/server.php"),e.setRequestHeader("Content-Type","application/json; charset=utf-8");var t=new FormData(i),n={};t.forEach(function(e,t){n[t]=e});var o=JSON.stringify(n);return e.send(o),new Promise(function(t,n){e.addEventListener("readystatechange",function(){e.readyState<4?t():4===e.readyState&&200==e.status?t():n()})})}().then(function(){c.innerHTML=e}).then(function(){return c.innerHTML=t}).catch(function(){c.innerHTML=n}).then(a(u))})}},function(e,t){e.exports=function(){var e=document.querySelectorAll(".counter-block-input")[0],t=document.querySelectorAll(".counter-block-input")[1],n=document.querySelector("select"),o=document.querySelector(".counter-total"),r=0,c=0,i=0;o.innerHTML=0,e.addEventListener("change",function(){r=+this.value,i=4e3*(r+c),""==t.value||""==e.value?o.innerHTML=0:o.innerHTML=i}),t.addEventListener("change",function(){c=+this.value,i=4e3*(r+c),""==e.value||""==t.value?o.innerHTML=0:o.innerHTML=i}),n.addEventListener("change",function(){if(""==t.value||""==e.value)o.innerHTML=0;else{var n=i;o.innerHTML=n*this.options[this.selectedIndex].value}})}},function(e,t){e.exports=function(){var e=document.querySelector(".more"),t=document.querySelector(".overlay"),n=document.querySelector(".popup-close"),o=document.querySelectorAll(".description-btn");e.addEventListener("click",function(){t.style.display="block",this.classList.add("more-splash"),document.body.style.overflow="hidden"}),o.forEach(function(e){e.addEventListener("click",function(){t.style.display="block",this.classList.add("more-splash"),document.body.style.overflow="hidden"})}),n.addEventListener("click",function(){t.style.display="none",document.body.style.overflow="",o.forEach(function(e){e.classList.remove("more-splash")})})}},function(e,t){e.exports=function(){var e=1,t=document.querySelectorAll(".slider-item"),n=document.querySelector(".next"),o=document.querySelector(".prev"),r=document.querySelector(".slider-dots"),c=r.querySelectorAll(".dot");function i(n){n>t.length&&(e=1),n<1&&(e=t.length),t.forEach(function(e){return e.style.display="none"}),c.forEach(function(e){return e.classList.remove("dot-active")}),t[e-1].style.display="block",c[e-1].classList.add("dot-active")}function u(t){i(e+=t)}i(e),o.addEventListener("click",function(){u(-1)}),n.addEventListener("click",function(){u(1)}),r.addEventListener("click",function(t){for(var n=0;n<c.length+1;n++)t.target.matches(".dot")&&t.target==c[n-1]&&i(e=n)})}},function(e,t){e.exports=function(){var e=document.querySelectorAll(".info-header-tab"),t=document.querySelector(".info-header"),n=document.querySelectorAll(".info-tabcontent");function o(e){for(var t=e;t<n.length;t++)n[t].classList.remove("show"),n[t].classList.add("hide")}o(1),t.addEventListener("click",function(t){var r,c=t.target;if(console.log(c),c&&c.matches("div.info-header-tab"))for(var i=0;i<e.length;i++)if(c==e[i]){o(0),n[r=i].matches("div.hide")&&(n[r].classList.add("show"),n[r].classList.remove("hide"));break}})}},function(e,t){e.exports=function(){var e,t,n,o,r,c;e=document.getElementById("timer"),t=e.querySelector(".hours"),n=e.querySelector(".minutes"),o=e.querySelector(".seconds"),r=e.querySelector(".days"),c=setInterval(function(){var e,i=("2019-03-27",{total:e=Date.parse("2019-03-27")-Date.parse(new Date),seconds:Math.floor(e/1e3%60),minutes:Math.floor(e/1e3/60%60),hours:Math.floor(e/1e3/60/60%24),days:Math.floor(e/864e5)});i.seconds<10&&(i.seconds="0"+i.seconds),i.minutes<10&&(i.minutes="0"+i.minutes),i.hours<10&&(i.hours="0"+i.hours),t.textContent=i.hours,n.textContent=i.minutes,o.textContent=i.seconds,r.textContent=i.days,i.total<=0&&(clearInterval(c),t.textContent="00",n.textContent="00",o.textContent="00",r.textContent="0")},1e3)}}]);