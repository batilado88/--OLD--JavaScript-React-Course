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
        console.log(i);
        if (i === 13) {
            break;
        }
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

        if (i % 2 !==0) {
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