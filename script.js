"use strict"

let money = 'Ваш бюджет на месяц?';
//    time = prompt('Введите дату в формате YYYY-MM-DD');

for (let i = 0; i < 1; i++) { //проверка на пустые поля ввода бюджета
    money = +prompt('Ваш бюджет на месяц?');
    if (money != '') {
        console.log('budget ok');
    } else {
        alert('Введите корректные данные!');
        i--;
    }
};

let appData = {
    budget: money,
    //    timeData: time,
    expenses: {},
    optionalExpense: {},
    income: [],
    savings: false
};


// Цикл №1

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

appData.moneyPerDay = appData.budget / 30; // формула бюджета на день

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) { //вывод уровня достатка в консоль
    console.log('Низкий уровень дохода!');
} else if (appData.moneyPerDay > 101 && appData.moneyPerDay < 999) {
    console.log('Средний уровень дохода!');
} else if (appData.moneyPerDay > 1000) {
    console.log('Высокий уровень дохода!');
} else {
    console.log('Error))');
};