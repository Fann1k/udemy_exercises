function tabs() {
    //Tabs
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
        if (tabContent[b].matches('div.hide')) {
            //если у div есть класс hide, то
            tabContent[b].classList.add('show'); //добавляем класс show
            tabContent[b].classList.remove('hide'); //убираем класс hide
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target; //event - это click
        console.log(target); //target - это tab, на который нажали
        if (target && target.matches('div.info-header-tab')) {
            //если то на что кликнули содержит класс info-header-tab
            for (let i = 0; i < tab.length; i++) {
                //то пока не кончатся tab'ы
                if (target == tab[i]) {
                    //и если tab на который мы нажали совпадает с tab'ом, который перебираем, так как мы перебираем все tab'ы, то какой-то из них обязательно совпадет
                    hideTabContent(0); //скрываем все табы
                    showTabContent(i); //показываем таб, который совпадает с target
                    break; //останаливаем цикл, чтобы дальше просто так не работал
                }
            }
        }
    });
}

module.exports = tabs;