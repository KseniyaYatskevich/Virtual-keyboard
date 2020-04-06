import { IGNORE_CONTENT, IGNORE_ACTION_BUTTONS, KEYS } from '../../constants/index';

class KeyboardEventHandler {
  constructor(isCapslock, lang) {
    this.textarea = document.querySelector('textarea');
    this.keyboardButtons = document.querySelectorAll('.keyboard__key');
    this.isCapslock = isCapslock;
    this.lang = lang;
  }

  addClassToButtons(code) {
    for (let i = 0; i < this.keyboardButtons.length; i += 1) {
      if (this.keyboardButtons[i].getAttribute('data-code') === code) {
        this.keyboardButtons[i].classList.add('active');
        return;
      }
    }
  }

  changeTextContentButtons(data) {
    for (let i = 0; i < this.keyboardButtons.length; i += 1) {
      this.keyboardButtons[i].textContent = this.keyboardButtons[i].getAttribute(data);
    }
  }

  toggleClassToButtons(code) {
    for (let i = 0; i < this.keyboardButtons.length; i += 1) {
      if (this.keyboardButtons[i].getAttribute('data-code') === code) {
        this.keyboardButtons[i].classList.toggle('active');
        return;
      }
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

  handleBackspaceAction(start, end) {
    if (this.textarea.value.length !== 0) {
      this.textarea.setRangeText('', start - 1, end, 'end');
    }
    this.textarea.focus();
  }

  handleDeleteAction(start, end) {
    if (this.textarea.value.length !== 0) {
      this.textarea.setRangeText('', start, end + 1, 'end');
    }
    this.textarea.focus();
  }

  handleCapsLockAction(target, start, end) {
    const valueBeforeCursore = this.textarea.value.slice(0, start);
    const vatueAfterCursore = this.textarea.value.slice(end);
    if (this.isCapslock === true) {
      this.textarea.value = valueBeforeCursore + target.toUpperCase() + vatueAfterCursore;
      this.textarea.focus();
      this.textarea.selectionEnd = start + 1;
    } else {
      this.textarea.value = valueBeforeCursore + target + vatueAfterCursore;
      this.textarea.focus();
      this.textarea.selectionEnd = start + 1;
    }
  }

  handleShiftAction() {
    const dataShift = `data-shift-${this.lang}`;
    this.changeTextContentButtons(dataShift);
  }

  handleSwitchLanguage() {
    this.lang = this.lang === 'ru' ? 'eng' : 'ru';
    const dataLang = `data-${this.lang}`;
    this.changeTextContentButtons(dataLang);
    localStorage.setItem('language', this.lang);
  }

  clickVirtualKeyHandler(e) {
    if (e.target.classList.contains('keyboard__key')) {
      const startPosition = this.textarea.selectionStart;
      const endPosition = this.textarea.selectionEnd;
      const { textContent } = e.target;
      if (IGNORE_ACTION_BUTTONS.includes(textContent)) {
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
          this.handleBackspaceAction(startPosition, endPosition);
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
          this.handleDeleteAction(startPosition, endPosition);
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
    if (IGNORE_CONTENT.includes(e.code)) {
      this.addClassToButtons(e.code);
    }
    switch (e.code) {
      case 'ControlRight':
      case 'ControlLeft':
        this.addClassToButtons(e.code);
        break;
      case 'AltLeft':
      case 'AltRight':
        if (e.ctrlKey === true) {
          this.addClassToButtons(e.code);
          this.handleSwitchLanguage();
        }
        break;
      case 'ArrowLeft':
        this.addClassToButtons(e.code);
        this.textarea.focus();
        this.textarea.selectionEnd = startPosition - 1;
        break;
      case 'ArrowRight':
        this.addClassToButtons(e.code);
        this.textarea.focus();
        this.textarea.selectionStart = endPosition + 1;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.addClassToButtons(e.code);
        this.handleShiftAction();
        break;
      case 'CapsLock':
        this.isCapslock = !this.isCapslock;
        this.toggleClassToButtons(e.code);
        break;
      case 'Backspace':
        this.addClassToButtons(e.code);
        this.handleBackspaceAction(startPosition, endPosition);
        break;
      case 'Delete':
        this.addClassToButtons(e.code);
        this.handleDeleteAction(startPosition, endPosition);
        break;
      case 'Tab':
        this.addClassToButtons(e.code);
        this.handleTabAction();
        break;
      case 'Enter':
        this.addClassToButtons(e.code);
        this.handleEnterAction(startPosition, endPosition);
        break;
      default:
        for (let row = 0; row < KEYS.length; row += 1) {
          for (let button = 0; button < KEYS[row].length; button += 1) {
            const keyContent = KEYS[row][button];
            if (e.code === keyContent.code) {
              if (e.shiftKey === true) {
                this.addClassToButtons(e.code);
                const langShift = `${this.lang}Shift`;
                const valueBeforeCursore = this.textarea.value.slice(0, startPosition);
                const valueAfterCursore = this.textarea.value.slice(endPosition);
                // eslint-disable-next-line max-len
                this.textarea.value = valueBeforeCursore + keyContent[langShift] + valueAfterCursore;
                this.textarea.focus();
                this.textarea.selectionEnd = startPosition + 1;
                return;
              }
              this.addClassToButtons(e.code);
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
      this.toggleClassToButtons(e.code);
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      const dataLang = `data-${this.lang}`;
      this.changeTextContentButtons(dataLang);
    }
  }
}

export default KeyboardEventHandler;
