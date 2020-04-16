import * as constants from '../../constants/index';

class KeyboardEventHandler {
  constructor(isCapslock, lang) {
    this.textarea = document.querySelector('textarea');
    this.keyboardButtons = document.querySelectorAll('.keyboard__key');
    this.isCapslock = isCapslock;
    this.lang = lang;
  }

  addClassToButtons(code, handler, className) {
    for (let i = 0; i < this.keyboardButtons.length; i += 1) {
      if (this.keyboardButtons[i].getAttribute('data-code') === code) {
        this.keyboardButtons[i].classList[handler](className);
        return;
      }
    }
  }

  changeTextContentButtons(data) {
    for (let i = 0; i < this.keyboardButtons.length; i += 1) {
      this.keyboardButtons[i].textContent = this.keyboardButtons[i].getAttribute(data);
    }
  }

  handleEnterAction(start, end) {
    const valueBeforeCursore = this.textarea.value.slice(0, start);
    const vatueAfterCursore = this.textarea.value.slice(end);
    this.textarea.value = `${valueBeforeCursore}\n${vatueAfterCursore}`;
    this.textarea.focus();
    this.textarea.selectionEnd = end + 1;
  }

  handleTabAction() {
    this.textarea.value += '\t';
  }

  handleDeleteLetter(start, end) {
    if (this.textarea.value.length !== 0) {
      this.textarea.setRangeText('', start, end, 'end');
    }
    this.textarea.focus();
  }

  // handleDeleteAction(start, end) {
  //   if (this.textarea.value.length !== 0) {
  //     this.textarea.setRangeText('', start, end + 1, 'end');
  //   }
  //   this.textarea.focus();
  // }

  handleCapsLockAction(target, start, end) {
    const valueBeforeCursore = this.textarea.value.slice(0, start);
    const vatueAfterCursore = this.textarea.value.slice(end);
    const capsText = valueBeforeCursore + target.toUpperCase() + vatueAfterCursore;
    const smallText = valueBeforeCursore + target + vatueAfterCursore;
    this.textarea.value = (this.isCapslock) ? (capsText) : (smallText);
    this.textarea.focus();
    this.textarea.selectionEnd = start + 1;
  }

  handleShiftAction() {
    const dataShift = `data-shift-${this.lang}`;
    this.changeTextContentButtons(dataShift);
  }

  handleSwitchLanguage() {
    this.lang = (this.lang === 'ru') ? 'eng' : 'ru';
    const dataLang = `data-${this.lang}`;
    this.changeTextContentButtons(dataLang);
    localStorage.setItem('language', this.lang);
  }

  clickVirtualKeyHandler(e) {
    if (e.target.classList.contains('keyboard__key')) {
      const startPosition = this.textarea.selectionStart;
      const endPosition = this.textarea.selectionEnd;
      const { textContent } = e.target;
      if (constants.IGNORE_ACTION_BUTTONS.includes(textContent)) {
        this.textarea.focus();
        return;
      }
      switch (textContent) {
        case 'Enter':
          this.handleEnterAction(startPosition, endPosition);
          break;
        case 'Tab':
          this.handleTabAction();
          break;
        case 'Backspace':
          this.handleDeleteLetter(startPosition - 1, endPosition);
          break;
        case '◄':
          this.textarea.focus();
          this.textarea.selectionEnd = endPosition - 1;
          break;
        case '►':
          this.textarea.focus();
          this.textarea.selectionStart = endPosition + 1;
          break;
        case 'Del':
          this.handleDeleteLetter(startPosition, endPosition + 1);
          break;
        case 'CapsLock':
          this.isCapslock = !this.isCapslock;
          e.target.classList.toggle('active');
          break;
        default:
          this.handleCapsLockAction(e.target.textContent, startPosition, endPosition);
      }
    }
  }

  keyDownHandler(e) {
    e.preventDefault();
    const startPosition = this.textarea.selectionStart;
    const endPosition = this.textarea.selectionEnd;
    if (constants.IGNORE_CONTENT.includes(e.code)) {
      this.addClassToButtons(e.code, 'add', 'active');
    }
    switch (e.code) {
      case 'ControlRight':
      case 'ControlLeft':
        this.addClassToButtons(e.code, 'add', 'active');
        break;
      case 'AltLeft':
      case 'AltRight':
        if (e.ctrlKey === true) {
          this.addClassToButtons(e.code, 'add', 'active');
          this.handleSwitchLanguage();
        }
        break;
      case 'ArrowLeft':
        this.addClassToButtons(e.code, 'add', 'active');
        this.textarea.focus();
        this.textarea.selectionEnd = startPosition - 1;
        break;
      case 'ArrowRight':
        this.addClassToButtons(e.code, 'add', 'active');
        this.textarea.focus();
        this.textarea.selectionStart = endPosition + 1;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.addClassToButtons(e.code, 'add', 'active');
        this.handleShiftAction();
        break;
      case 'CapsLock':
        this.isCapslock = !this.isCapslock;
        this.addClassToButtons(e.code, 'toggle', 'active');
        break;
      case 'Backspace':
        this.addClassToButtons(e.code, 'add', 'active');
        this.handleDeleteLetter(startPosition - 1, endPosition);
        break;
      case 'Delete':
        this.addClassToButtons(e.code, 'add', 'active');
        this.handleDeleteLetter(startPosition, endPosition + 1);
        break;
      case 'Tab':
        this.addClassToButtons(e.code, 'add', 'active');
        this.handleTabAction();
        break;
      case 'Enter':
        this.addClassToButtons(e.code, 'add', 'active');
        this.handleEnterAction(startPosition, endPosition);
        break;
      default:
        for (let row = 0; row < constants.KEYS.length; row += 1) {
          for (let button = 0; button < constants.KEYS[row].length; button += 1) {
            const keyContent = constants.KEYS[row][button];
            if (e.code === keyContent.code) {
              if (e.shiftKey === true) {
                this.addClassToButtons(e.code, 'add', 'active');
                const langShift = `${this.lang}Shift`;
                this.text = this.textarea.value;
                const valueBeforeCursore = this.text.slice(0, startPosition);
                const valueAfterCursore = this.text.slice(endPosition);
                this.text = valueBeforeCursore + keyContent[langShift] + valueAfterCursore;
                this.textarea.focus();
                this.textarea.selectionEnd = startPosition + 1;
              }
              this.addClassToButtons(e.code, 'add', 'active');
              this.handleCapsLockAction(keyContent[this.lang], startPosition, endPosition);
              return;
            }
          }
        }
    }
  }

  keyUpHandler(e) {
    e.preventDefault();
    if (e.code !== 'CapsLock') {
      this.addClassToButtons(e.code, 'toggle', 'active');
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      const dataLang = `data-${this.lang}`;
      this.changeTextContentButtons(dataLang);
    }
  }
}

export default KeyboardEventHandler;
