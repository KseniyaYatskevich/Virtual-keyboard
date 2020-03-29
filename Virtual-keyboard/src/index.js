import { KEYS } from './constants/index';

let lang = localStorage.getItem('language') || 'ru';
let isCapslock = false;

const htmlBody = document.querySelector('body');

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const textarea = document.createElement('textarea');
textarea.className = 'textarea';

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';

wrapper.append(textarea);
wrapper.append(keyboard);

function addKeybordButtons() {
   for (let row = 0; row < KEYS.length; row += 1) {
     const keyboardRow = document.createElement('div');
     keyboardRow.className = 'keyboard__row';
     keyboard.append(keyboardRow);
     for (let button = 0; button < KEYS[row].length; button += 1) {
      const keyboardKey = document.createElement('div');
      keyboardKey.classList = KEYS[row][button].className;
      keyboardKey.setAttribute('data-code', KEYS[row][button].code);
      keyboardKey.setAttribute('data-ru', KEYS[row][button].ru);
      keyboardKey.setAttribute('data-eng', KEYS[row][button].eng);
      keyboardKey.setAttribute('data-shift-ru', KEYS[row][button].ruShift);
      keyboardKey.setAttribute('data-shift-eng', KEYS[row][button].engShift);
      keyboardKey.textContent = KEYS[row][button][lang];
      keyboardRow.appendChild(keyboardKey);
     }
   }
}
 
 addKeybordButtons();

htmlBody.append(wrapper);
