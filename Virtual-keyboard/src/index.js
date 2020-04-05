import LayoutApplication from './components/Layout/index';
import KeyboardEventHandler from './components/KeyboardEventHandlers/index';

class Application {
  constructor() {
    this.lang = localStorage.getItem('language') || 'ru';
    this.isCapslock = false;
    this.layoutApplication = new LayoutApplication(this.lang);
    this.application = this.layoutApplication.appendComponents();
    this.keyboardEventHandler = new KeyboardEventHandler(this.isCapslock, this.lang);
  }

  addEvents() {
    this.keyboard = document.querySelector('.keyboard');
    this.keyboard.addEventListener('click', (event) => this.keyboardEventHandler.clickVirtualKeyHandler(event));
    window.addEventListener('keydown', (event) => this.keyboardEventHandler.keyDownHandler(event));
    window.addEventListener('keyup', (event) => this.keyboardEventHandler.keyUpHandler(event));
  }
}

const App = new Application();
App.addEvents();
