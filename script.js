"use strict"

let money, time;

function start() { // проверка на правильность ввода бюджета
    money = +prompt('Ваш бюджет на месяц?'),
        time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?')
    }
};
start();

/* for (let i = 0; i < 1; i++) { //проверка на пустые поля ввода бюджета
    money = +prompt('Ваш бюджет на месяц?');
    if (money != '') {
        console.log('budget ok');
    } else {
        alert('Введите корректные данные!');
        i--;
    }
}; */

let appData = {
    budget: money,
    //    timeData: time,
    expenses: {},
    optionalExpense: {},
    income: [],
    savings: true
};


// Цикл №1
function chooseExpenses() {
    for (let i = 0; i < 2; i++) { // проверка на правильность ввода расходов
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = +prompt("Во сколько обойдется?");

        if (typeof (a) === 'string' && (typeof (a) != null) && (typeof (b) != null) &&
            a != '' && b != '' && a.length < 50) {
            console.log('OK');
            appData.expenses[a] = b;
        } else {
            alert('Введите корректные данные!'); // домашнее задание
            i--;
        };
    };
};
chooseExpenses();

// Цикл №2

/* let i = 0; // проверка на правильность ввода расходов
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
    if (typeof (a) === 'string' && (typeof (a) != null) && (typeof (b) != null) &&
        a != '' && b != '' && a.length < 50) {
            console.log('OK');
            appData.expenses[a] = b;
    }
    else {
        alert('Введите корректные данные');
        i--;
    };
    i++;
}; */


//Цикл №3

/* let i = 0; // проверка на правильность ввода расходов
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
    if (typeof (a) === 'string' && (typeof (a) != null) && (typeof (b) != null) &&
        a != '' && b != '' && a.length < 50) {
        console.log('OK');
        appData.expenses[a] = b;
    } else {
        alert('Введите корректные данные');
        i--;
    };
    i++;
}
while (i < 2); */

function detectDayBudget() { // формула бюджета на день
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
};
detectDayBudget(); // формула бюджета на день

function detectLevel() { //вывод уровня достатка в консоль
    if (appData.moneyPerDay < 100) {
        console.log('Низкий уровень дохода!');
    } else if (appData.moneyPerDay > 101 && appData.moneyPerDay < 999) {
        console.log('Средний уровень дохода!');
    } else if (appData.moneyPerDay > 1000) {
        console.log('Высокий уровень дохода!');
    } else {
        console.log('Error))');
    };
}
detectLevel(); //вывод уровня достатка в консоль

function chooseOptExpenses() { // функция вывода необязательных расходов
    for (let i = 0; i < 3; i++) {
        let questionOptExpenses = +prompt('Статья необязательных расходов?');
        if ( questionOptExpenses != '' && typeof(questionOptExpenses) == 'number') {
            console.log('opt ok');
            appData.optionalExpense[i] = questionOptExpenses;
        } else {
            alert('Введите корректные данные!');
            i--;
        }
    }
}
// chooseOptExpenses(); // вывод функции необязательных расходов

function checkSavings() { // калькулятор дипозита
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = prompt('Под какой процент?');
        while (save == '') { // проверка на правильность ввода
            save = +prompt('Какова сумма накоплений?');
        };
        while (percent == '') { // проверка на правильность ввода
            percent = +prompt('Под какой процент?');
        }
        appData.monthIncome = (save / 100 / 12 * percent).toFixed();
        alert('Ежемесячный доход с депозита: ' + appData.monthIncome);
    }
};
checkSavings();