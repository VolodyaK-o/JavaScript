// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
//
// let user1 = new User(1, 'vasya', 'vasuliovuch', 'vasya@gmail.com', '123123123');
// let user2 = new User(2, 'max', 'maxovuch', 'vasya@gmail.com', '123123123');
// let user3 = new User(3, 'olya', 'olegivna', 'vasya@gmail.com', '123123123');
// let user4 = new User(4, 'ira', 'vasuliovuch', 'vasya@gmail.com', '123123123');
// let user5 = new User(5, 'sem', 'vasuliovuch', 'vasya@gmail.com', '123123123');
// let user6 = new User(6, 'deyv', 'vasuliovuch', 'vasya@gmail.com', '123123123');
// let user7 = new User(7, 'vasya', 'vasuliovuch', 'vasya@gmail.com', '123123123');
// let user8 = new User(8, 'max', 'vasuliovuch', 'vasya@gmail.com', '123123123');
// let user9 = new User(9, 'sem', 'vasuliovuch', 'vasya@gmail.com', '123123123');
// let user10 = new User(10, 'div', 'vasuliovuch', 'vasya@gmail.com', '123123123');
// let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// console.log(users);


//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let arr = users.filter((a) => {
//     if (a.id % 2 === 0) {
//         return a;
//     }
// })
// console.log(arr);

//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


//
// console.log(users.sort(function (a, b) {
//     return a.id - b.id;
// }));


//
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//

// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//
// }
//
// let clients = [
//
//     new Client(1, 'vasya', 'vasuliovuch', 'vasya@gmail.com', '1231231',['df', 'dfsadfsgsdfg', 'tv']),
//     new Client(2, 'max', 'maxovuch', 'vasya@gmail.com', '123123123', ['microwave', 'blander', 'paper']),
//     new Client(3, 'olya', 'olegivna', 'vasya@gmail.com', '123123123', ['tv', 'game', 'laptop', 'computer']),
//     new Client(4, 'ira', 'vasuliovuch', 'vasya@gmail.com', '123123123', ['asdfas','qretwrt', 'wrtadfs', 'asdfasdfa', 'asdfasdfasdf', 'fhdgd']),
//     new Client(5, 'sem', 'vasuliovuch', 'vasya@gmail.com', '123123123', ['tv', 'juice']),
//     new Client(6, 'deyv', 'vasuliovuch', 'vasya@gmail.com', '12312312',['1', '2', '3']),
//     new Client(7, 'vasya', 'vasuliovuch', 'vasya@gmail.com', '1231231', ['12','asfas', 'dcjdkfj']),
//     new Client(8, 'max', 'vasuliovuch', 'vasya@gmail.com', '123123123', ['tablet']),
//     new Client(9, 'sem', 'vasuliovuch', 'vasya@gmail.com', '123123123', ['1', '2', '3', '4', '5']),
//     new Client(10, 'div', 'vasuliovuch', 'vasya@gmail.com', '12312312', ['1', '2', '3', '4', '5', '6']),
// ];
// console.log(clients);
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(clients.sort(function (a, b) {
//     return a.order.length - b.order.length;
// }));

//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:

// function Car(model, produser, year, maxspeed, engine,) {
//     this.model = model;
//     this.produser = produser;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// this.drive = function () {
//
//     console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
// };
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// this.info = function () {
//     for (const argument in this) {
//         console.log(argument, this[argument]);
//
//     }
// }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// this.increaseMaxSpeed = function (newSpeed) {
//     this.maxspeed = this.maxspeed + newSpeed;
//
// }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// this.changeYear = function (newYear) {
//     this.year = newYear;
//
// }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver) {
//         this.addDriver = driver;
//         console.log(`Vadila - ${driver}`);
//     }
//
// }
//
// let car = new Car('renault', 'France', '2012', '220','1.6');
// console.log(car);
// car.drive()
// car.info()


// -- ---------------------------------------------------------------------------------------------------------------
//


//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

// class Car {
//
//     constructor(model, produser, year, maxspeed, engine) {
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//
//     drive() {
//
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//     info() {
//         for (const argument in this) {
//                     console.log(argument, this[argument]);
//
//                 }
//     }
//
//     newMaxspeed(newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//
//     }
//
//     newYear (newValue) {
//         this.year = newValue;
//
//     }
//     addDriver(driver) {
//         this.driver = driver;
//
//     }
//
// }
//
// let car = new Car('Renault', 'France', 2012, 240, 1.6,);
// console.log(car);
// car.drive();
// car.info();
// car.newMaxspeed(30);
// car.newYear(2032);
// car.addDriver('sem');


//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
class Cinderella {


    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }


}

let cinderellas = [
    new Cinderella('Olja', 18, 31),
    new Cinderella('Ira', 19, 32),
    new Cinderella('Yulia', 20, 33),
    new Cinderella('Oksana', 21, 34),
    new Cinderella('Tamara', 21, 35),
    new Cinderella('Orusya', 22, 36),
    new Cinderella('lilya', 20, 37),
    new Cinderella('Sofa', 16, 38),
    new Cinderella('Mira', 17, 35),
    new Cinderella('Olja', 25, 42)

];

class Princ {


    constructor(name, age, shoehefound) {
        this.name = name;
        this.age = age;
        this.shoehefound = shoehefound;
    }
}

let princ = new Princ('Taras', 33, 36);


let princFind = (cinderellas, Princ) => {
    for (const cinderella of cinderellas) {
        if (cinderella.footsize === princ.shoehefound) {
            return `${cinderella.name}`;
        }
    }

}
console.log(princFind(cinderellas, Princ));

//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter