document.addEventListener("DOMContentLoaded", function () {
    const studentCheckbox = document.getElementById("student");
    const studentIdField = document.getElementById("student-id-field");

    studentCheckbox.addEventListener("change", function () {
        if (this.checked) {
            studentIdField.classList.remove("hidden");
        } else {
            studentIdField.classList.add("hidden");
        }
    });
});
