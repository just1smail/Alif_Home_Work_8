function startsWithCapitalLetter(str) {
    return /^[A-Z]/.test(str);
}

const strings = [
    'Hello world',   // начинается с заглавной буквы
    'hello world',   // не начинается с заглавной буквы
    'JavaScript is fun', // начинается с заглавной буквы
    '123abc',        // не начинается с заглавной буквы
    'Good Morning!',  // начинается с заглавной буквы
    '',              // пустая строка
];

strings.forEach(s => {
    console.log(`Строка: "${s}", Начинается с заглавной буквы: ${startsWithCapitalLetter(s)}`);
});