let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


// appData.expenses.a1 = question2;
// appData.expenses.a3 = question4;

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется', '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('сработало 1 условие');
        appData.expenses[a] = b; //создали пару ключ-значение, a-b
    }
    else {
        i = 0;
    }
};

appData.moneyPerDay = appData.budget / 30; //заметьте, что внутри appData можно создавать новые свойства и присваивать им значения

alert('Бюджет на 1 день ' + appData.moneyPerDay);

console.log(appData);