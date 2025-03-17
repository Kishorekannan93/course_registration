function showCourse(){
    fetch("http://localhost:8080/course")
    .then((res)=>res.json())
    .then((data)=>{
        const tabledata = document.getElementById("datas");

       data.forEach(data =>{
        var row =  `<td>${data.courseId}</td>
        <td>${data.courseName}</td>
        <td>${data.trainer}</td>
        <td>${data.durationInWeeks}</td>
        `

        tabledata.innerHTML += row;
       })
       
    }
    )
}

function showCourse1(){
    fetch("http://localhost:8080/course/enrolled")
    .then((res)=>res.json())
    .then((data)=>{
        const tabledata = document.getElementById("datas");

       data.forEach(data =>{
        var row =  `<td>${data.name}</td>
        <td>${data.emailId}</td>
        <td>${data.courseName}</td>
   
        `

        tabledata.innerHTML += row;
       })
       
    }
    )


    
}