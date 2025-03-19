async function fetchCourses() {
    const tabledata = document.getElementById("datas");
    tabledata.innerHTML = "<tr><td colspan='4'>Loading...</td></tr>"; // Show loading

    for (let i = 0; i < 3; i++) { // Retry 3 times if the server is slow
        try {
            let res = await fetch("https://courseback-2vyg.onrender.com/course");
            if (!res.ok) throw new Error("Server not ready");

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
            return; // Exit if successful
        } catch (error) {
            console.error(`Retrying... (${i + 1}/3)`);
            await new Promise(res => setTimeout(res, 2000)); // Wait 2 sec before retrying
        }
    }
    tabledata.innerHTML = "<tr><td colspan='4'>Failed to load data.</td></tr>"; // Show error
}

async function fetchEnrolledCandidates() {
    const tabledata = document.getElementById("datas");
    tabledata.innerHTML = "<tr><td colspan='3'>Loading...</td></tr>"; // Show loading

    for (let i = 0; i < 3; i++) { // Retry 3 times if the server is slow
        try {
            let res = await fetch("https://courseback-2vyg.onrender.com/course/enrolled");
            if (!res.ok) throw new Error("Server not ready");

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
            return; // Exit if successful
        } catch (error) {
            console.error(`Retrying... (${i + 1}/3)`);
            await new Promise(res => setTimeout(res, 2000)); // Wait 2 sec before retrying
        }
    }
    tabledata.innerHTML = "<tr><td colspan='3'>Failed to load data.</td></tr>"; // Show error
}

// ✅ Call these functions separately
function showCourse() {
    fetchCourses();
}

function showEnrolledCandidates() {
    fetchEnrolledCandidates();
}
