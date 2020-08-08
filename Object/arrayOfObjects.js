const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Metting wtih boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];
console.table(todos);

// JS物件轉成JSON格式 --> JSONData = JSON.stringify(todos)
const todoJSON = JSON.stringify(todos);
console.log("JS物件轉成JSON格式");
console.log(todoJSON);

// For迴圈
for (let index = 0; index < todos.length; index++) {
  console.log(todos[index].text);
}

// For-of迴圈 -> 直接抓項目
for (let todo of todos) {
  console.log(`For-of迴圈 :${todo.text}`);
}

// Foreach
todos.forEach(function (element) {
  console.log(element.text);
});

// Map ->經過function處理後，生成一個新的陣列
const todosText = todos.map(function (element) {
  return element.text;
});
console.log(todosText);

// Filter -> 篩選
const todosCompleted = todos.filter(function (element) {
  return element.isCompleted === true;
});
console.table(todosCompleted);

// Filter & map搭配使用
const todosCompletedThing = todos
  .filter(function (element) {
    return element.isCompleted === true;
  })
  .map(function (element) {
    return element.text;
  });
console.log("Filter & map搭配使用");
console.table(todosCompletedThing);
