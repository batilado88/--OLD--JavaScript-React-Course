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

