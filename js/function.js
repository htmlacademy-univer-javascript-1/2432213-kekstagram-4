const checkStringLength = function (str, maxLength) {
  return str.length <= maxLength;
};
checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 10);

const isPalindrome = function (str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  return normalizedStr === reversedStr;
};
isPalindrome('А роза упала на лапу Азора');
isPalindrome('проверка');
