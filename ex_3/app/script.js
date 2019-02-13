let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

    while (isNaN(money) || money == null || money == '') {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется', '');
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('сработало 1 условие');
            appData.expenses[a] = b; //создали пару ключ-значение, a-b
        }
        else {
            i = i - 1;
        }
    }
}

chooseExpenses();

function detectDayBudget () {
    appData.moneyPerDay = appData.budget / 30; //внутри appData можно создавать новые свойства и присваивать им значения - например moneyPerDay = введенное значение/30
    alert('Бюджет на 1 день ' + (appData.moneyPerDay).toFixed());
}

detectDayBudget ();

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    }
    else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    }
    else if (appData.moneyPerDay >= 2000) {
        console.log('Высокий уровень достатка');
    }
    else {
        console.log('Произошла ошибка');
    }
} 

detectLevel ();

function checkSavings () {
    if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save/100/12*percent;
        alert ('Доход в месяц с вашего депозита ' + (appData.monthIncome).toFixed());
    }
}

checkSavings ();

function chooseOptExpenses () {
    for (let i = 1; i < 4; i++) {
        let optExpenses = prompt('Статья необязательных расходов?', '');
        if ((typeof (optExpenses)) === 'string' && (typeof (optExpenses)) != null && optExpenses != '' &&  optExpenses.length < 50) {
            appData.optionalExpenses[i] = optExpenses;
        }
        else {
            i = i - 1;
        }
    }
}

chooseOptExpenses ();

console.log(appData);