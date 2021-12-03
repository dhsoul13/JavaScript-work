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
};

const without=(obj, fild)=>{
    let newObj =Object.assign({}, obj);
    delete newObj[fild];
    return newObj
}

let userWithout = without(user, "userAge");

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
}

const dayPrint=(obj,number)=>{
    return (obj[number]===undefined) ? "ошибка" : obj[number];
};

console.log(dayPrint(objDay, 5));