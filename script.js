async function fetchCourses() {
    console.log("Fetching course data..."); // Debugging log
    const tabledata = document.getElementById("courseData");

    if (!tabledata) {
        console.error("Element with ID 'courseData' not found!");
        return;
    }

    tabledata.innerHTML = "<tr><td colspan='4'>Loading...</td></tr>";

    try {
        let res = await fetch("https://courseback-2vyg.onrender.com/course");
        console.log("Response received:", res); // Debugging log

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        let data = await res.json();
        console.log("Course Data:", data); // Debugging log
        tabledata.innerHTML = ""; 

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
        console.error("Error fetching courses:", error);
        tabledata.innerHTML = "<tr><td colspan='4'>Failed to load course data.</td></tr>";
    }
}

async function fetchEnrolledCandidates() {
    console.log("Fetching enrolled candidates data..."); // Debugging log
    const tabledata = document.getElementById("enrolledData");

    if (!tabledata) {
        console.error("Element with ID 'enrolledData' not found!");
        return;
    }

    tabledata.innerHTML = "<tr><td colspan='3'>Loading...</td></tr>";

    try {
        let res = await fetch("https://courseback-2vyg.onrender.com/course/enrolled");
        console.log("Response received:", res); // Debugging log

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        let data = await res.json();
        console.log("Enrolled Candidates Data:", data); // Debugging log
        tabledata.innerHTML = ""; 

        data.forEach(item => {
            let row = `<tr>
                <td>${item.name}</td>
                <td>${item.emailId}</td>
                <td>${item.courseName}</td>
            </tr>`;
            tabledata.innerHTML += row;
        });
    } catch (error) {
        console.error("Error fetching enrolled candidates:", error);
        tabledata.innerHTML = "<tr><td colspan='3'>Failed to load enrolled candidates.</td></tr>";
    }
}
