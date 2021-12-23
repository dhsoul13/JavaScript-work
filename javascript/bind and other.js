// 1.Реализовать объект пользователя с полями name, lastname ,middleName, birthDate. Реализовать геттер/сеттер fullname, который возвращает одной строкой
//  полное имя пользователя и записывает имя, фамилию и 
//  отчество при присвоении значения. Реализовать геттер age, 
//  который возвращает возраст используя данные даты рождения.

const person = {
    name: "Даниил",
    lastname: "Мухреев", 
    middleName: "Игоревич",
    birthDate: "2000-11-13",
    get fullName (){
        return `${this.name} ${this.lastname} ${this.middleName}`;
    },
    set fullName(value){
        [this.name, this.lastname, this.middleName] = value.split(' ');
    },
    get date(){
        return `${this.birthDate}`;
    },
    set date(value){
        this.birthDate = value;
    },
    get age(){
        return new Date().getFullYear() - new Date(this.birthDate).getFullYear()
    },

}

person.fullName = "Иван Иванов Иванович";
console.log(person.fullName)
console.log(person.birthDate)
console.log(person.age)

// 2 С помощью замыкания реализовать реализуйте генератор случайных чисел в указанном промежутке
//  (min и max). Важное условие: при генерировании чисел они не должны повторяться.

const randomEl = (min,max) => ()=>{
    return Math.floor(Math.random()*(max+min) - min);
}

const randomFrom2To10 = randomEl(2,10);
console.log(randomFrom2To10());


// 3. Что выведет функция? 

// function f() {
//     alert( this ); // ?
//   };
  
//   let user = {
//     g: f.bind(null)
//   };
  
//   console.log(user.g());
  
// Вывод глобалальный объект


// 4. Можем ли мы изменить this дополнительным связыванием?

// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();

// "контекст привязывается один раз и мы не можем его привязывать по цепочки" нашел 
  

// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// В текущей реализации Сообщение не соответствует тому, что мы ожидаем увидеть(“Имя пользователя  logged in” или “Имя пользователя failed to log in”)

function askPassword(ok, fail) {
    let password = "rockstar" ;
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
        console.log(`${this.name}: logged in`);
    },
  
    loginFail() {
        console.log(`${this.name}: failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//   6 .Напишите в указанном месте конструкцию с методом bind() так, 
//   чтобы this внутри функции func всегда указывал на value

  
let elem = {
    value: "Привет",
}

function func(surname, name){
    return `${this.value}, ${surname}, ${name}`
};

const boundFunc = func.bind(elem);

console.log(boundFunc('Иванов', 'Иван'));
console.log(boundFunc('Петров', 'Петр'));

// 7. Есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа. 
// Выполните каррирование. Т.е. напишите вспомогательную функцию currySum, в которую вы 
// передадите функцию sum, и которую можно будет вызвать слуедующим образом 
// -  currySum(a)(b)(c). 

const sum = (a, b, c) => a + b + c;

const currySum = (a) => (b) => (c) => sum(a,b,c);

console.log(sum(5,5,5));
console.log(currySum(5)(5)(5));

// 8. Напишите функцию создания задачи(createTask), принимающая название задачи, 
// которая возвращает функцию смены статуса задачи.При вызове функции смены статуса 
// возвращается строка с названием задачи и текущим статусом. Список статусов: 
// “Не назначена”, “В работе”, “Тестирование”, “Завершена’. 
// Статус Завершена - присваивается только после передачи флага true и только после 
// тестирования.  Статус Не назначена - только при первом вызове.


function createTask(name){
    let status = "";

    return function (param) {


        if(Boolean(param)){
            status = "завершина"
            return ` ${name} == ${status}`;
        };

        switch (status){

        case "": 
        status = "не назначена";
        return ` ${name} == ${status}`;

        case "не назначена":
        status = "в работе";
        return ` ${name} == ${status}`;

        case "в работе":
        status = "тестирование";
        return ` ${name} == ${status}`;

        case "тестирование":
        status = "в работе";
        return ` ${name} == ${status}`;

      };

      return ` ${name} == ${status}`;

    };
};

const task = createTask("JavaScript homework");
console.log(task());
console.log(task());
console.log(task());
console.log(task());
console.log(task());
console.log(task());
console.log(task());
console.log(task(true));
console.log(task());

const task1 = createTask("Php homework");
console.log(task1());
console.log(task1());
console.log(task1());
console.log(task1());
console.log(task1());
console.log(task1());
console.log(task1());
console.log(task1(true));
console.log(task1());