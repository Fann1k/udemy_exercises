let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

    expensesItem = document.getElementsByClassName('expenses-item'),
    buttons = document.getElementsByTagName('button'),
    expensesBtn = buttons[0],
    optionalExpensesBtn = buttons[1],
    countBtn = buttons[2],
    optionalexpensesItem = document.querySelectorAll('optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start() {
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц?', '');

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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется', '');
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('сработало 1 условие');
                appData.expenses[a] = b; //создали пару ключ-значение, a-b
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = appData.budget / 30;
        alert('Бюджет на 1 день ' + (appData.moneyPerDay).toFixed());
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay >= 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита ' + (appData.monthIncome).toFixed());
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optExpenses = prompt('Статья необязательных расходов?', '');
            if ((typeof (optExpenses)) === 'string' && (typeof (optExpenses)) != null && optExpenses != '' && optExpenses.length < 50) {
                appData.optionalExpenses[i] = optExpenses;
            } else {
                i = i - 1;
            }
        }
    },
    chooseIncome: function () {
        for (i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход?', '');
            itemsForCheck = +items;
            if (isNaN(itemsForCheck)) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Есть еще что-то?'));
                appData.income.sort();
            } else {
                i = i - 1;
            }
        }
        appData.income.forEach(function (element, a) {
            alert('Способы доп. заработка: ' + (a + 1) + '. ' + element);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}