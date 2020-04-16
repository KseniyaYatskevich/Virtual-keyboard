/*
  * @param {String} el
  * @param {String} classNames
  * @param {String} textContent
  * @param {HTMLelement} parent
  * @param {...array} dataAttr
*/

export default function createElement(el, classNames, parent, textContent, ...dataAttr) {
  let element = null;
  element = document.createElement(el);
  if (classNames) element.classList.add(...classNames.split(' '));
  if (parent) parent.append(element);
  if (textContent) element.textContent = textContent;
  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '');
      }
      element.dataset[attrName] = attrValue;
    });
  }
  return element;
}
