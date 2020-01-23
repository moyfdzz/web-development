function loadStudents() {
    let url = "/api/students";
    let settings = {
        method : "GET"
    }
    fetch(url, settings)
        .then (response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then (repsonseJSON => {
            displayResults(repsonseJSON);
        });
}

function displayResults(repsonseJSON) {
    $('#studentList').empty();

    for(let i = 0; i < repsonseJSON.length; i++) {
        $('#studentList').append(`
            <li>
                ${repsonseJSON[i].nombre} ${repsonseJSON[i].apellido}
            </li>
                `);
    }
}

function init() {
    loadStudents();
}

init();