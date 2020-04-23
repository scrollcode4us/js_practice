"use strict"

let money = +prompt('Ваш бюджет на месяц?');
//    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    //    timeData: time,
    expenses: {},
    optionalExpense: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
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

//Домашнее задание! Нерабочий скрипт

// let a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = +prompt("Во сколько обойдется?"),
//     i = 0;

// while (i < 1) {
//     prompt("Введите обязательную статью расходов в этом месяце"); +
//     prompt("Во сколько обойдется?");
//     i++;
//     if ( a === '' || b === '') { //проверка на пустые поля ввода
//         alert('Введите корректные данные!');
//         i--;
//     };
// };

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Низкий уровень дохода!');
} else if (appData.moneyPerDay > 101 && appData.moneyPerDay < 999) {
    console.log('Средний уровень дохода!');
} else if (appData.moneyPerDay > 1000) {
    console.log('Высокий уровень дохода!');
} else {
    console.log('Error))');
};