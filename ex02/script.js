// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  let target = document.querySelector("#text-content")
  console.log(target)
  target.innerText = "text"
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  let target = document.querySelector("#task2")
  target.style.backgroundColor = "#222";
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
  let parent = document.querySelector("#list")
  let child = document.createElement("li")
  child.textContent = "Finish Task 3"
  parent.appendChild(child)

}
