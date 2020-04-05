import KeyboardKeys from '../Keyboard/index';

class LayoutApplication {
  constructor(lang) {
    this.lang = lang;
    this.keyboardKeys = new KeyboardKeys(this.lang);
  }

  appendComponents() {
    this.htmlFile = document.querySelector('html');
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'wrapper';
    this.textarea = document.createElement('textarea');
    this.textarea.className = 'textarea';
    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    this.keyboardKeys.addKeybordButtons(this.keyboard);
    this.wrapper.append(this.textarea);
    this.wrapper.append(this.keyboard);
    this.htmlBody = document.querySelector('body');
    this.htmlBody.append(this.wrapper);
  }
}

export default LayoutApplication;
