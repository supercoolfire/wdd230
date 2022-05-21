const list = document.querySelector('#unorderedlist');
const input = document.querySelector('#inputItem');
const button = document.querySelector('#addBtn');

button.addEventListener('click', () => {
  const myItem = input.value;
  if (myItem !== "") {
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.innerHTML = "\u274C";

    list.appendChild(listItem);
    console.log(listItem)

    listBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });
  }
  input.focus();
});