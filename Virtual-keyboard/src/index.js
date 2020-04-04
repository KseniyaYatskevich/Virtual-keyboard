import LayoutApplication from './components/Layout/index';

class Application {
  constructor() {
    this.lang = localStorage.getItem('language') || 'ru';
    this.isCapslock = false;
    this.layoutApplication = new LayoutApplication(this.lang);
    this.application = this.layoutApplication.appendComponents();
  }
   
}


const App = new Application();
App.addEvents();
// App.appendComponents();
// App.addKeybordButtons();
// let lang = localStorage.getItem('language') || 'ru';
// let isCapslock = false;

// const htmlFile = document.querySelector('html'); 


// const wrapper = document.createElement('div');
// wrapper.className = 'wrapper';

// const textarea = document.createElement('textarea');
// textarea.className = 'textarea';

// const keyboard = document.createElement('div');
// keyboard.className = 'keyboard';

// wrapper.append(textarea);
// wrapper.append(keyboard);

// function addKeybordButtons() {
//    for (let row = 0; row < KEYS.length; row += 1) {
//      const keyboardRow = document.createElement('div');
//      keyboardRow.className = 'keyboard__row';
//      keyboard.append(keyboardRow);
//      for (let button = 0; button < KEYS[row].length; button += 1) {
//       const keyboardKey = document.createElement('div');
//       keyboardKey.classList = KEYS[row][button].className;
//       keyGeneration(keyboardKey, KEYS[row][button])
      
//       keyboardRow.appendChild(keyboardKey);
//      }
//    }
// }

// function keyGeneration(button, data) {
      
//       button.classList = data.className;
//       button.setAttribute('data-code', data.code);
//       button.setAttribute('data-ru', data.ru);
//       button.setAttribute('data-eng', data.eng);
//       button.setAttribute('data-shift-ru', data.ruShift);
//       button.setAttribute('data-shift-eng', data.engShift);
//       button.textContent = data[lang];
// }
//  const keyboardApp = new KeyboardKeys
//  addKeybordButtons();

//  const htmlBody = document.querySelector('body');
// htmlBody.append(wrapper);
// ;

// const keyboardButtons = keyboard.querySelectorAll('.keyboard__key');//  array buttons

// function changeTextContentButtons(data) {
//   keyboardButtons.forEach(key => key.textContent = key.getAttribute(data));
//   // for (let i = 0; i < keyboardButtons.length; i += 1) {
//   //   keyboardButtons[i].textContent = keyboardButtons[i].getAttribute(data);
//   // }
// }

// function toggleClassToButtons(code) {
//   keyboardButtons.forEach(key => {
//     if (key.getAttribute('data-code') === code) {
//       key.classList.toggle('active');
//       return;
//     };
//   })

  // for (let i = 0; i < keyboardButtons.length; i += 1) {
  //   if (keyboardButtons[i].getAttribute('data-code') === code) {
  //     keyboardButtons[i].classList.toggle('active');
  //     return;
  //   }
  // }
// }
