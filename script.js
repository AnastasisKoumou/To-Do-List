const user_box = document.getElementById("user-input");
const user_list = document.getElementById("list-container");

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function addTask() {
    //take task of user_box.
    const task = user_box.value.trim();
    if(!task) {
        alert("Please write down a task.");
        return;
    }

    //create and list item when click addButton.
    const li = document.createElement("li");
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="taskBtn edit-btn">Edit</span>
        <span class="taskBtn delete-btn">Delete</span>
    `;
    //add the item in the user list area.
    user_list.appendChild(li);
    updateCounters();
    //clear user box when an item got added.
    user_box.value = "";

    const checkbox = li.querySelector("input");
    const spanTask = li.querySelector("span");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener("click", function() {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
    })

    editBtn.addEventListener("click", function() {
        const update = prompt("Edit task: ", spanTask.textContent);
        if(update != null) {
            spanTask.textContent = update;
            li.classList.remove("completed");

            checkbox.checked = false;
            updateCounters();
        }
    })

    deleteBtn.addEventListener("click", function() {
        li.remove();
        updateCounters();
    })
}

function updateCounters() {
    const updateCompleted = document.querySelectorAll(".completed").length;
    const updateUncompleted = document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = updateCompleted;
    uncompletedCounter.textContent = updateUncompleted;
}