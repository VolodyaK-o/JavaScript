// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div><p>qwer-qwer</p></div>');
//
// }


// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div><h2>dovilnuj text - ${i} - довільний текст</h2></div>`);
//
// }


// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<div><h1>dovilnuj text  довільний текст</h1></div>`);
//     i++;
// }


//     #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 1;
// while (i <=20) {
//     document.write(`<h1>dovilnuj text - ${i} -  довільний текст</h1>`);
//     i++;
// }


//     #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
document.write(`<ul>`);

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i < listOfItems.length; i++) {
    let listOfItem = listOfItems[i];
    document.write(`<li>${listOfItems[i]}</li>`);
}

document.write(`</ul>`);

//     #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://www.officetime.com.ua/files/2023/11_27/17_49/u_files_store_7_463.jpg'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//

// ------------------------------------------------------------------------------------------------

// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//    document.write(`<div class="product-card">
//      <h3 class="product-title">${products[i].title} Price - ${products[i].price} </h3>
//  <img src=${products[i].image} alt="img" class="product-image">
//  </div>`
//
//    )
// }

// --------------------------------------------------------------------------------------------------


//
// --------------------
// #4WrHwFTEop0
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true

// for (let i = 0; i < users.length; i++) {
//
//     if (users[i].status === true) {
//         console.log(users[i]);
//     }
//
// }

// - користувачів зі статусом false

// for (let i = 0; i < users.length; i++) {
//
//     if (users[i].status === false) {
//         console.log(users[i]);
//     }
//
// }
// - користувачів які старші за 30 років

// for (let i = 0; i < users.length; i++) {
//
//     if (users[i].age > 30) {
//         console.log(users[i]);
//     }
// }