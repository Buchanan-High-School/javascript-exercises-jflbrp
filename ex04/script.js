function task1() {
  let myArray = ["1","2","3","4","5"];
  let target = document.querySelector("#task-1-target")
  // This will run when you click the button.
  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  // Write your code in here
  let array = document.querySelectorAll("#color-list > li")
  console.log(array)
}

function task2B() {
  // Writ your code in here
  let target = document.querySelector("#target-div")
  let names = document.querySelectorAll("#name-list > li")
  console.log(names)
  names.forEach(name=> {
    let newEl = document.createElement("li")
    newEl.innerText = "Hi " + name.innerText
    target.appendChild(newEl)
  })

  
}

function task3() {
  // Write your code in here
  let list = document.querySelectorAll("#boxflex > .item > p")
  console.log(list)
  list.forEach(object => {
    object.style.backgroundColor = "#" + object.innerText
  })
}
// console.log(item)
