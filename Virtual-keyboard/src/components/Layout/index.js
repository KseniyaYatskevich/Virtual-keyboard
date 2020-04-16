import KeyboardKeys from '../Keyboard/index';
import createElement from '../../utils';

class LayoutApplication {
  constructor(lang) {
    this.lang = lang;
    this.keyboardKeys = new KeyboardKeys(this.lang);
  }

  createLayout() {
    this.htmlFile = document.querySelector('html');
    this.htmlBody = document.querySelector('body');
    this.wrapper = createElement('div', 'wrapper', this.htmlBody);
    this.textarea = createElement('textarea', 'textarea', this.wrapper);
    this.keyboard = createElement('div', 'keyboard', this.wrapper);
    this.note = createElement('div', 'note', this.wrapper);
    this.note.innerHTML = `<p class="note_text">Клавиатура создавалась для операционной системы Windows.</p>
                          <p class="note__text">Смена языка <span>Ctrl + Alt</span>.</p>`;
    this.keyboardKeys.addKeybordButtons(this.keyboard);
  }
}

export default LayoutApplication;
