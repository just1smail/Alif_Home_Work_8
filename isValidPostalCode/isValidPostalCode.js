function isValidPostalCode(postalCode) {
  return /^\d{5}$/.test(postalCode);
}

const postalCodes = [
  "12345", // корректный формат
  "12345-6789", // корректный формат
  "1234", // некорректный формат
  "123456", // некорректный формат
  "12345-678", // некорректный формат
  "ABCDE", // некорректный формат
];

postalCodes.forEach(code => {
    console.log(`Почтовый индекс: "${code}", Соответствует формату: ${isValidPostalCode(code)}`);
});