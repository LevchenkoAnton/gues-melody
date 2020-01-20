const main = document.querySelector('.app');

let lastView,
    newView;

export const getValueFromRange = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

export const createNode = (template) => {
  const node = document.createElement('div');
  node.innerHTML = template.trim();

  return node.firstChild;
};

export const changeView = (newView) => {
  lastView = document.querySelector('.main');

  main.replaceChild(newView, lastView);
};
