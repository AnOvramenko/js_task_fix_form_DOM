'use strict';

const fields = document.querySelectorAll('.field:not(.field--full) > input');
const fieldsFull = document.querySelectorAll('.field--full > input');
const divForms = document.querySelectorAll('.field');

for (const div of divForms) {
  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  div.style.flexDirection = 'column';
  div.style.paddingBlock = '10px';
}

function labelAndPholders(inputs) {
  for (const item of inputs) {
    const el = document.createElement('label');

    el.className = 'label__field';
    el.setAttribute('for', `${item.id}`);
    el.innerHTML = item.name.toUpperCase();
    // el.style.fontSize = '12px';

    item.placeholder = item.name
      .split('')
      .map((ch, i) => (i === 0 ? ch.toUpperCase() : ch))
      .join('');

    item.insertAdjacentElement('beforebegin', el);
  }
}

labelAndPholders(fields);
labelAndPholders(fieldsFull);
