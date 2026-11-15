const target = document.querySelector('#target');
const items = ['First item', 'Second item', 'Third item'];
for (const text of items) {
  const item = document.createElement('li');
  item.textContent = text;
  target.appendChild(item);
}
target.children[1].classList.add('my-item');
