async function fetchCourses() {
    const tabledata = document.getElementById("courseData");
    tabledata.innerHTML = "<tr><td colspan='4'>Loading...</td></tr>"; // Show loading message

    try {
        let res = await fetch("https://courseback-2vyg.onrender.com/course");
        if (!res.ok) throw new Error("Failed to fetch course data");

        let data = await res.json();
        tabledata.innerHTML = ""; // Clear previous data

        data.forEach(item => {
            let row = `<tr>
                <td>${item.courseId}</td>
                <td>${item.courseName}</td>
                <td>${item.trainer}</td>
                <td>${item.durationInWeeks}</td>
            </tr>`;
            tabledata.innerHTML += row;
        });
    } catch (error) {
        console.error("Error:", error);
        tabledata.innerHTML = "<tr><td colspan='4'>Failed to load course data.</td></tr>";
    }
}

async function fetchEnrolledCandidates() {
    const tabledata = document.getElementById("enrolledData");
    tabledata.innerHTML = "<tr><td colspan='3'>Loading...</td></tr>"; // Show loading message

    try {
        let res = await fetch("https://courseback-2vyg.onrender.com/course/enrolled");
        if (!res.ok) throw new Error("Failed to fetch enrolled candidates data");

        let data = await res.json();
        tabledata.innerHTML = ""; // Clear previous data

        data.forEach(item => {
            let row = `<tr>
                <td>${item.name}</td>
                <td>${item.emailId}</td>
                <td>${item.courseName}</td>
            </tr>`;
            tabledata.innerHTML += row;
        });
    } catch (error) {
        console.error("Error:", error);
        tabledata.innerHTML = "<tr><td colspan='3'>Failed to load enrolled candidates.</td></tr>";
    }
}
