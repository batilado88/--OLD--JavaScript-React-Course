'use strict';

// if (0) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// let num = '100';

// switch (num) {
//     case 50: 
//         console.log('Мало');
//         break;
//     case 75: 
//         console.log('Мало');
//         break;
//     case 100: 
//         console.log('Оно!!');
//         break;
//     case 200: 
//         console.log('Много');
//         break;
//     default: 
//         console.log('Ну хз');
//         break;
// }

// console.log(!3);


// console.log( NaN || 2 || undefined );
 
// console.log( NaN && 2 && undefined );
 
// console.log( 1 && 2 && 3 );
 
// console.log( !1 && 2 || !3 );
 
// console.log( 25 || null && !3 );
 
// console.log( NaN || null || !3 || undefined || 5);
 
// console.log( NaN || null && !3 && undefined || 5);
 
// console.log( 5 === 5 && 3 > 1 || 5);






// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }



// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// 0 0 1 2 1 0 1 2 2 0 1 2



// *
// **
// ***
// ****
// *****
// ******

// let result = '';

// for (let i = 0; i < 6; i++) {
//     result += '*';
//     console.log(result);
// }



// let result = '';
// let count = 7;

// for (let i = 1; i < count; i++) {
//     // result = '*';
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n'; 
// }

// console.log(result);





// metka: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     metka2: for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) {continue metka2;}
//             console.log(`Third level: ${k}`);
//         }
//     }
// }



// const arr = [];

// for (let i = 5, j = 0; i <= 10; i++) {
//     arr[j++] = i;
//     console.log(arr);
// }




// *
// **
// ***
// ****
// *****
// ******

// let figure = '';

// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j <= i; j++) {
//         figure += '*';
//     }
//     figure += '\n';
// }

// console.log(figure);



//      *
//     ***
//    *****
//   *******
//  *********
// ***********




// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней

// for (let i = 0; i <= lines; i++) {

//     for (let j = 1; j <= lines - i; j++) {
//         result += ' ';
//     }

//     for (let j = 0; j <= 2 * i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);


// function getMathResult(num1, num2) {
//     if (typeof(num2) !== 'number' && num2 > 0) {
//         return num1;
//     } else {
//         let res = num1;
//         for (let i = 1; i < num2; i++) {
//             num1 += num1;
//             res += `---${num1}`; 
//         }
//         return res;
//     }
// }

// console.log(getMathResult(5,3));




// function getMathResult(num1, num2) {
//     if (typeof(num2) !== 'number' || num2 <= 0) {
//         return num1;
//     } else {
//         let res = num1;
//         let resNum = num1;
//         for (let i = 1; i < num2; i++) {
//             resNum += num1;
//             res += `---${resNum}`; 
//         }
//         return res;
//     }
// }

// console.log(getMathResult(5, 3));
// console.log(getMathResult(3, 10));
// console.log(getMathResult(10, 5));
// console.log(getMathResult(10, '5'));
// console.log(getMathResult(10, 0));
// console.log(getMathResult(20, -5));





// function calculateVolumeAndArea(edge) {
//     if (Number.isInteger(edge) && edge > 0) {
//         let volume = edge * edge * edge;
//         let area = 6 * (edge * edge);
//         return console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
//     } else {
//         return console.log('При вычислении произошла ошибка');
//     }
// }

// calculateVolumeAndArea(5);
// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea(0.2);
// calculateVolumeAndArea(-15);
// calculateVolumeAndArea(05);



// function getTimeFromMinutes(minute) {
//     let hours, mins, hoursText, minsText;

//     if (Number.isInteger(minute) && minute >= 0) {
//         hours = Math.floor(minute / 60);

//         if (minute % 60 === 0) {
//             mins = 0;
//         }   else {
//             mins = minute % 60;
//         }

//         if (hours === 0 || hours >= 5) {
//             hoursText = `часов`;
//         } else if (hours === 1) {
//             hoursText = `час`;
//         } else if (hours >= 2 && hours <= 4) {
//             hoursText = `часа`;
//         }

//         if (mins === 0 || mins >= 5 && mins <= 20 || mins >= 25 && mins <= 30 || mins >= 35 && mins <= 40 || mins >= 45 && mins <= 50 || mins >= 55 && mins <= 59) {
//             minsText = `минут`;
//         } else if (mins === 1 || mins === 21 || mins === 31 || mins === 41 || mins === 51) {
//             minsText = `минута`;
//         } else if (mins >= 2 && mins <= 4 || mins >= 22 && mins <= 24 || mins >= 32 && mins <= 34 || mins >= 42 && mins <= 44 || mins >= 52 && mins <= 54) {
//             minsText = `минуты`;
//         }

//         return console.log(`Это ${hours} ${hoursText} и ${mins} ${minsText}`);
//     } else {
//         return console.log('Ошибка, проверьте данные');
//     }
// }

// getTimeFromMinutes(150);
// getTimeFromMinutes(50);
// getTimeFromMinutes(0);
// getTimeFromMinutes(-150);
// getTimeFromMinutes(32);
// getTimeFromMinutes(185);
// getTimeFromMinutes(241);
// getTimeFromMinutes('Hello');
// getTimeFromMinutes(41);
// getTimeFromMinutes(52);
// getTimeFromMinutes(30);
// getTimeFromMinutes(243);
// getTimeFromMinutes(88);
// getTimeFromMinutes(94);
// getTimeFromMinutes(144);
// getTimeFromMinutes(180);


// // getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// // getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// // getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// // getTimeFromMinutes(-150) => "Ошибка, проверьте данные"


// // console.log(60%60);
// // console.log(0%60);
// // console.log(61%60);
// // console.log(33%60);

// // console.log(Math.floor(60 / 60));
// // console.log(Math.floor(122 / 60));
// // console.log(Math.floor(5 / 60));
// // console.log(Math.floor(78 / 60));


// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0
// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)



// function findMaxNumber(num1, num2, num3, num4) {
//     if ( arguments.length < 4 || typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number' || typeof(num4) !== 'number' )  {
//         return console.log(0);
//     } else {
//         return console.log(Math.max(num1, num2, num3, num4));
//     }
// }

// findMaxNumber(44, 2, 432, 55);

// // console.log(typeof('5') === 'number');
// // console.log(typeof(5) === 'number');
// // console.log(typeof('Hello') === 'number');


// console.log(Number.isNaN('5'));
// console.log(Number.isNaN(5));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711

// function fib(num) {
//     if (typeof(num) === 'number' && num > 0) {
//         let result ='';
//         let a;
//         let b;
//         let prevNum;

//         for (let i = 1; i <= num; i++) {
//             result += ` ${i}`;
//             a = i;
//             prevNum = a;
//             a += prevNum;

//             b = prevNum + a;


//             console.log(`i - ${i}`);
//             console.log(`a - ${a}`);
//             console.log(`prevNum - ${prevNum}`);
//             console.log(`b - ${b}`);

//             // if (i === 0) { continue; };

//             // a = i + (i-1);
//             // b += ` ${a}`;

//         }

//         console.log(result);
//         // console.log(b);
//         return;

//     } else {
//         return console.log('');
//     }
// }

// fib(10);


// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711

function fib(num) {
    if (Number.isInteger(num) && num > 0) {
        let result ='0';
        let arr = [0];
        let a = 0;
        let b = 1;
        let c;

        for (let i = 1; i < num; i++) {

            c = b + a;
            arr.push(c);
            result += ` ${c}`;
            b = arr[i];
            a = arr[i - 1];

        }
        console.log(result);
        return;

    } else {
        return console.log('');
    }
}

fib(10);
fib(5);
fib(3);
fib(15);
fib(2);
fib('1');
fib(0);
fib(2.2);