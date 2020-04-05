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

  handleEnterAction() {
    this.textarea.value += '\n';
    this.textarea.focus();
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
      if (e.target.textContent === 'Enter') {
        this.handleEnterAction();
        return;
      }
      if (e.target.textContent === 'Tab') {
        this.handleTabAction();
        return;
      }
      const { textContent } = e.target;
      if (IGNORE_ACTION_BUTTONS.includes(textContent)) {
        return;
      }
      if (e.target.textContent === 'Backspace') {
        this.handleBackspaceAction(startPosition, endPosition);
        return;
      }
      if (e.target.textContent === 'Del') {
        this.handleDeleteAction(startPosition, endPosition);
        return;
      }
      if (e.target.textContent === 'CapsLock') {
        this.isCapslock = !this.isCapslock;
        e.target.classList.toggle('active');
        return;
      }
      this.handleCapsLockAction(e.target.textContent, startPosition, endPosition);
    }
  }

  keyDownHandler(e) {
    e.preventDefault();
    const startPosition = this.textarea.selectionStart;
    const endPosition = this.textarea.selectionEnd;
    if (e.code === 'ArrowLeft') {
      this.addClassToButtons(e.code);
      this.textarea.focus();
      this.textarea.selectionEnd = startPosition - 1;
    }
    if (e.code === 'ArrowRight') {
      this.addClassToButtons(e.code);
      this.textarea.focus();
      this.textarea.selectionStart = endPosition + 1;
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      this.addClassToButtons(e.code);
      this.handleShiftAction();
    }
    if (e.code === 'CapsLock') {
      this.isCapslock = !this.isCapslock;
      this.toggleClassToButtons(e.code);
      return;
    }
    if (e.code === 'Backspace') {
      this.addClassToButtons(e.code);
      this.handleBackspaceAction(startPosition, endPosition);
      return;
    }
    if (e.code === 'Delete') {
      this.handleDeleteAction(startPosition, endPosition);
      return;
    }
    if (e.code === 'Tab') {
      this.addClassToButtons(e.code);
      this.handleTabAction();
      return;
    }
    if (e.code === 'Enter') {
      this.addClassToButtons(e.code);
      this.handleEnterAction();
      return;
    }
    if (e.ctrlKey === true && (e.code === 'AltLeft' || e.code === 'AltRight')) {
      this.addClassToButtons(e.code);
      this.handleSwitchLanguage();
      return;
    }
    if (IGNORE_CONTENT.includes(e.code)) {
      this.addClassToButtons(e.code);
      return;
    }
    for (let row = 0; row < KEYS.length; row += 1) {
      for (let button = 0; button < KEYS[row].length; button += 1) {
        const keyContent = KEYS[row][button];
        if (e.code === keyContent.code) {
          if (e.shiftKey === true) {
            this.addClassToButtons(e.code);
            const langShift = `${this.lang}Shift`;
            const valueBeforeCursore = this.textarea.value.slice(0, startPosition);
            const valueAfterCursore = this.textarea.value.slice(endPosition);
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
