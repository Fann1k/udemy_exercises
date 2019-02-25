let startBtn = document.querySelector('#start'),
	budgetValue = document.querySelector('.budget-value'),
	dayBudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),
	expensesItem = document.getElementsByClassName('expenses-item'),

	buttons = document.getElementsByTagName('button'),
	expensesBtn = buttons[0], //class = expenses-item-btn
	optionalExpensesBtn = buttons[1],
	countBtn = buttons[2],

	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('#sum'),
	percentValue = document.querySelector('#percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

function disableButtons() {
	expensesBtn.setAttribute("disabled", "");
	optionalExpensesBtn.setAttribute("disabled", "");
	countBtn.setAttribute("disabled", "");
}

disableButtons();

let money, time;

startBtn.addEventListener('click', function () {
	time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
	money = +prompt('Ваш бюджет на месяц?', '');
	expensesBtn.removeAttribute("disabled", "");
	optionalExpensesBtn.removeAttribute("disabled", "");
	countBtn.removeAttribute("disabled", "");

	while (isNaN(money) || money == null || money == '') {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
	appData.timeData = time;
	appData.budget = money;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener('click', function () {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50 && !isNaN(b)) {
			console.log(111);
			appData.expenses[a] = b; //создали пару ключ-значение, a-b
			sum += +b;
			expensesValue.textContent = sum;
			appData.expensesSum = sum;
		} else {
			i = i - 1;
		}
	}
});

optionalExpensesBtn.addEventListener('click', function () {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let optExpenses = optionalExpensesItem[i].value;
		if ((typeof (optExpenses)) === 'string' && (typeof (optExpenses)) != null && optExpenses != '' && optExpenses.length < 50) {
			appData.optionalExpenses[i] = optExpenses;
			optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
		} else {
			i = i - 1;
		}
	}
});

countBtn.addEventListener('click', function () {
	if (appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget - appData.expensesSum) / 30;
		dayBudgetValue.textContent = appData.moneyPerDay.toFixed();

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = 'Минимальный уровень достатка';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = 'Средний уровень достатка';
		} else if (appData.moneyPerDay >= 2000) {
			levelValue.textContent = 'Высокий уровень достатка';
		} else {
			levelValue.textContent = 'Произошла ошибка';
		}
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка';
	}
});

incomeItem.addEventListener('input', function () {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,

	// checkSavings: function () {
	// 	if (appData.savings == true) {
	// 		let save = +prompt('Какова сумма накоплений?', ''),
	// 			percent = +prompt('Под какой процент?', '');

	// 		appData.monthIncome = save / 100 / 12 * percent;
	// 		alert('Доход в месяц с вашего депозита ' + (appData.monthIncome).toFixed());
	// 	}
	// },

	// chooseIncome: function () {
	// 	for (i = 0; i < 1; i++) {
	// 		// let items = prompt('Что принесет дополнительный доход?', '');
	// 		itemsForCheck = +items;
	// 		if (isNaN(itemsForCheck)) {
	// 			// appData.income = items.split(', ');
	// 			appData.income.push(prompt('Есть еще что-то?'));
	// 			appData.income.sort();
	// 		} else {
	// 			i = i - 1;
	// 		}
	// 	}
	// 	appData.income.forEach(function (element, a) {
	// 		alert('Способы доп. заработка: ' + (a + 1) + '. ' + element);
	// 	});
	// }
};