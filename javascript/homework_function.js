// 1 Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function getPowNumber(num = 1) {
  return Math.pow(num, 2);
}
console.log(getPowNumber(5));

//2 Сделайте функцию, которая возвращает сумму двух чисел.

function getSumNumbers(num1 = 1, num2 = 1) {
  return num1 + num2;
}
console.log(getSumNumbers(5, 5));

//3 Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function getSumThreeNumber(num1 = 1, num2 = 1, num3 = 1) {
  return (num1 - num2) / num3;
}
console.log(getSumThreeNumber(14, 4, 5));

//4 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function getDay(i = 1) {
  let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вск"];
  return i - 1 <= 6 ? days[i - 1] : "ошибка";
}
console.log(getDay(1));

//5 Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function checkTwoZnachNumbers(num1 = 1, num2 = 1) {
  return (num1 = num2) ? true : false;
}
console.log(checkTwoZnachNumbers());

//6 Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
// больше 10 - пусть вернет true, а если нет то - false.
function checkSumTwoNumbers(check) {
  return check > 10 ? true : false;
}
console.log(checkSumTwoNumbers(getSumNumbers(5, 8)));

//7 Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
function isNumberNeg(num = 1) {
  return num < 0 ? true : false;
}
console.log(isNumberNeg(-2));
//8 Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(num = 1) {
  return num > 0 && num < 10 ? true : false;
}
console.log(isNumberInRange(5));
//9 Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных
function rgb(num1 = 0, num2 = 0, num3 = 0) {
  return (num1 < 255) & (num2 < 255) & (num3 < 255)
    ? console.log(`rgb(${num1},${num2},${num3})`)
    : console.log("нет такого цвета");
}
rgb(25, 33, 44);
// 10 Написать функцию, которая принимает в себя три параметра - число и две функции. Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться, если число четное. Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом , если число нечетное, и будет возвращать число, увеличенное на 1.
function getNumber(num = 0, pow, plusone) {
  return num % 2 === 0 ? pow(num) : plusone(num);
}
console.log(
  getNumber(5, getPowNumber, (num) => {
    return num + 1;
  })
);
//11 Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз, сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2.
function getNumbers(num1 = 1, num2 = 1, num3 = 3) {
  let sum = 1;
  while (num3 > 0) {
    sum *= num1 * num2;
    num3--;
  }
  return sum;
}
console.log(getNumbers(2, 2, 3));
//12 Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку с этими 3 словами, расположенными в алфавитном порядке.

function getString(str1 = "", str2 = "", str3 = "") {
  if (
    (typeof str1 == "string") &
    (typeof str2 == "string") &
    (typeof str2 == "string")
  ) {
    if ((str1 > str2) & (str2 > str3) & (str1 > str3)) {
      console.log(str3, str2, str1);
    } else if ((str1 > str2) & (str3 > str2) & (str1 > str3)) {
      console.log(str2, str3, str1);
    } else if ((str2 > str1) & (str1 > str3) & (str2 > str3)) {
      console.log(str3, str1, str2);
    } else if ((str2 > str1) & (str1 < str3) & (str2 > str3)) {
      console.log(str1, str3, str2);
    } else if ((str3 > str1) & (str1 > str2) & (str3 > str2)) {
      console.log(str2, str1, str3);
    } else {
      console.log(str1, str2, str3);
    }
  } else {
    return console.log("вы ввели число");
  }
}

getString("a", "b", "c");

//13 Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}
let n = getRandomNumber(10);
let mas = [n];
for (let i = 0; i < n; i++) {
  mas[i] = getRandomNumber(50);
}
console.log(mas);
function getNewArray(array, callback) {
  let newArray = [];
  for (let i = 0; array.length > i; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let mas1 = getNewArray(mas, isNumberInRange);
console.log(mas1);

//14  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(num = 25) {
  let result = 0;
  let str = String(num);
  for (let i = 0; i < str.length; i++) result += Number(str[i]);
  return result;
}
console.log(getDigitsSum(13));

//15  Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
//   let count=0;
//   for(let i=1;i<2020;i++){
//       if(getDigitsSum(i)===13){
//           count+=1;
//           console.log(`Число:${i},колличество:${count}`);
//       };
//   };
//16 Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
function isEven(num = 0) {
  return (num % 2 == 0) & (num > 0) ? true : false;
}
console.log(isEven(4));

//17 Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

let masNumber = [];
let k = getRandomNumber(10);
let newMasNumber = [];

for (let i = 0; i < k; i++) {
  masNumber[i] = getRandomNumber(50);
}
console.log(masNumber);

function getNewArrayNumber(mas, callback) {
  let newArray = [];
  for (let i = 0; mas.length > i; i++) {
    if (callback(mas[i])) {
      newArray.push(mas[i]);
    }
  }
  return newArray;
}
newMasNumber = getNewArrayNumber(masNumber, isEven);
console.log(newMasNumber);

//18 Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число без остатка).
function getDivisors(num = 1) {
  let newArray = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      newArray.push(i);
    }
  }
  return newArray;
}

let divisors = getDivisors(10);
console.log(divisors);

//19 Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

//1 вариант(в обратном получилось)
function printArray(mas, i) {
  if (i <= 0) {
    console.log(`${i}:${mas[0]}:`);
  } else {
    console.log(`${i}:${mas[i]}:`);
    printArray(mas, i - 1);
  }
  return "Все";
}
console.log(mas);
console.log(printArray(mas, mas.length - 1));

//2 вариант

// 20 Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

//1 вариант
function getDigitsOne(num) {  
  let result = 0;
  let k = 1;
  let str = String(num);
  while (k === 1) {
    result = 0;
    for (let i = 0; str.length > i; i++) {
      result += Number(str[i]);
    }
    if (result > 9) {
      str = String(result);
    } else {
      k = 0;
      return result;
    }
  }
}
console.log(getDigitsOne(2504034343234));

//2 вариант
function getDigitsTwo(num) {
  let sum = 0;
  let str = String(num);
  for (let i = 0; str.length > i; i++) {
    sum += Number(str[i]);
  }

  if (sum > 9) {
    return getDigitsTwo(sum);
  } else {
    return sum;
  }
}
console.log(getDigitsTwo(2504034343234));
