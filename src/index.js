/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */


export const replaceZAndVFromString = (string) => {

    let result = ''; //Объявляем пустую строку
    for(let i=0; i<string.length; i++){
if(string[i].toLowerCase === 'z'||string[i].toLowerCase[i]==='v'){
    result += '*';
    continue;
} result += string[i]; //Если z и v не находится, то просто возвращаем текущую строку.

    }
return result;
};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
const pos = string.indexOf(word);// Мы ищем позицию нашего слова

    if (pos === -1){// Если мы не нашли позицию нашего слова
return string;// мы возвращаем это слово
    } else{
      return`${string.slice(0, pos)}${newWord}${string.slice(
          pos + word.length)}` //Мы возвращаем строку и вырезаем это слово. Мы получаем позицию, вставляем новое слово и вставляем остаток старого слова
    }
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {
return string.slice(0, string.length);
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {
let count = 0;
symbol = symbol.toLowerCase();
for(let i= 0; i< string.length; i++){
    if(string[i].toLowerCase() === symbol){
        count++;
    }
    }
return count;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
  symbol === symbol.toLowerCase();

  let amount = string.toLowerCase().indexOf(symbol);
  let count = 0;
  while(true) {
      if(amount !== -1){
          amount= string.toLowerCase().indexOf(symbol, amount+1);
          count++;
      } else {
          break;
      }
  }
  return count;
};
