// 1 Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function getPowNumber(num=1){ 
    return Math.pow(num,2);
};
console.log(getPowNumber(5));

//2 Сделайте функцию, которая возвращает сумму двух чисел.

function getSumNumbers(num1=1, num2=1){
    return num1+num2;
}
console.log(getSumNumbers(5,5));

//3 Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function getSumThreeNumber(num1=1, num2=1, num3=1){
    return (num1-num2)/num3;
}
console.log(getSumThreeNumber(14,4,5));

//4 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function getDay(i=1){
    let days=["пн","вт","ср","чт","пт","сб","вск"];
    return (i-1<=6) ?  days[i-1] : "ошибка";
}
console.log(getDay(1));

//5 Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function checkTwoZnachNumbers(num1=1, num2=1){
    return (num1=num2) ? true : false;
}
console.log(checkTwoZnachNumbers())

//6 Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма 
// больше 10 - пусть вернет true, а если нет то - false.

function checkSumTwoNumbers(check){
    return (check>10) ? true: false;
};
console.log(checkSumTwoNumbers(getSumNumbers(5,5)));