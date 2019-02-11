let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'),
    question1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    question2 = prompt('Во сколько обойдется', '');

let expenses = {
    question1: question2
}

let optionalExpenses = {

}

let income = [];


let appData = {
    money: money,
    timeData: time,
    expenses,
    optionalExpenses,
    income,
    savings: false
};

console.log(appData);

alert('Бюджет на 1 день ' + money / 30);