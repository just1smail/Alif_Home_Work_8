function containsDigit(str) {
    return /\d/.test(str);
 }

 const strings = [
    'Hello World!',             // не содержит цифр
    'Today is 2024.',           // содержит "2024"
    'My lucky number is 7.',     // содержит "7"
    'No digits here!',           // не содержит цифр
    'Price: $50.',              // содержит "50"
    '',                          // пустая строка
];

strings.forEach(s => {
    console.log(`Строка: "${s}", Содержит цифры: ${containsDigit(s)}`);
});