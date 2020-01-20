function fetchNews() {
    let userInput = $('.userInput').val();
    let url = 'https://newsapi.org/v2/everything?' +
    `q=${userInput}&` +
    'from=2020-01-20&' +
    'sortBy=popularity&' +
    'apiKey=c52dda35892a41bdb59f5af13db10c96';

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
    let results = $("#results");

    $('#results').empty();

    responseJSON.articles.forEach((el)=> {
        results.append(`<div>
            <h1>${el.title}</h1>
            <p>
                <img class="dimension" src="${el.urlToImage}" />
            </p>
            <p>${el.author}</p>
            <p>${el.description}</p>
        </div>`);
    });
}

function watchForm() {
    let form = document.getElementById('news');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        fetchNews();
    });
}

function init() {
    watchForm();
}

init();