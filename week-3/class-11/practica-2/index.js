function fetchCocktails() {
    let userInput = $('.userInput').val();
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`;

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
    let drinks = responseJSON.drinks;

    $("#results").empty();

    drinks.forEach((drink)=> {
        let ingredients = '';

        for(let i = 1; i <= 15; i++) {
            let ingredient = `strIngredient${i}`;
            let measure = `strMeasure${i}`;

            if (drink[ingredient] == null) {
                console.log('No ingredient' + i);
                break;
            }
            else {
                if (drink[measure] !== null) {
                    ingredients += `<li>${drink[ingredient]} - ${drink[measure]}</li>`;
                }
                else {
                    ingredients += `<li>${drink[ingredient]}</li>`;
                }
            }
        }

        results.append(`<div class="drink">
            <h1>${drink.strDrink}</h1>
            <img class="dimension" src="${drink.strDrinkThumb}" />
            <h3> Ingredients </h3>
            <ul> ${ingredients} </ul>
        </div>`);
    })
}

function watchForm() {
    let form = document.getElementById('cocktails');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        fetchCocktails();
    });
}

function init() {
    watchForm();
}

init();