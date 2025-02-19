//
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let q = 'hello world';
// let w = 'lorem ipsum';
// let e = 'javascript is cool';
// console.log(q.length);
// console.log(w.length);
// console.log(e.length);


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let q = 'hello world';
// let w = 'lorem ipsum';
// let e = 'javascript is cool';
// console.log(q.toUpperCase());
// console.log(w.toUpperCase());
// console.log(e.toUpperCase());

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let q = 'HELLO WORLD';
// let w = 'LOREM IPSUM';
// let e = 'JAVASCRIPT IS COOL';
// console.log(q.toLowerCase());
// console.log(w.toLowerCase());
// console.log(e.toLowerCase());


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str);
// let strNew = str.replaceAll(' ', '').replace('y', 'y ');
// console.log(strNew);

//
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let stringToarray = (str) => str.split(' ');
// console.log(stringToarray(str));


//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let NumStrings = arr.map(value =>value + "" );
// console.log(NumStrings);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11, 21, 3];
// let sortNumsUp =nums.sort((a, b) => a-b);
// console.log(sortNumsUp);
// let sortNums =nums.sort((a, b) => b-a);
// console.log(sortNums);


//
// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort(function (a, b) {
//     return b.monthDuration - a.monthDuration;
// }));

// console.log(coursesAndDurationArray.sort((a, b) =>
//     b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filterDuration = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filterDuration);


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// coursesAndDurationArray.map((value, index) => {
//     value.id = index + 1
// });
// console.log(coursesAndDurationArray);

// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//

// let suits = ['spade', 'diamond', 'heart', 'clubs'];
// let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']
//
// let cardsAll = [];
// for (const suit of suits) {
//     for (const value of values) {
//         let card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//         cardsAll.push(card)
//
//     }
// }
// console.log(cardsAll);

// - знайти піковий туз

// console.log(cardsAll.find(card => card.value === 'ace' && card.cardSuit === 'spade'));

// - всі шістки

// console.log(cardsAll.filter(card => card.value === '6'));
// - всі червоні карти

// console.log(cardsAll.filter(card => card.color === 'red'));
// - всі буби


// console.log(cardsAll.filter(value => value.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
// console.log(cardsAll.filter(value => value.cardSuit === 'clubs' &&
//     (value.value === '10' || value.value === 'ace' || value.value === 'jack' || value.value === 'queen' || value.value === 'king')));

// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// const reduce = cardsAll.reduce((accum, card) => {
//         switch (card.cardSuit) {
//             case 'spade':
//                 accum.spades.push(card);
//                 break;
//             case 'diamond':
//                 accum.diamonds.push(card);
//                 break;
//                 case 'heart':
//                 accum.hearts.push(card);
//                 break;
//             case 'club':
//                 accum.clubs.push(card);
//                 break;
//
//         }
//         return accum;
//     },
//     {
//         spades: [],
//         diamonds: [],
//         hearts: [],
//         clubs: []
//     });
// console.log(reduce);
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в яких в modules є sass

// console.log(coursesArray.filter(course => {
//     return course.modules.includes('sass');
// }));
// --написати пошук всіх об'єктів, в яких в modules є docker
// console.log(coursesArray.filter(course => {
//     return course.modules.includes('docker');
// }));