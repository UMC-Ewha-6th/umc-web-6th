const toDoForm = document.querySelector(".input-form");
const toDoInput = document.querySelector(".input-form input");
const toDoList = document.querySelector(".todo-list");
const completeList = document.querySelector(".complete-list");

const TODOS_KEY = "todos";
const COMPLETE_KEY = "completeToDos";

let toDos = [];
let completeToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //텍스트를 문자열로 변환
  localStorage.setItem(COMPLETE_KEY, JSON.stringify(completeToDos));
}

function completeToDo(event) {
  const li = event.target.parentElement; // '완료' 버튼이 속한 li 요소를 찾음
  li.remove(); // 'todo' 목록에서 해당 항목을 제거

  // 'complete' 목록에 새로운 li 요소를 생성하여 추가
  const completeLi = document.createElement("li");
  completeLi.id = li.id;
  completeLi.innerText = li.querySelector("span").innerText; // 'todo' 항목의 텍스트를 그대로 복사하여 'complete' 목록에 추가
  const button = document.createElement("button");
  button.innerText = "삭제";
  button.addEventListener("click", deleteToDo);
  completeLi.appendChild(button); // 삭제 버튼 추가
  completeList.appendChild(completeLi);

  // 해당 'todo' 항목을 배열에서 제거
  const removedToDo = toDos.find((todo) => todo.id === parseInt(li.id));
  completeToDos.push(removedToDo);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function deleteToDo(event) {
  const li = event.target.parentElement; //target: button, button의 부모: li
  li.remove();
  completeToDos = completeToDos.filter(
    (completeToDos) => completeToDos.id !== parseInt(li.id)
  );
  saveToDos();
}

function handleButtonClick(event) {
  const li = event.target.parentElement;
  if (li.parentElement.classList.contains("todo-list")) {
    completeToDo(event);
  } else if (li.parentElement.classList.contains("complete-list")) {
    deleteToDo(event);
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "완료";
  button.addEventListener("click", handleButtonClick);
  li.appendChild(span); //span을 li 내부에 집어넣음
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //push로 배열에 item을 추가
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //문자열을 객체로 변환
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //forEach(): 배열의 각 item에 대해 fuction을 실행하게 해줌 (paintToDo를 parsedToDos 배열의 item(객체)마다 실행)
}
