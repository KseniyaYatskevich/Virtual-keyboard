/*
  * @param {String} el
  * @param {String} classNames
  * @param {HTMLelement} parent
*/

export default function createElement(el, className, parent) {
  let element = null;
  element = document.createElement(el);
  if (className) element.classList.add(className);
  if (parent) parent.append(element);
  return element;
}
