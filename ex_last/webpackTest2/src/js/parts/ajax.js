function ajax() {

    //пишем сообщения, которые будут выходить в зависимости ответа от сервера
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Произошла ошибка!'
    };

    //берем элементы обратной связи
    let form = document.querySelector('.main-form'),
        //берем форму из модального окна
    input = form.querySelectorAll('input'),
        //берем инпуты из form
    statusMessage = document.createElement('div'),
        //создаем новый div для вывода в него message
    formContact = document.querySelector('#form'),
        inputContact = formContact.querySelectorAll('input');

    statusMessage.classList.add('status'); //даем созданному div класс status

    form.addEventListener('submit', function (event) {
        //!вешаем обработчик события SUBMIT, т.е событие - отправка формы. + Вешаем событие на form, а не на кнопку, чтобы отслеживать когда форма отправляется на сервер
        event.preventDefault();
        form.appendChild(statusMessage); //добавляем блок в form
        //передача данных с помощью JSON
        let formData = new FormData(form); //внутрь FormData засовываем данные заполненные пользователем, т.е form

        //превращаем FormData в формат обычного объекта
        let obj = {}; //создаем пустой объект
        formData.forEach(function (value, key) {
            //берем все данные в formData
            obj[key] = value; //и перезаписываем их в форме обычного объекта в obj
        });

        //превращаем объект в строку/JSON формат
        let json = JSON.stringify(obj);

        function postData() {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest(); //создаем новый объект XMLHttpRequest
                request.open('POST', 'php/server.php'); //настраиваем запрос: POST - метод отправки, php/server.php - куда отправляем
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); //настраиваем заголовки http запроса для JSON

                request.send(json); //отправляем данные на сервер в формате JSON

                request.addEventListener('readystatechange', function () {
                    //readystatechange - наблюдает за изменеиями состояния запроса
                    if (request.readyState < 4) {
                        //readyState - 5 состояний (от 0 до 4) запроса
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        //если readyState === Done и status(код от сервера) == 200
                        resolve();
                    } else {
                        reject();
                    }
                });
            });
        }

        postData().then(() => {
            statusMessage.innerHTML = message.loading;
        }).then(() => statusMessage.innerHTML = message.success) //если одно действие, то можно не писать фигурные скобки
        .catch(() => {
            statusMessage.innerHTML = message.failure;
        }).then(clearInput(input));
    });

    function clearInput(clear) {
        clear.forEach(function (element) {
            element.value = '';
        });
    }

    formContact.addEventListener('submit', function (event) {
        event.preventDefault();
        formContact.appendChild(statusMessage); //добавляем блок в form


        function postData2() {
            let request = new XMLHttpRequest(); //создаем новый объект XMLHttpRequest
            request.open('POST', 'php/server.php'); //настраиваем запрос: POST - отправляем, php/server.php - куда отправляем
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); //настраиваем заголовки http запроса для JSON
            let formData = new FormData(formContact); //внутрь FormData засовываем данные заполненные пользователем, т.е form

            //превращаем FormData в формат обычного объекта
            let obj = {}; //создаем пустой объект
            formData.forEach(function (value, key) {
                //берем все данные в formData
                obj[key] = value; //и перезаписываем их в форме обычного объекта в obj
            });
            //превращаем объект в строку/JSON формат
            let json = JSON.stringify(obj);
            request.send(json); //отправляем данные на сервер в формате JSON
            return new Promise(function (resolve, reject) {
                request.addEventListener('readystatechange', function () {
                    //readystatechange - наблюдает за изменеиями состояния запроса
                    if (request.readyState < 4) {
                        //readyState - 5 состояний (от 0 до 4) запроса
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        //если readyState === Done и status(код от сервера) == 200
                        resolve();
                    } else {
                        reject();
                    }
                });
            });
        }

        postData2().then(() => {
            statusMessage.innerHTML = message.loading;
        }).then(() => statusMessage.innerHTML = message.success) //если одно действие, то можно не писать фигурные скобки
        .catch(() => {
            statusMessage.innerHTML = message.failure;
        }).then(clearInput(inputContact));
    });
}

module.exports = ajax;