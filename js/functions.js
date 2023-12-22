// Объявляем функцию для проверки длины строки
// eslint-disable-next-line no-unused-vars
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
// eslint-disable-next-line no-unused-vars
function isPalindrome(str) {
  // Нормализуем строку: убираем пробелы и приводим к нижнему регистру
  const normalizedStr = str.replace(/\s/g, '').toLowerCase();
  // Создаем пустую строку для хранения перевернутой версии
  let reversedStr = '';
  // Итерируемся по строке в обратном порядке и записываем символы в reversedStr
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  // Сравниваем нормализованную строку с перевернутой версией
  return normalizedStr === reversedStr;
}
