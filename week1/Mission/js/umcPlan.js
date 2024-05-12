const inputText = document.getElementById('text');
const todoList = document.querySelector('.todoList');
const doneList = document.querySelector('.doneList');
const li = document.querySelectorAll('.todolist li');

function enterkey() {
  if (window.event.keyCode == 13) {
    if (inputText.value.trim() != '') {
      let todo = document.createElement('li');
      let partOne = document.createElement('div');
      let checkBox = document.createTextNode('☐');
      partOne.appendChild(checkBox);
      partOne.setAttribute('class', 'checkBox');

      partOne.addEventListener('click', () => {
        let done = document.createElement('li');
        let partOne = document.createElement('div');
        let innerPartOne = document.createElement('div');
        let checkBox = document.createTextNode('☑');
        innerPartOne.appendChild(checkBox);
        let value = todo.innerText;
        let innerPartTwo = document.createElement('div');
        let text = document.createTextNode(value.replace('☐', ''));
        innerPartTwo.appendChild(text);
        partOne.append(innerPartOne, innerPartTwo);
        partOne.setAttribute('class', 'doneCheckBox');
        let partTwo = document.createElement('div');
        let deleteBtn = document.createTextNode('✕');
        partTwo.appendChild(deleteBtn);
        partTwo.setAttribute('class', 'delete');
        partTwo.addEventListener('click', () => {
          done.remove(text);
        });
        done.append(partOne, partTwo);
        doneList.appendChild(done);
        todo.remove(text);
      });

      let partTwo = document.createElement('div');
      let text = document.createTextNode(inputText.value);
      partTwo.appendChild(text);
      todo.append(partOne, partTwo);

      todoList.appendChild(todo);
      inputText.value = '';
    }
  }
}
