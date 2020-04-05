/* eslint-disable no-param-reassign */
import { KEYS } from '../../constants/index';

class KeyboardKeys {
  constructor(lang) {
    this.lang = lang;
  }

  keyGeneration(key, data) {
    key.classList = data.className;
    key.setAttribute('data-code', data.code);
    key.setAttribute('data-ru', data.ru);
    key.setAttribute('data-eng', data.eng);
    key.setAttribute('data-shift-ru', data.ruShift);
    key.setAttribute('data-shift-eng', data.engShift);
    key.textContent = data[this.lang];
  }

  addKeybordButtons(parentElement) {
    for (let row = 0; row < KEYS.length; row += 1) {
      const keyboardRow = document.createElement('div');
      keyboardRow.className = 'keyboard__row';
      parentElement.append(keyboardRow);
      for (let button = 0; button < KEYS[row].length; button += 1) {
        const keyboardKey = document.createElement('div');
        this.keyGeneration(keyboardKey, KEYS[row][button]);
        keyboardRow.appendChild(keyboardKey);
      }
    }
  }
}

export default KeyboardKeys;
