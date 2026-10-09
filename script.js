// 1. Member Registration
let members = 0;

document.getElementById("memberForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("memberName").value.trim();

    if (name === "") return;

    const item = document.createElement("li");
    item.textContent = name;

    document.getElementById("memberList").appendChild(item);

    members++;
    document.getElementById("memberCount").textContent = members;

    this.reset();
});


// 2. Task Scheduling
let tasks = 0;

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("taskName").value.trim();
    const date = document.getElementById("taskDate").value;

    if (name === "" || date === "") return;

    const item = document.createElement("li");
    item.textContent = name + " — " + date;

    document.getElementById("taskList").appendChild(item);

    tasks++;
    document.getElementById("taskCount").textContent = tasks;

    this.reset();
});


// 3. Watering and Maintenance Logs
document.getElementById("maintenanceForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const activity = document.getElementById("maintenanceTask").value.trim();

    if (activity === "") return;

    const item = document.createElement("li");
    item.textContent = activity;

    document.getElementById("maintenanceList").appendChild(item);

    this.reset();
});


// 4. Harvest Records
document.getElementById("harvestForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const harvest = document.getElementById("harvestName").value.trim();

    if (harvest === "") return;

    const item = document.createElement("li");
    item.textContent = harvest;

    document.getElementById("harvestList").appendChild(item);

    this.reset();
});


// 5. Volunteer Hours
let totalHours = 0;

document.getElementById("volunteerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("volunteerName").value.trim();
    const hours = Number(document.getElementById("volunteerHours").value);

    if (name === "" || !Number.isFinite(hours) || hours <= 0) return;

    const item = document.createElement("li");
    item.textContent = name + " — " + hours + " hours";

    document.getElementById("volunteerList").appendChild(item);

    totalHours += hours;
    document.getElementById("volunteerCount").textContent = totalHours;

    this.reset();
});
