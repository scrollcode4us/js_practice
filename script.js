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
    timeData: time,
    expenses: {},
    optionalExpense: {},
    income: [],
    savings: true,
    chooseExpenses: function () { //цикл №1
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
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Низкий уровень дохода!');
        } else if (appData.moneyPerDay > 101 && appData.moneyPerDay < 999) {
            console.log('Средний уровень дохода!');
        } else if (appData.moneyPerDay > 1000) {
            console.log('Высокий уровень дохода!');
        } else {
            console.log('Error))');
        };
    },

    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let questionOptExpenses = +prompt('Статья необязательных расходов?');
            if (questionOptExpenses != '' && typeof (questionOptExpenses) == 'number') {
                console.log('opt ok');
                appData.optionalExpense[i] = questionOptExpenses;
            } else {
                alert('Введите корректные данные!');
                i--;
            }
        }
    },

    checkSavings: function () {
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
    },

    chooseIncome: function () {
        for (let i = 0; i <= 0; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');



            if (typeof (items) != "string" || items == "" || typeof (items) == null) {
                alert('Введите корректные данные!');
                i--;
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.sort();
            }
        }

        appData.income.forEach(function (num, i) {
            alert('Способы доп. заработка: ' + (i + 1) + ' - ' + num);
        });

    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
};




    // chooseIncome: function () {
    //     for (i = 0; i <= 1; i++) {
    //         if (items != '' && items == false) {
    //             let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    //             appData.income = items.split(', ');
    //             appData.income.push(prompt('Может что-то ещё?'));
    //             appData.income.sort();
    //         } else {
    //             alert('Введите корректные данные!');
    //             i--;
    //         }
    //     }
    // }




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