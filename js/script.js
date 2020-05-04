"use strict";

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    additionalIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;
startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD'),
        money = +prompt('Ваш бюджет на месяц?');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?')
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) { // проверка на правильность ввода расходов
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (typeof (a) === 'string' && (typeof (a) != null) && (typeof (b) != null) &&
            a != '' && b != '' && a.length < 50) {
            console.log('OK');

            appData.expenses[a] = b;
            sum += +b;

        } else {
            alert('Введите корректные данные!'); // домашнее задание
            i--;
        };
    };

    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let questionOptExpenses = optionalexpensesItem[i].value;

        appData.optionalExpense[i] = questionOptExpenses;
        optionalexpensesValue.textContent += appData.optionalExpense[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.budget != undefined) {
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Низкий уровень дохода!';
        } else if (appData.moneyPerDay > 101 && appData.moneyPerDay < 999) {
            levelValue.textContent = 'Средний уровень дохода!';
        } else if (appData.moneyPerDay > 1000) {
            levelValue.textContent = 'Высокий уровень дохода!';
        } else {
            levelValue.textContent = 'Произошла ошибка!';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка!';
    }
});

additionalIncome.addEventListener('input', function () {
    let items = additionalIncome.value;
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

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = chooseSum.value,
            percent = +choosePercent.value

        appData.monthIncome = sum / 100 / 12 * percent.toFixed();
        appData.yearIncome = sum / 100 * percent.toFixed();

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = chooseSum.value,
            percent = +choosePercent.value

        appData.monthIncome = sum / 100 / 12 * percent.toFixed();
        appData.yearIncome = sum / 100 * percent.toFixed();

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpense: {},
        income: [],
        savings: false
    }