const title = document.querySelector("#app__title");
const openmodal = document.querySelector("#openmodal");
const modal = document.querySelector("#modal");
const closemodal = document.querySelector("#closemodal");
const textarea = document.querySelector("textarea");
const addtask = document.querySelector("#addtask");
const tasks = document.querySelector("#tasks");

//Título do app
let dateString = new Date().toLocaleDateString("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
dateString = dateString[0]
  .toUpperCase()
  .concat(dateString.substring(1, dateString.length));
title.innerText = dateString;

//EventListeners
openmodal.addEventListener("click", () => {
  modal.classList.toggle("active");
  textarea.focus();
});
closemodal.addEventListener("click", () => {
  modal.classList.remove("active");
});
addtask.addEventListener("click", () => {
  insertTask();
});
textarea.addEventListener("keydown", ({ key }) => {
  if (key === "Enter") {
    insertTask();
  }
});

//Função de inserir as tarefas
const insertTask = () => {
  if (textarea.value.trim()) {
    const taskBox = document.createElement("div");
    taskBox.innerText =
      textarea.value.length > 80
        ? textarea.value.trim().substring(0, 80) + "..."
        : textarea.value.trim();
    taskBox.classList.add("taskbox");

    //botão de check
    const check = document.createElement("span");
    check.className = "far fa-circle";
    check.addEventListener("click", () => {
      check.classList.toggle("far");
      check.classList.toggle("fa-circle");
      check.classList.toggle("fas");
      check.classList.toggle("fa-check-circle");
      check.parentElement.classList.toggle("done");
    });
    taskBox.appendChild(check);

    tasks.appendChild(taskBox);
    textarea.value = "";
    modal.classList.remove("active");
  }
};
