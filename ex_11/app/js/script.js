let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest(); //создаем объект XMLHttpRequest - главный объект для работы с AJAX запросами со своими методами, св-ами, событиями

    request.open('GET', 'js/current.json'); //метод open производит настройку AJAX запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //настройка http запросов (указываем контент - json в кодировке utf-8)
    request.send(); //отправка запроса на сервер (тело запроса, даннные отправляемые на сервер)

    //типы ответов от сервера:
    //status - 404, 0, 200, 403 и т.д
    //statusText - текстовое описание ответа - ok, not found
    //responseText / response - текст ответа сервера, то что бэкэндщик отправляет 
    //readyState - текущее состояние запроса
    request.addEventListener('readystatechange', function () {
        function converter() {
            return new Promise(function (resolve, reject) {
                if (request.readyState === 4 && request.status == 200 && !isNaN(inputRub.value)) {
                    resolve()
                } else {
                    reject()
                }
            });
        }

        converter()
            .then(() => {
                let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(() => inputUsd.value = "Что-то не так!")
    });
});