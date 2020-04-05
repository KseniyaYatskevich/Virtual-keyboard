import LayoutApplication from './components/Layout/index';
import KeyboardEventHandler from './components/KeyboardEventHandlers/index';

class Application {
  constructor() {
    this.lang = localStorage.getItem('language') || 'ru';
    this.isCapslock = false;
    this.layoutApplication = new LayoutApplication(this.lang);
    this.application = this.layoutApplication.appendComponents();
    this.keyboardEventHandler = new KeyboardEventHandler(this.isCapslock);
  }
  
  addEvents() {
    
    this.keyboard = document.querySelector('.keyboard');
    this.keyboard.addEventListener('click', (event) => this.keyboardEventHandler.clickVirtualKeyHandler(event));    
  }

  func() {
    this.textarea = document.querySelector
  }

  
}


const App = new Application();
App.addEvents();

