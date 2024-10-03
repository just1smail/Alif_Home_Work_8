function checkHelloWorld(str) {
    return /Hello(?=\sWorld!|, World!)/.test(str)
}

const strings = [
  "Hello World!", // соответствует
  "Hello, World!", // соответствует
  "Hello there, World!", // соответствует
  "Hi there, World!", // не соответствует
  "Hello to the World.", // не соответствует
  "World says Hello.", // не соответствует
];

strings.forEach((s) => {
  console.log(`Строка: "${s}", Соответствует условиям: ${checkHelloWorld(s)}`);
});
