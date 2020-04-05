import { KEYS } from '../../constants/index';

class KeyboardKeys {
  constructor(lang) {
    this.lang = lang;
  };

  keyGeneration(button, data) {  
    button.classList = data.className;
    button.setAttribute('data-code', data.code);
    button.setAttribute('data-ru', data.ru);
    button.setAttribute('data-eng', data.eng);
    button.setAttribute('data-shift-ru', data.ruShift);
    button.setAttribute('data-shift-eng', data.engShift);
    button.textContent = data[this.lang];
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