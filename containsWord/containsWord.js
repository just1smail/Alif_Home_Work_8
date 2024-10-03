function containsWord(str) {
    return /\bcat\b|\bdog\b|\bbird\b/.test(str)
}

const strings = [
  "I have a cat.", // содержит "cat"
  "The dog is barking.", // содержит "dog"
  "A bird is flying.", // содержит "bird"
  "There is a fish.", // не содержит ни одно из указанных слов
  "The catalog is huge.", // не содержит полное слово "cat", только часть
  "", // пустая строка
];

strings.forEach((s) => {
  console.log(`Строка: "${s}", Содержит одно из слов: ${containsWord(s)}`);
});
