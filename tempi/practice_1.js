function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

firstTask();


// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
    
    
}

secondTask();




// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    // for (let i = 2; i <= 10; i = i+2) {
    //     console.log(i);
    // }
    // Второе решение:
    for (let i = 2; i <= 10; i++) {

        if (i % 2 !== 0) {
            continue;
        } else {
            console.log(i);
        }
    }
}

thirdTask();





// Место для четвертой задачи

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
        console.log(i);
        i++;
        }
    }
}

fourthTask();




// Место для пятой задачи

// Заполните массив цифрами от 5 до 10 включительно. 
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    let j = 0;
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[j] = i;
        j++;
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}

fifthTask();

////////////////////////////////////////////////////////////////////////

// Место для первой задачи
// Заполните новый массив (result) числами из старого (arr). 
// Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив


function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    
    // Не трогаем
    return result;
}

firstTask();


// Место для второй задачи
// Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'string') {
            data[i] += ' - done';
        } else {
        data[i] *= 2;
        }
    }
    console.log(data);
    
    // Не трогаем
    return data;
}

secondTask();


// Место для третьей задачи
// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    let j = 0;
    for (let i = data.length - 1; i >= 0; i--) {
        result[j] = data[i];
        j++;
    }
    console.log(result);
    
    // Не трогаем
    return result;
}

thirdTask();



//////////////////////////////////
// (**) Задача на формирование фигуры

//     *
//    ***
//   *****
//  *******
// *********
//***********

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0; i <= lines; i++) {
    
    for (let j = lines - i; j > 0; j--) {
        result += ' ';
    }

    for (let j = 1; j < i + 2; j++) {
        result += '*';
        if (j == 1) {continue;}
        result += '*';
    }
    result += '\n';
}
console.log(result);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);