/* eslint-disable no-param-reassign */
import { KEYS } from '../../constants/index';
import createElement from '../../utils';

class KeyboardKeys {
  constructor(lang) {
    this.lang = lang;
  }

  keyGeneration(data, parent) {
    this.keyboardKey = createElement('div', data.className, parent, data[this.lang],
      ['code', data.code],
      ['ru', data.ru],
      ['eng', data.eng],
      ['shiftRu', data.ruShift],
      ['shiftEng', data.engShift]);
  }

  addKeybordButtons(parentElement) {
    for (let row = 0; row < KEYS.length; row += 1) {
      const keyboardRow = createElement('div', 'keyboard__row', parentElement);
      for (let button = 0; button < KEYS[row].length; button += 1) {
        this.keyGeneration(KEYS[row][button], keyboardRow);
      }
    }
  }
}

export default KeyboardKeys;
