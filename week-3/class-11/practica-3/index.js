function fetchGithub() {
    let userInput = $('.userInput').val();
    let url = `https://api.github.com/users/${userInput}/repos`;

    $.ajax({
        url : url,
        method : "GET",
        dataType : "json",
        success : function(responseJSON) {
            displayResults(responseJSON);
        },
        error : function(err) {
            console.log(err);
        }
    });
}

function displayResults(responseJSON) {
    let repositories = responseJSON;
    let results = $("#results");
    $("#results").empty();

    repositories.forEach((repository) => {
        results.append(`<div class="repository">
            <h1>${repository.name}</h1>
            <h3> Repository URL: <a href= "${repository.html_url}"> ${repository.html_url} </a> </h3>
        </div>`);
    })
}

function watchForm() {
    let form = document.getElementById('users');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        fetchGithub();
    });
}

function init() {
    watchForm();
}

init();