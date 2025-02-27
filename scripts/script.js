document.getElementById("student-checkbox").addEventListener("change", function () {
    let uniIdGroup = document.getElementById("university-id-group");
    uniIdGroup.classList.toggle("hidden", !this.checked);
});
function toggleTheme() {
    const body = document.body;
    const button = document.querySelector(".theme-toggle");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        button.textContent = "🌙 Dark Mode";
    } else {
        localStorage.setItem("theme", "dark");
        button.textContent = "☀️ Light Mode";
    }
}


window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        document.querySelector(".theme-toggle").textContent = "🌙 Dark Mode";
    }
};
document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    setInterval(updateDateTime, 1000); 
    fetchData();
});


function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("datetime").textContent = formattedDate;
}

// Function to simulate fetching data (Replace with API later)
function fetchData() {
    // Simulated API Response
    const data = {
        projects: 5,
        students: 20,
        tasks: 10,
        finished: 2
    };

    updateStats(data);
}


function updateStats(data) {
    document.getElementById("numProjects").textContent = data.projects;
    document.getElementById("numStudents").textContent = data.students;
    document.getElementById("numTasks").textContent = data.tasks;
    document.getElementById("numFinished").textContent = data.finished;

    document.getElementById("barProjects").style.height = data.projects * 10 + "%";
    document.getElementById("barStudents").style.height = data.students * 5 + "%";
    document.getElementById("barTasks").style.height = data.tasks * 10 + "%";
    document.getElementById("barFinished").style.height = data.finished * 10 + "%";
}
