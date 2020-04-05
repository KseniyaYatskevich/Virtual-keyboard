import { IGNORE_ACTION_BUTTONS } from '../../constants/index';

class KeyboardEventHandler {
  constructor(isCapslock) {
    this.textarea = document.querySelector('textarea');
    this.keyboardButtons = document.querySelectorAll('.keyboard__key');
    this.isCapslock = isCapslock;
  }

  addClassToButtons(code) {
    for (let i = 0; i < this.keyboardButtons.length; i += 1) {
      if (this.keyboardButtons[i].getAttribute('data-code') === code) {
        this.keyboardButtons[i].classList.add('active');
        return;
      }
    }
  }

  setCursorPosition() {
    const { value } = this.textarea;
    this.textarea.value = '';
    this.textarea.selectionStart = this.textarea.focus();
    this.textarea.value = value;
    console.log(this.textarea.selectionStart, 123);
  }

  // getCursorPosition(ctrl) {
  //   var CaretPos = 0;
  //   if ( document.selection ) {
  //     ctrl.focus ();
  //     var Sel = document.selection.createRange();
  //     Sel.moveStart ('character', -ctrl.value.length);
  //     CaretPos = Sel.text.length;
  //   } else if ( ctrl.selectionStart || ctrl.selectionStart == '0' ) {
  //     CaretPos = ctrl.selectionStart;
  //   }
  //   return CaretPos;
  // }

  handleEnterAction() {
    this.textarea.value += '\n';
    this.setCursorPosition();
  }

  handleTabAction() {
    this.textarea.value += '\t';
  }

  handleBackspaceAction() {
    if (this.textarea.value.length !== 0) {
      const startPos = this.textarea.selectionStart;
      const endPos = this.textarea.selectionEnd;
      this.textarea.setRangeText('', startPos - 1, endPos, 'end');
    }
    this.setCursorPosition();
  }

  handleDeleteAction() {
    if (this.textarea.value.length !== 0) {
      const startPos = this.textarea.selectionStart;
      const endPos = this.textarea.selectionEnd;
      this.textarea.setRangeText('', startPos, endPos + 1, 'end');
    }
    this.setCursorPosition();
  }

  handleCapsLockAction(target) {
    if (this.isCapslock === true) {
      this.textarea.selectionStart = this.textarea.focus();
      this.textarea.value += target.toUpperCase();
    } else {
      this.textarea.value += target;
    }
    this.setCursorPosition();
  }

  clickVirtualKeyHandler(e) {
    if (e.target.classList.contains('keyboard__key')) {
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
        this.handleBackspaceAction();
        return;
      }
      if (e.target.textContent === 'Del') {
        this.handleDeleteAction(this.textarea.selectionStart - 1);
        return;
      }
      if (e.target.textContent === 'CapsLock') {
        this.isCapslock = !this.isCapslock;
        e.target.classList.toggle('active');
        return;
      }
      this.handleCapsLockAction(e.target.textContent);
    }
  }
}

export default KeyboardEventHandler;
