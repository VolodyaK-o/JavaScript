// 1 - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// arr = [1, 2, 34, 55, 4, '4', 'qwe', true, false, 'sdfg'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);


// 2 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let a = {
//     title: 'Хроніки Безночі',
//     pageCount: 584,
//     genre: 'епічне фентезі'
// }
// let b = {
//     title: 'Колонія. Нові темні віки',
//     pageCount: 304,
//     genre: 'наукова фантастика'
// }
// let c = {
//     title: 'Обґрунтований сумнів',
//     pageCount: 304,
//     genre: 'містичний трилер'
// }
// console.log(a, b, c);


// #3
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.
// let a = {
//     title: 'Хроніки Безночі',
//     pageCount: 584,
//     genre: 'епічне фентезі',
//     authors: [{
//         name: 'Олександр Михед',
//         age: 38
//     }]
// }
// let b = {
//     title: 'Колонія. Нові темні віки',
//     pageCount: 304,
//     genre: 'наукова фантастика',
//     authors: [{
//         name: 'Сергій Лукяненко',
//         age: 54
//     }]
// }
// let c = {
//     title: 'Обґрунтований сумнів',
//     pageCount: 304,
//     genre: 'містичний трилер',
//     authors: [{
//         name: 'Тарас Антипович',
//         age: 29
//     }]
// }
// console.log(a, b, c);


//     #4
// - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username,password. Вивести в консоль пароль
// кожного користувача
// let users = [
//     {
//         name: 'name1',
//         username: 'username1',
//         password: 1
//     },
//     {
//         name: 'name2',
//         username: 'username2',
//         password: 2
//     },
//     { name: 'name3', username: 'username3', password: 3 },
//     { name: 'name4', username: 'username4', password: 4 },
//     { name: 'name5', username: 'username5', password: 5 },
//     { name: 'name6', username: 'username6', password: 6 },
//     { name: 'name7', username: 'username7', password: 7 },
//     { name: 'name8', username: 'username8', password: 8 },
//     { name: 'name9', username: 'username9', password: 9 },
//     { name: 'name10', username: 'username10', password: 10 },
//
// ]
// console.log('password',users[0].password);
// console.log('password',users[1].password);
// console.log('password',users[2].password);
// console.log('password',users[3].password);
// console.log('password',users[4].password);
// console.log('password',users[5].password);
// console.log('password',users[6].password);
// console.log('password',users[7].password);
// console.log('password',users[8].password);
// console.log('password',users[9].password);


// # 5
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив
// з 21 значенням вичключаємо одразу

// let temperatures = [
//     {day: '1', Tmorning: 12, Tday: 20, Tevening: 16},
//     {day: '2', Tmorning: 11, Tday: 23, Tevening: 15},
//     {day: '3', Tmorning: 7, Tday: 25, Tevening: 20},
//     {day: '4', Tmorning: 15, Tday: 27, Tevening: 21},
//     {day: '5', Tmorning: 12, Tday: 20, Tevening: 16},
//     {day: '6', Tmorning: 14, Tday: 26, Tevening: 12},
//     {day: '7', Tmorning: 3, Tday: 20, Tevening: 9}
// ]
// console.log(temperatures)


// Логічні розгалуження:

//     # 6
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('Введіть одне з чисел 0, 1, -3');
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }


// #3ckURgvs 7
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let a = 'перша чверть';
// let w = 'друга чверть';
// let e = 'третя чверть';
// let r = 'четверта чверть';
// let time = +prompt('enter time');
// if (time >= 1 && time <= 15) {
//     console.log(a);
// } else if (time >= 16 && time <= 30) {
//     console.log(w);
// } else if (time >= 31 && time <= 45) {
//     console.log(e);
// } else if (time >= 46 && time <= 59) {
//     console.log(r);
// } else {
//     console.log('badTime');
// }


// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу,
// другу чи третю).

// let fDay = 'перша половина місяця';
// let mDay = 'друга половина місяця';
// let tDay = 'третя половина місяця';
// let day = +prompt('enter date');
//
// if (day >= 1 && day <= 10) {
//     console.log(fDay);
// } else if (day >= 11 && day <= 20) {
//     console.log(mDay);
// } else if (day >= 21 && day <= 31) {
//     console.log(tDay);
// } else {
//     console.log('badDate');
// }


// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt('введіть номер дня тижня');
// switch (day) {
//     case 1:
//         console.log('Monday');
//         alert('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         alert('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         alert('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         alert('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         alert('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         alert('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         alert('Sunday');
//         break;
//     default:
//         console.log('badDay');
//         alert('badDay');
//
// }






//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('first number');
// let b = +prompt('second number');
// if(a>b){
//     alert(a);
// }else if(a<b){
//     alert(b);
// }else{
//     alert('the same numbers');
// }





//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//         (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// let x = null;
// if(!x){
//     x='default';
//     console.log(x);
// }else {
//     console.log('not falsy');
// }




//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log('Супер');
// }