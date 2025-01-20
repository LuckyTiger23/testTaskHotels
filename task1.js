function getComputerString(num) {
    const Number = num  % 100; // Берём абсолютное значение числа и смотрим последние две цифры
    let NameList = ["компьютер", "компьютера", "компьютеров"];
    let a;
    // Определяем склонение по количеству
    if (Number >= 11 && Number <= 19) {
        // Если число от 11 до 19, то использем "компьютеров"
        NameList[2];
    } else {
        // Иначе проверяем последние цифры числа
        switch (Number % 10) {
            case 1:
                a = NameList[0]; // 1, 21, 31 и т.д.
                break;
            case 2:
            case 3:
            case 4:
                a = NameList[1];  // 2, 3, 4, 22, 23, 24 и т.д.
                break;
            default:
                a = NameList[2]; // Все остальные (0, 5, 6, 7, 8, 9, 11-19)
                break;
        }
    }

    // Формируем и возвращаем результат
    return `${num} ${a}`;
    
}
console.log(getComputerString(123));


// Примеры использования:
// console.log(getComputerString(25));   // "25 компьютеров"
// console.log(getComputerString(41));   // "41 компьютер"
// console.log(getComputerString(1048)); // "1048 компьютеров"
// console.log(getComputerString(-1));   // "-1 компьютер"
// console.log(getComputerString(102));  // "102 компьютера"
