const person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
}

const teachers = [
    {
        "name": "Mrs. Frost",
        "subject": "Environmental Science",
        "experience": 25
    },
    {
        "name": "Mr. Cribley",
        "subject": "Biology",
        "experience": 15
    },
    {
        "name": "Mrs. Lentz",
        "subject": "Physical Science",
        "experience": 22
    },
    {
        "name": "Mr. Bennett",
        "subject": "Chemistry",
        "experience": 15
    },
]

function task1() {
    // Create your own object assigned to a variable.
    // console.log your object when this function is run.
    let sport = {
        "name" : "soccer",
        "best-team-of-all-time" : "Brazil",
        "tournament" : "World Cup",
        "best-team-right-now" : "Germany"
    }
    console.log(sport)
}

function task2() {
    // Write some HTML to create a card display for a person.
    // When you click the button, the data from the `person`
    // object above should be filled in on the page.
    let template = `The teacher is ${person.name} he teaches${person.subject} and has been teaching for ${person.experience}`
    let target = document.querySelector("#newparagraph > p")
    let el = document.createElement("p")
    el.innerText = template
    target.appendChild(el)
    
   
}

function task3() {
    // 1. Use the array of teachers to start a loop.
    // 2. In the loop, add a "role" property to each object as they go through the loop
    // 3. Use a template string to add a sentence about each person into the #task3 container.
    let target = document.querySelector("#task3")
    console.log(teachers)
    teachers.forEach((teacher) => {
        let newEl = document.createElement("p")
        let template = `The teacher is called ${teacher.name} he/she teaches ${teacher.subject} and has been teaching for ${teacher.experience} years. The teachers role is ${teacher.role}`;
        newEl.innerText = template
        teacher.role = "teacher",
        target.appendChild(newEl)

    })
}