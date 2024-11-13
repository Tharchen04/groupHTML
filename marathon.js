document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("studentForm");
    const stdList = document.getElementById("stdList").querySelector("tbody");

    studentForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const course = document.getElementById("course").value.trim();
        const studentId = document.getElementById("student-id").value.trim();
        const age = document.getElementById("age").value.trim();

        // Validate form input
        if (!name || !course || !studentId || !age) {
            alert("Please fill out all fields.");
            return;
        }

        // Create new row for the table
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${course}</td>
            <td>${studentId}</td>
            <td>${age}</td>
        `;

        // Append the new row to the table body
        stdList.appendChild(row);

        // Clear form fields
        studentForm.reset();
    });
});

console.log(name, course, studentId, age);  // Add this line to debug
