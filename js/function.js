const palindromeCheck = (string) => {
  const cleanString = string.toLowerCase().replace(/ /g, '');
  const reversedString = cleanString.split('').reverse().join('');
  return cleanString === reversedString;
};

const lengthCheck = (string, length) => {
  return string.length >= length;
};

