async function fetchData(url, tableId) {
    const tabledata = document.getElementById(tableId);
    tabledata.innerHTML = "<tr><td colspan='4'>Loading...</td></tr>"; // Show loading

    for (let i = 0; i < 3; i++) { // Retry 3 times if the server is slow
        try {
            let res = await fetch(url);
            if (!res.ok) throw new Error("Server not ready");

            let data = await res.json();
            tabledata.innerHTML = ""; // Clear previous data

            data.forEach(item => {
                let row = `<tr>
                    <td>${item.courseId || item.name}</td>
                    <td>${item.courseName || item.emailId}</td>
                    <td>${item.trainer || ""}</td>
                    <td>${item.durationInWeeks || ""}</td>
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

// ✅ Use these two functions for fetching data
function showCourse() {
    fetchData("https://courseback-2vyg.onrender.com/course", "datas");
}

function showCourse1() {
    fetchData("https://courseback-2vyg.onrender.com/course/enrolled", "datas");
}
