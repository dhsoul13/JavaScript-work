// // 1 Что будет выведено в консоль? Ответить не запуская код

// function foo() {
//     console.log(this);
// }
// // foo() /// window в браузере, т.е глобальный объект


// // 2 Что будет выведено в консоль? Ответить не запуская код

// const obj = {
//     name: 'Дмитрий',
//     getName() {
//     console.log(this.name);
//    },
//    }; 
   
// // obj.getName(); /// 'Дмитрий" т.е объект obj

// //3 Что будет выведено в консоль? Ответить не запуская код

// const obj3 = {
//     name: 'Дмитрий',
//     getName() {
//       function bar() {
//         console.log(this.name);
//       }
//       bar();
//     },
//    };


// //    obj3.getName(); /// global объект

// //4 Что будет выведено в консоль? Ответить не запуская код

// const obj4 = {
//     name: 'Дмитрий',
//     getName: () => {
//       function bar() {
//         console.log(this.name);
//       }
//       bar();
//     },
//    };

// //    obj4.getName(); /// global объект
   
// //5 Что будет выведено в консоль? Ответить не запуская код
// const obj5 = {
//     name: 'Дмитрий',
//     getName() {
//       const bar = () => {
//         console.log(this.name);
//       }
//       bar();
//     },
//    };
// //    obj5.getName();// "Дмитрий" obj 5 объект

// //6 Что будет выведено в консоль? Ответить не запуская код

// const obj6 = {
//     name: 'Дмитрий',
//     getName() {
//       console.log(this.name);
//     },
//    }; /// "Дмитрий"
    
   
//    const obj2 = {
//     getName: obj6.getName,
//    }; // undefined так как у obj2 нет такого свойства 

    
// //    obj2.getName();
   

// //7 Что будет выведено в консоль? Ответить не запуская код
// const getName = () => {
//     console.log(this);
//    };
    
//    const obj7 = {
//     name: 'Дмитрий',
//     getName,
//    };
    
//    const obj7_2 = {
//     getName,
//    };
// //    obj7.getName(); /// global
// //    obj7_2.getName();//  global
   
// // 8 Что будет выведено в консоль? Ответить не запуская код

// const obj8 = {
//   name: 'Дмитрий',
//   friend: {
//     name: 'Владимир',
//     getName() {
//       function innerGetName() {
//         console.log(this.name);
//       }
//       innerGetName();
//     },
//   },
//  };
  
// obj8.friend.getName(); /// global объект

// // 9 Что будет выведено в консоль? Ответить не запуская код

// const obj9 = {
//   name: 'Дмитрий',
//   friend: {
//     name: 'Владимир',
//     getName() {
//       return function() {
//         console.log(this.name);
//       }
//     },
//   },
//  };
// obj9.friend.getName()();//global


// //10 Что будет выведено в консоль? Ответить не запуская код
// const obj10 = {
//   name: 'Дмитрий',
//   friend: {
//     name: 'Владимир',
//     getName() {
//       return () =>  {
//         console.log(this.name);
//       }
//     },
//   },
//  };
// obj10.friend.getName()() ///Владимир
 

// // 11 Что будет выведено в консоль? Ответить не запуская код
 
// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message);
//   }
// };
// setTimeout(object.logMessage, 1000); /// global объект не будет ничего

// // 12 Воспользуйтесь функцией logMessage таким образом, чтобы в консоли увидеть сообщение "Hello, World!"

// const object12 = {
//   message: 'Hello, World!'
//  };
//  function logMessage() {
//   console.log(this.message); // "Hello, World!"
//  }
 
//  object12.logMessage = logMessage;
//  object12.logMessage();
 


// //  13 Что будет выведено в консоль? Ответить не запуская код

// var length = 4;
// function callback() {
//  console.log(this.length); // What is logged?
// }
// const object13 = {
//  length: 5,
//  method(callback) {
//    callback();
//  }
// };
// object13.method(callback, 1, 2); // globla

// //14 Реализовать объект калькулятора calculator с 3 методами. Первый метод setValues(a, b) присваивает значения свойствам a и b.Второй sum()(обратите внимание, что он не принимает аргументы)  возвращает сумму свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены. Третий метод mult() возвращает произведение свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены.
// // Дополнительно: сделать в функции setValues(a, b) проверку и разрешить присвоение только чисел, иначе возвращать сообщение об ошибке.


// // const calculator = {
// //     a: null,
// //     b: null,
// //     setValues: function(num1, num2,...reg){
// //         this.a = num1;
// //         this.b = num2;
// //     },
// //     sum: function(){
// //         return (!(this.a === undefined || this.b === undefined)) ? this.a + this.b : "возможно ты не ввел числа/число"; 
// //     },
// //     mult: function(){
// //         return (!(this.a === undefined || this.b === undefined)) ? this.a * this.b : "возможно ты не ввел числа/число"; 
// //     },
// // }

// // calculator.setValues(12, 12);
// // console.log(calculator.b);
// // console.log(calculator.sum());
// // console.log(calculator.mult());


// const calculator = {
//     a: null,
//     b: null,
//     check: 0,
//     setValues: function(num1, num2,...reg){
        
//         if (Number.isInteger(num1)) {
//             this.a = num1;
//         } else {
//             this.a = "Ошибка введенно число";
//             this.check=1;
//         }

//         if (Number.isInteger(num2)) {
//             this.b = num2;
//         } else {
//             this.b = "Ошибка введенно число";
//             this.check=1;
//         }
//     },
//     sum: function(){
//         return (this.check == 0) ? this.a + this.b : "возможно ты не ввел числа/число"; 
//     },
//     mult: function(){
//         return  (this.check == 0)   ? this.a * this.b : "возможно ты не ввел числа/число"; 
//     },
// }

// calculator.setValues("f", 5);
// console.log("А:",calculator.a);
// console.log("Б:",calculator.b);
// console.log("Сумма:",calculator.sum());
// console.log("Умножение:",calculator.mult());



// //15  Создать объект calculator2 с 3 методами. 1 метод - setVales(a, b) - создать используя метод из предыдущего задания(можно скопировать по ссылке метод из объекта calculator либо создать функцию setValues, как мы делали на лекции и присвоить обоим объектам). 2 метод - div() - возвращает результат деления a на b. 3 метод - diff() - возвращает разность чисел a и b.

// const calculator2 = {
//     a: null,
//     b: null,
//     check: 0,
//     setValues: calculator.setValues,
//     div: function(){
//         return (this.check == 0) ? this.a / this.b : "возможно ты не ввел числа/число"; 
//     },
//     diff: function(){
//         return (this.check == 0) ? this.a - this.b : "возможно ты не ввел числа/число"; 
//     },

// };

// calculator2.setValues(5, 5);
// console.log("А:",calculator2.a);
// console.log("Б:",calculator2.b);
// console.log("Деление:",calculator2.div());
// console.log("Разность:",calculator2.diff());

// //16
// // Создать объект пользователя  user1 со свойствам name, age, city, favoriteColor и методами setName, setAge, setCity, setFavoriteColor, которые меняют значения соответствующих свойств. Создать объект второго юзера user2 из существующего объекта user1. Изменить значения всех свойств второго юзера с помощью методов setName, setAge, setCity, setFavoriteColor. Вывести в консоль оба объекта и убедиться, что значения свойств разные.

// // const user1 = {
// //   name: "Даниил",
// //   age: 21,
// //   city: "Нижний Новгород",
// //   favoriteColor: "черный",
// //   setName: function (changeName){
// //     this.name = changeName;
// //     return this;
// //   },
// //   setAge: function (changeAge){
// //     this.age = changeAge;
// //     return this;
// //   },
// //   setCity: function (changeCity){
// //     this.city = changeCity;
// //     return this;
// //   },
// //   setFavoriteColor: function (changeColor){
// //     this.favoriteColor = changeColor;
// //     return this;
// //   },

// // };

// // const {...user2} = user1;

// // user2.setName("Антон").setAge(20).setCity("Москва").setFavoriteColor("зеленый");

// const user1 = {
//   name: "Даниил",
//   age: 21,
//   city: "Нижний Новгород",
//   favoriteColor: "черный",
//   setName: function (changeName){
//     this.name = changeName;
//     return this;
//   },
//   setAge: function (changeAge){
//     this.age = changeAge;
//     return this;
//   },
//   setCity: function (changeCity){
//     this.city = changeCity;
//     return this;
//   },
//   setFavoriteColor: function (changeColor){
//     this.favoriteColor = changeColor;
//     return this;
//   },

// };

// const {setName,setAge,setCity,setFavoriteColor,...user2} = user1;

// user2.setName = user1.setName;
// user2.setName("Антон");

// user2.setAge = user1.setAge;
// user2.setAge(25);

// user2.setCity = user1.setCity;
// user2.setCity("Сочи");

// user2.setFavoriteColor = user1.setFavoriteColor;
// user2.setFavoriteColor("белый");

// console.log(user1);
// console.log(user2);

// ////////////////////////////


// // 17 Реализовать функцию, которая принимает в себя любое количество числовых аргументов и возвращает наименьшее число. (не использовать Math.min).

// const getRandomEl = (min=1,max=10) =>{
//   return Math.round((Math.random() * (max-min)) + min);
// }

// const getRandomMas = () =>{
//     let newMas = [ ];
//     n = getRandomEl(1,30);
//     for (let i = 0; i < n; i++){
//       newMas.push(getRandomEl(10,1000));
//     }
//     return newMas;
// }

// const getMin = (mas)=>{
//     let [...newMas] = mas;
//     return newMas.sort((a,b)=>a-b)[0];
// }


// let masEx = getRandomMas();
// let minEl = getMin(masEx);

// console.log(masEx);
// console.log(minEl);


// // 18 Исправьте код таким образом, чтобы вывод логов соответствовал комментариями

// const func = (user) => {
//   return user = {
//     name: "Дмитрий",
//     surname: "Cидоров"
//   };
// };

// const  firstUser = {
//   name: 'Василий',
//   surName: 'Иванов'
// }

// console.log(func("firstUser"));
// console.log(firstUser);



// //19 Создайте объекты двух персонажей с именами(name) с числовыми характеристиками уровня(level), силы(strength), ловкости(agility) и интелекта(intellect). 
// Для обоих персонажей создайте метод attack, который рассчитывает и возвращает урон атаки путем сложения силы и ловкости, и метод fireball, который возвращает урон файерболом путем умножения интеллекта на уровень персонажа. Далее создайте метод combo, который возвращает сумму значений, которые возвращают методы  attack и fireball. 
// После формирования объектов персонажей создайте функцию startFight, которая принимает в себя два объекта и сравнивает результаты вызовов их методов combo и возвращает строку “Победил ИМЯ_ПЕРСОНАЖА”.


const hero_1 = {
  name: "Sniper",
  level: 1,
  strength: 19,
  agility: 27,
  intellect:15,
  attack: function (){
    return (this.strength + this.agility);
  },
  fireball: function(){
    return (this.intellect * this.level);
  },
  combo: function(){
    return (this.attack() + this.fireball());
  },
};

const {...hero_2} = hero_1;

hero_2.name = "Windranger",
hero_2.level = 1;
hero_2.strength = 18;
hero_2.agility =17;
hero_2.intellect =18;



const startFight = (obj1,obj2,...rest)=>{
    return (obj1.combo() > obj2.combo()) ? `Победил ${obj1.name}`: `Победил ${obj2.name}`;
};

console.log(startFight(hero_2, hero_1));

