let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.key');
let clearButton = document.querySelector('.clear');

for (let button of buttons) {
  button.onclick = function() {
    display.textContent += button.textContent;
  }
}

clearButton.onclick = function() {
  display.textContent = '';
}
/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/
