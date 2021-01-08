'use strict';

// Инкапсуляция - отделение от внешнего мира внутренностей программы: переменных, функций и прочего
// (в ООП - объект хранит свое состояние в приватном порядке, и только методы объекта имеют доступ для его изменения)

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();

class User {
    constructor(name, age) {
        this.name = name;
        this._Age = age;
    }

    #surname = 'Petrychenko'; // Экспериментальная возможность добавления свойств, приватные

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }
}

const ivan = new User('Ivan', 27);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);
// console.log(ivan.surname);
ivan.say();

ivan.surname = 'Krabov';
console.log(ivan.surname);