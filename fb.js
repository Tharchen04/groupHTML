document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("studentForm");
    const stdList = document.getElementById("stdList").querySelector("tbody");

    studentForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form values
        const name = document.getElementById("name").value.trim();
        const course = document.getElementById("course").value.trim();
        const year = document.getElementById("year").value.trim();
        const day = document.getElementById("day").value;
        const startTime = document.getElementById("start-time").value;
        const endTime = document.getElementById("end-time").value;
        const phone = document.getElementById("phone").value.trim();

        // Create new table row
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${course}</td>
            <td>${year}</td>
            <td>${day}</td>
            <td>${startTime} - ${endTime}</td>
            <td>${phone}</td>
        `;

        // Append new row to the table
        stdList.appendChild(row);

        // Clear form inputs
        studentForm.reset();
    });
});
