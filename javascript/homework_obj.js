// 1. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

var str = 'Каждый охотник желает знать';

// function delete_characters(str, length) {
// return str.slice(0,length);
// };

// let oneStr=delete_characters(str, 7);

const delete_characters = (str, length)=>{
    return str.slice(0,length);
}
console.log(delete_characters(str, 19));

// 2 Вставить тире между словами строки

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// const insert_dash=(str)=>{
//     let newStr="";
//     for (let i=0; str.length>i;i++){
//         if(str[i].startsWith(' ')){
//         newStr+="-";  
//         } else{
//          newStr+=str[i];}
//      }
//     return newStr.toUpperCase();
// }

const insert_dash=(str)=>{
    return str.toUpperCase().replace(/\s/g, "-");
}
console.log(insert_dash(str));


//3 Сделать первую букву строки прописной
//Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

var str = "string not starting with capital"; 

const cursive_letter=(str)=>{
    return str[0].toUpperCase()+str.slice(1);
}

console.log(cursive_letter(str));

//4. Первая буква каждого слова заглавная
//Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// const capitalize=(str)=>{
//     for 
// }

// console.log(capitalize(str));
// 5. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
 
let change_register = (str)=> {
    let newStr = "";
    for(let i=0; i<str.length;i++){
        if(str[i] === str[i].toLowerCase()){
            newStr += str[i].toUpperCase();
        } else{
            newStr+=str[i].toLowerCase();
        }
    };
    return newStr;
};
console.log(change_register(str));

//6
//Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов
str="every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

const removeChar=(str)=>{
 return str.replace(/\W/g, " ").replace(/\s+/g, " ");
}
console.log(removeChar(str));

// 7. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.


function zeros (num, len, sign) {

};
//8. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const comparison=(str1, str2)=> {
//     return (str1.toLowerCase>str2.toLowerCase) ? "Первое больше" : 
//     (str1.toLowerCase<str2.toLowerCase) ? "Втрое больше" :  
//     "Равны";
// };

const comparison=(str1, str2)=> {
    if(str1.toUpperCase()>str2.toUpperCase()){
        return "Первый больше";
    } else if(str1.toUpperCase()<str2.toUpperCase()){
        return "Второй больше"
    } else {
        return "Равны";
    };
};

console.log(comparison("ff", "sss"));

// 9 Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.

str = "Каждый охотник желает знать";  
 

const  insensitiveSearch = (str1, str2)=> {
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    return str1.match(str2,str1);
};

console.log("9:",insensitiveSearch(str,"охотник"))


// //10. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

str = "hEllo world word";
const initCap=(str)=> {
    return str.toLowerCase().replace(/\b\w?/g,(char)=>char.toUpperCase()).replace(/\s/g,"");
};
console.log(initCap(str));



// 12. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз. 
const repeatStr=(str, n)=> { 
    str+=' ';
    return str.repeat(n);
};
console.log(repeatStr(str));


// 13. Получить имя файла
// Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

let pathname = "/home/user/dir/file.txt";

let path=(pathname)=> { 
    return pathname.split("/").pop();
};

console.log(path(pathname));

// 14. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

str = "Каждый охотник желает знать"; 
str1 = "скрипт";
str2 = "знать";
console.log(str.endsWith(str2));

// 15. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

str = 'Астрономия — Наука о небесных телах';

const getSubstr = (str, char, pos)=>{
str=str.toLowerCase();
char=char.toLowerCase();
let strLength=str.indexOf(char)+char.length;
return str.slice(strLength,pos);
};
console.log(getSubstr(str,"наука", 30));
// 16. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
str = "Каждый охотник желает знать"; 
const insert=(str, substr, pos)=>{
let newStr=str.split('');
newStr=newStr.splice(pos,0,substr);
return newStr.join('');
};
console.log("/",insert(str,"jjj", 3));


// 17. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.
str = "Каждый охотник желает знать"; 
const limitStr=(str, n, symb="...")=>{
    return str.substr(0,n)+symb;
};

console.log(limitStr(str,5));

// 18. Поделить строку на фрагменты
str = "привет";

const cutString1 = (str, n) => {
    let mas=[];
    for(let i=0; i<str.length; i+=n){
        mas.push(str.substr(i,n));
    };
    return mas;
};
console.log(cutString1(str,3));


// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

let symb = "о"; 
str = "Aстрономия это наука о небесных объектах";
let count=(str, symb)=>{
    let countSymb=0;
    str.toLowerCase();
    for(let i=0; str.length>i;i++){
        if(str[i]==symb){
            countSymb+=1;
        };
    };
    return countSymb;
};

console.log(count(str,symb));
// 20. Удалить лишние пробелы из строки
//Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

str = "    Max is a good      boy     "; 

const strip=(str)=>{
    return str.trim().replace(/\s+/g," ");
};

console.log (strip(str));

// 21. Удалить лишние слова из строки
//Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

str="Сила тяжести приложена к центру масс тела";

const cutString=(str, n)=>{
    return str.split(" ").slice(0,n).join(" ");
}
console.log(cutString(str,5))

// 23. Найти слово в строке

str = 'abc def ghi jkl mno pqr stu';

const findWord=(word, str)=> {
  return str.includes(word);
};

console.log(findWord("jkl",str))


//24. Преобразовать строку в массив слов
//Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

str = 'Каждый охотник желает знать';

const stringToarray=(str)=>{
return str.split(" ");
}

console.log(stringToarray(str));

// 25. Реализовать объект

// Создать объект с начальным полем title. Добавить поле с ключом description начальным значением строкой. Добавить метод addField, который при вызове добавляет новое поле в объект с переданным именем и значением addField(fieldName, value), добавить метод editField(fieldName, value), который меняет указанное свойство объекта. Добавить метод удаление свойства deleteField(fieldName), удаляющий указанное поле. Добавить и изменить поля с помощью этих методов.


let obj={
    title:"тайтл", 
}
obj.description="описание";
obj.addField= function (fieldName, value){
this[fieldName]=value;
};
obj.editField=function(fieldName, value){
this[fieldName]=value;
};
obj.deleteField=function(fieldName){
    delete this[fieldName];
};

obj.addField("revie",100);
obj.deleteField("revie");
console.log(obj);

// 26.
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

const getDigitsSum=(digit)=>{
    let sum=0;
    for(let i=0; i<digit.toString().length;i++){
        sum+=+digit.toString()[i];
    }
    return sum;
}

console.log(getDigitsSum(999));

// 27.
// Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
let sum=0;
for (let i=0; i<=2020;i++){
    if(getDigitsSum(i)===13){
        sum+=1;
    };
};
console.log(`Сумма: ${sum}`);
// 28.
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
const getNumber=(number,callback)=>{
    let sum=callback(number);;
    for(let i=0; i<=1;){
        if(sum>9){
            sum=callback(sum);
        } else {
            i++
            return sum;
        };
    };
};

console.log(getNumber(777588,getDigitsSum));
 
//29 Напишите функцию, которая возвращает новый объект без указанных значений.

const user= {
    userName:"Даниил",
    userAge:21,
    userCounty:"NN",
};

const without=(obj, ...fild)=>{
    let newObj =Object.assign({}, obj);
    for( let i=0; i<fild.length; i++){
    delete newObj[fild[i]];
    };
    return newObj
}

let userWithout = without(user, "userAge","userCounty");

console.log(user);
console.log(userWithout);

// 30.
//  Написать функцию, которая проверяет наличие поля в объекте.

const user1= {
    userName:"Даниил",
    userAge:21,
};

const checkField=(obj, fild)=>{
  return (obj[fild] === undefined) ? false : true;
}

console.log(checkField(user1, "userName"));

// 31.
// Написать функцию, которая принимает число от 1 до 7 и возвращает день недели. Решить с помощью объектов.


const objDay = {
    1:"Понедельник",
    2:"Вторник",
    3:"Среда",
    4:"Четверг",
    5:"Пятница",
    6:"Суббота",
    7:"Воскресенье",

    day: function(numberDay=1){
        return this[numberDay];
    }
}


console.log(objDay.day(5));



// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.


let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка']

const vegetableLength = (mas)=>{
    return mas.map((el)=>{
        return el.length;
    })
}

console.log("Ответ на 1:",vegetableLength(vegetables));

//Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

let numbers = [2, 3, 5, 7, 11, 13, 17];

console.log(numbers);

const  currentSums = (mas) =>{

    return mas.reduce((perValue, el , index) =>{

        if ( index === 0 ){
             perValue.push(el);
        } else {
            let sum = 0;
            console.log(index);
            for(let i=0; i<=index;i++){
                
                console.log(`индекс ${i}, значение ${mas[i]}`);

                sum = sum + mas[i];
            }
            console.log("cумма:", sum);
            perValue.push(sum);
            
        }

        return perValue

    }, []);
}

console.log(currentSums(numbers));

// 3 Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.



// 4. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str. 

let strPut = "Каждый охотник желает знать"; 

// Ваш код 
// const fooStr = (str)=>{
//     let newArray = [];
//     str = str.split(" ");
//     for (let i = 0; i<str.length; i++){
//         newArray.push(str[i][0]);
//     };
//     return newArray
// }

// console.log(fooStr(strPut));  // [К,о,ж,з,г,с,ф]


const fooStr = (str)=>{
    let newArray = 0;
    str = str.split(" ");
    newArray = str.map((el)=>{ return el[0];});
    return newArray;
};

console.log(fooStr(strPut));

// 5 Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. 

let str5 = "JavaScript"; 

// Ваш код 

const fooStr5 = (str)=>{
    let newStr = str.split('');
    let result = [];
    for(let i = 0; i < newStr.length; i++){
        if(i==0){
            result.push(newStr[i] + newStr [i+1]);
        } else if(i==newStr.length-1){
            result.push(newStr[i-1] + newStr [i]);
        } else{
            result.push(newStr[i-1] + newStr [i] + newStr [i+1]);
        };
    };
    return result;
};

console.log(fooStr5(str5)); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] 


// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений

let a = [1,2,3];
let b = [4,5,6];
let c = [7,8,9];

const getArr = (a, b, c)=>{
    let newMas = [];
    newMas = newMas.concat(a,b,c);
    newMas.sort((a,b)=>{return b-a});
    return newMas;
}

console.log(getArr(a,b,c));

// 6 Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений

let numerics = [5, 7, 2, 9, 3, 1, 8];

const foo = (numerics) =>{
    return numerics.sort((a,b)=>b-a);
}

console.log(foo(numerics));

// 8 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

// let sumElemFromMatrix = 0;
let matrix= [[1, 2, 3], [4, 5], [6]]
// for (let innerMatrix of matrix){
//     for (let value of innerMatrix){
//         sumElemFromMatrix+=value;
//     }
// }
let sumElemFromMatrix = (matrix) =>{
    return matrix.flat().reduce((acc,el)=>{
        return acc+el;
    });
};

console.log(sumElemFromMatrix(matrix));

//9. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let matrixTwo = [
    [
        [1, 2], [3, 4]
    ], 
    [
        [5, 6], [7, 8]
    ]
]

let sumElemFromMatrixTwo = 0;

for (let innerInnerMatrix of matrixTwo){
    for (let innerMatrix of innerInnerMatrix){
        for (let value of innerMatrix ){
            sumElemFromMatrixTwo+= value
        }
    }
}

console.log(sumElemFromMatrixTwo);

// 10 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.


let numbersDop = [2,3,5,6,7];

const reverseMas = ((mas)=> {
    let k=mas.length-1;
    console.log("длина:",mas.length);
    let element = 0;

    for (let i = 0; i<mas.length/2; i++){

        element=mas[i];
        mas[i] = mas[k-i];
        mas[k-i]= element;

    };
    return mas
});

let result = reverseMas(numbersDop);

console.log(result);

// 11 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

let masNumber = [1,2,2,6,8,9];

const getTenSumFromMas = (array)=>{
    let count = 0;
    let sum = 0;
    for (let i=0; array.length; i++){
        sum+=array[i];
        count+=1;
        if(sum > 10){
            break;
        };
    };
    return count;
}

console.log("Колличество:", getTenSumFromMas(masNumber));



// 12 Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].


const arrayFill = (elem, col)=>{
    let newArray = [];
    for(let i=0; i<col; i++){ newArray.push(elem); }
    return newArray;
};
console.log(arrayFill("x", 5))



//13 Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

let objPerson = {
    personName : "Даниил",
    personAge : "21",
    personEducation: "НГПУ. им Козьмы Минина",
}

let clone1 = Object.assign({},objPerson,);

let clone2 = {...objPerson};

clone1.personName = "Александр";

clone2.personName = "Кирилл";

console.log(objPerson);
console.log(clone1);
console.log(clone2);

// 14 Создайте функцию, которая принимает 1 аргумент - объект пользователя user со свойствами name, age, city. Функция должна возвращать новый объект пользователя с измененным полем name, при этом оригинальный объект user должен остаться неизменным.

userOne = {
    userName:"Даниил",
    userAge:20,
    userCity:"Нижний Новгород",
};


const newUser = (user)=>{
    let newOject = Object.assign({}, user);
    newOject.userName = "Александр";
    return newOject;
}

userTwo = newUser(userOne);
console.log(userOne);
console.log(userTwo);

//15 Написать функцию которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of ...). 


// const sumNElem = (...n)=>{
//     return n.reduce((acc,el)=>{
//         return (el % 2 == 0) ? acc + el : acc;
//     },0)
// }

const sumNElem = (...n)=>{
    let sum = 0;
    for (let value of n){
        if( value%2 == 0 && value !=0){
            sum+=value;
        }
    }
    return sum;
}
console.log(sumNElem(2, 2 ,4 ,5 ,3))

// 16 Написать функцию, которая принимает слово и возвращает true, если слово является палиндромом.

let word = "ротор";

let checkPalindrome = (str)=>{
  let mas = [];
  for  (let i = 0; i<str.length; i++ ){
      mas.push(str[i]);
  };

  for (let i= 0; i<mas.length; i++){
      if (mas[i] != mas.reverse()[i]){
        return false;
      }
  }
  return true;
}

console.log(checkPalindrome(word));

//17 Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во втором массиве.


let mas1 = [1,8,3,7];

let mas2 = [3,7,3,2];

const  selectMas = (arr1, arr2)=>{
    let newArray = [];
    for(let i = 0; i< arr1.length; i++){
        if(arr2.includes(arr1[i])){
            newArray.push(arr1[i]);
        }
    }
    return newArray
}

console.log(selectMas(mas1, mas2));

// 18 Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи( Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.).

let mas = [4,2,3,1,52,5552,31,13,53,41,324];

const isNumberInRange = (arr) => {
    return mas.filter((el)=>{
        return (el>0 && el<10) ? el : "";
    })
}

console.log(isNumberInRange(mas));

//19 делайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

let number19 = 99;

const getDigitsSumV2 = (el)=>{
    let arr = el.toString().split('');
    return arr.reduce((acc, el)=>{
        return acc+Number(el);
    },0)
}

console.log(getDigitsSumV2(number19));

//20 Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

const findSumYear = (callback) =>{
    let sum = 0;
    for(let i=1; i < 2020; i++){
        if(callback(i) == 13){
            sum+=1;
        };
    };
    return sum;
};

console.log(findSumYear(getDigitsSumV2));

//21 Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число без остатка).

let number20 = 10;

const getDivisors = (num)=>{
    let arr = [];
    for (let i=1; i<=num; i++){
        if(num % i == 0){
            arr.push(i);
        };
    };
    return arr;
}

console.log(getDivisors(number20));


// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. 

