// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let S = (a, b) => a * b;
// console.log(S(3, 6));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let SKolo = (r) => 3.14 * (r ** 2);
// console.log(SKolo(7));


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let squareC = (h,r) => (2 * 3.14 * (r ** 2)) + (2 * 3.14 * r * h);
// console.log(squareC(4,6))

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let dispArr = (array) => {
//         for (const item of array) {
//         console.log(item);
//     }
// }
// dispArr(arr);


// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraf = (text)=> {
//     document.write(`<p>${text}</p>`);
//
// }
// paragraf('lorem47');


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let disp =(disp1, disp2, disp3)=> {
//     document.write(`<ul>
//         <li>${disp1}</li>
//         <li>${disp2}</li>
//         <li>${disp3}</li>
// </ul>`)
//
// }
// disp('qer', 25, 87646765);


// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let contLi = (disp1, id)=> {
//     for (let i = 1; i <= id; i++ ) {
//         document.write(`<ul><li>${disp1}</li></ul>`)
//     }
// }
// contLi('якимось чудом допер сам)', 5);


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let contARR = (array) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }document.write(`</ul>`)
// }
//
// let arr = [3, 4, 5, 'qwe', true];
// contARR(arr);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let usersDisp = (x) => {
//     for (let user of x) {
//
//
//         document.write(`<div>id= ${user.id} name= ${user.name}  age= ${user.age}</div>`)
//
//     }
//
// }
// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 6, name: 'anya', age: 31},
//     {id: 7, name: 'oleg', age: 28},
//     {id: 8, name: 'andrey', age: 29},
//     {id: 9, name: 'masha', age: 30},
//     {id: 10, name: 'olya', age: 31},
//     {id: 11, name: 'max', age: 31}
// ];
// usersDisp(users)


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// let MaxNumb = (x) => {
//     let maxN = x[0];
//     for (const maxNElement of x) {
//         if (maxNElement < maxN) {
//             maxN = maxNElement;
//         }
//
//     }
//     return maxN;
// }
// let arr = [4, 3, 6, 7, 8, 9, 5, 6, 4, 3, 5, 6, 7, 5];
// MaxNumb(arr);
// document.write(` мінімальне значення   ${MaxNumb(arr)}`);


// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// let sum = (arr) => {
//     let x = 0;
//     for (const arrElement of arr) {
//         x = x + arrElement
//     }
//     return x;
// }
//
// let arr = [4, 3, 6, 7, 10, 2, 4, 3, 1];
// sum(arr);
// console.log(sum(arr))


// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//
//     if (index1 < arr.length && index2 < arr.length) {
//         [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//         return arr
//     }
//
//
//     return undef;
// }
// console.log(swap([11, 22, 33, 44, 55, 66, 77, 88], 7, 2))


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     let Currency;
//     for (let item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             Currency = item;
//         }
//     }
//
//     let result = sumUAH/Currency.value
//     return result;
//
// }
//
//
// console.log(exchang