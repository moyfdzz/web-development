{
    method: "GET",
    body: ...,
    headers: {
        'Content-Type': _
    }
}
// Lo de arriba es lo de settings del fetch.

// JavaScript
fetch(url, settings)
.then((response) => {
    console.log(response);

    if (response.ok) {
        return response;
    }

    throw new Error(response.statusText);
})
.then((responseJSON) => {
    console.log(responseJSON);
})
.catch((err) => {
    console.log(err);
});

// AJAX
$.ajax({
    url: url,
    method: "GET",
    data: "Datos a enviar", // En JS sería lo del body de settings.
    ContentType: "Tipo de dato que se envía al servidor", // En JS sería lo de headers de settings.
    dataType: "Tipo de dato que recibimos del servidor",
    success: function(responseJSON) {

    },
    error: function(err) {

    }
});