// Работа с if-else
// 1
let a;
a=1;
console.log("a=",a);
if (a==0){
    console.log("1", "Верно")
} else {
    console.log("1","Не верно")
};
// 1, -3- не верно, 0 верно;

// 2
if (a>0){
    console.log("2","Верно")
} else {
    console.log("2","Не верно")
};

//3
if (a<0){
    console.log("3","Верно")
} else {
    console.log("3","Не верно")
};
//4
if (a>=0){
    console.log("4","Верно")
} else {
    console.log("4","Не верно")
};
//5
if (a<=0){
    console.log("5","Верно")
} else {
    console.log("5","Не верно")
};
//6
if (a!=0){
    console.log("6","Верно")
} else {
    console.log("6","Не верно")
};
//7
if (a=="test"){
    console.log("7","Верно")
} else {
    console.log("7","Не верно")
};
//8
if (a=="1"){
    console.log("8.1","Верно")
} else {
    console.log("8.1","Не верно")
};
if (a==="1"){
    console.log("8.2","1","Верно \n")
} else {
    console.log("8.2","Не верно \n")
};

// 2 Работа с логическими переменными
let test;

test=false;
console.log("test=",test)
// 1
if (test==true){
    console.log("2.1", "Верно")
} else {
    console.log("2.1","Не верно")
};
// 2
if (test!=true){
    console.log("2.2", "Верно \n")
} else {
    console.log("2.2","Не верно \n")
};

// 3 Работа с логическими переменными
a=1;
let b=6;
console.log("a=",a);
if (a>0 && a<5){
    console.log("3.1", "Верно")
} else {
    console.log("3.1","Не верно")
};
// 2
if ((a==0 || a==2) || b>=3){
    console.log("3.2", a+b)
} else {
    console.log("3.2",a-b)
};
if ((a==0 || a==2 ) && b>=3){
    console.log("3.2", a+b)
} else {
    console.log("3.2",a-b)
};
//3 
if ((a==1 || a<1 ) || (b>=3)){
    console.log("3.3", a+b)
} else {
    console.log("3.3",a-b)
};
//4
if ((a>2 && a<11 ) || (b>=6 && b<14)){
    console.log("3.4", a+b,"\n")
} else {
    console.log("3.4",a-b,"\n")
};

// На switch-case

let num=1;
let result;

switch (num){
    case 1:
        result="зима";
        break;
    case 2:
        result="весна";
        break;
    case 3:
        result="лето";
        break;
    case 4:
        result="осень";
        break;
};
console.log(result,"\n");

// Общие задачи
// 1
day=Math.round(Math.random()*30);
console.log(day);

if (day>0 && day<=10){
    console.log("1. Первая декада месяца \n");
} else if(day>10 && day<=20){
    console.log("1. Вторая декада месяца \n");
} else{
    console.log("1. Третья декада месяца \n");
};
// 2
month=Math.round(Math.random()*12);
console.log(month);
if(month>=0 && month<=2){
    console.log("2.зима \n");
} else if(month>=3 && month<=5){
    console.log("2.весна \n");
} else if(month>=6 && month<=8){
    console.log("2.лето \n");
} else{
    console.log("2.осень \n")
};
// 3
let numb=Math.round(Math.random()*100);
if(numb%3==0 && numb%5==0 ){
    numb="FizzBuzz";
} else if (numb%3==0){
    numb="Fizz";
} else if(numb%5==0){
    numb="Buzz";
};

console.log("3.",numb,"\n");

// 4

let str="abcde";
if (str[0]=="a"){
    console.log("4. да \n");
} else {
    console.log("4. нет \n");
}

// 5
let strNum="111111";
if (strNum[0]=="1" || strNum[0]=="2" || strNum[0]=="3"){
    console.log("5. да \n");
} else {
    console.log("5. нет \n");
}

// 6

let sum=Number(strNum[0])+Number(strNum[1])+Number(strNum[2]);
console.log("6.",sum);

//7

if((Number(strNum[0])+Number(strNum[1])+Number(strNum[2]))==(Number(strNum[3])+Number(strNum[4])+Number(strNum[5]))){
    console.log("7.да");
}else{
    console.log("7.нет");
};

// Циклы while и for
// 1
for(let i=1; i<=100; i++){
    // console.log(i);
};
// 2
for(let i=11; i<=33; i++){
    // console.log(i);
};
// 3
for(let i=0; i<=100; i++){
    // if(i%2==0 && i>0){
    // console.log(i);
    // };
};
// 4
for(let i=1; i<=100; i++){
    sum=+i;
};
console.log(sum,"\n");
// 5
let x=0;
let factorial=1;
x=5;
for (let i=1; i<=x; i++){
factorial=factorial*i;
}
console.log("factorial:",factorial,"\n");

// 6
let char="5";
let word="";
for (let i=0; i<=9;i++){
    word=word+char;
}
console.log("word:",word,"\n")

//7

for(let i=0; i<=300; i++){
    if((i!=0 && i%12==0 && i!=12 && (parseInt(i/12)%2)!=0)){
        console.log(i,"oops");
    } else if(i%2!=0 && i%3==0){
        console.log(i,"holla");
    } else if(i==0){
        console.log(i, "zero");
    };
};

console.log("\n")

// Работа с for для массивов
// 1
let mas=[1,2,3,4,5];

for (let i=0; i<mas.length;i++){
    console.log(mas[i]);
};

console.log("\n");

// 2
result=0;

for (let i=0; i<mas.length;i++){
    result+=mas[i];
};

console.log("result=",result,"\n");

// Задачи общие.
// 1
mas=[2,5,9,15,0,4];

for(let i=0; i<mas.length;i++){
    if(mas[i]>3 && mas[i]<10){
        console.log(mas[i]);
    }
}
// 2
sum=0;
mas=[2,-2,-5,10,20,-10]; 
for(let i=0; i<mas.length; i++){
    if(mas[i]>0){
        sum+=mas[i];
    };
};
console.log("сумма:",sum,"\n");
//3 
mas=[1, 2, 5, 9, 4, 13, 4, 10];
for(let i=0; i<mas.length; i++){
    if(mas[i]==4){
        console.log("Есть \n");
        break;
    };
};
// 4
mas=[10, 20, 30, 50, 235, 3000];
for(let i=0; i<mas.length; i++){
    b=String(mas[i]);
    if (b[0]==2 || b[0]==1 || b[0]==5){
        console.log(mas[i]);
    }
};
console.log("\n");
// 5
str='-'
mas=[1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i=0; i<mas.length; i++){
    str=str+String(mas[i])+"-";
    
};
console.log(str);

console.log("\n");

// //6

// mas=["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

// let textBlock=document.querySelector(".block__text");

// for (let i=0; i<mas.length;i++){
//     if (mas[i]=="сб" || mas[i]=="вс"){
//         textBlock.innerHTML+=(` <b>${mas[i]}</b>`);
//         continue;
//     };
//     textBlock.innerHTML+=mas[i]+" ";
// };

// // 7
// day="чт";
// textBlock=document.querySelector(".block__text-1");
// for (let i=0; i<mas.length;i++){
//     if (day==mas[i]){
//         textBlock.innerHTML+=(`<i>${mas[i]}</i> `);
//         continue;
//     };
//     textBlock.innerHTML+=mas[i]+" ";
// };

//8
let count=0;
let n=1000;
num=0;

while(n>50){
    num=n;
    count+=1;
    n/=2;
}
console.log(`Итераций: ${count}, число: ${num}`);

//9

let x1=10;
let x2=3;
let max;
let min;

if(x1>x2){
    max=x1;
    min=x2;
} else{
    max=x2;
    min=x1;
}

for (let i=min;i<=max;i++){
    console.log(i);
}

console.log("\n");

// 10

x=10;

while (x>1){
if(x%2==0){
    x/=2;
} else {
    x*=3;
    x+=1;
};

if(x%2==0){
    x/=2;
} else {
    x*=3;
    x+=1;
};
console.log(`x=${x}`);
};