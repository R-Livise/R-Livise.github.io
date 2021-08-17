const buttons = [];
buttons.push(document.querySelector('#nav-info'));
buttons.push(document.querySelector('#nav-work'));
buttons.push(document.querySelector('#nav-contact'));

const templates = [];

templates.push(document.querySelector('#info'));
templates.push(document.querySelector('#work'));
templates.push(document.querySelector('#contact'));

document
  .querySelector('navbar-option')
  .addEventListener('click', redirigir);
document
  .querySelector('navbar-option')
  .addEventListener('keyup', redirigirFocus);

function redirigir(ev) {
  if (ev.target.nodeName !== 'LI') {
    return false;
  }
  const headerNav = document.querySelector(
    '#' + ev.target.id.split('-')[1]
  );
  console.log(headerNav);
  //   const element = document.querySelector('#header');
  //   const elementStyle = window.getComputedStyle(element);
  //   const elementPosition = elementStyle
  //     .getPropertyValue('height')
  //     .split('p')[0];

  if (headerNav != null) {
    document.scrollingElement.scrollTop = headerNav.offsetTop - 100;
  }
}

function redirigirFocus(ev) {
  if (ev.key == 'Enter') {
    redirigir(ev);
  }
}
