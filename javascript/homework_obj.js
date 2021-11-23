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

const  insensitive_search= (str1, str2)=> {

    
};


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