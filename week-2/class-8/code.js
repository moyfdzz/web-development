// JQuery.

let menu = $('#menu')
            $('.formElement')
            $('div')

/*
    <ul id="menu">
    <li></li>
*/

$(menu).html();
$(menu).html('<li>...</li>'); // Sobreescribe los elementos de la lista.
$(menu).append('...'); // Agregar un elemento al final de la lista.
$(menu).prepend('...'); // Agregar un elemento al principio de la lista.
$(menu).text(); // Regresa un string con todos los elementos adentro del selector.
$(menu).addClass('_');
$(menu).removeClass('_');
$(menu).attr('id'); // Regresa el valor de un atributo (the first matched element).
$(menu).attr('id', 'valor'); // Asignar el atributo y el valor.

// En code.html.
let home = $('.home').parent(); // Regresaría al "menu". Si no hay parent, regresa undefined.
$(home).next(); // Se iría al siguiente elemento. Si ya no hay otro después, regresa undefined.
$(home).parent().siblings(); // Regresa todos los elementos que tienen el mismo padre.
$(home).children(); // En "menu", regresaría "home" y "about".
$('body').find('about').forEach(function(item){ // Busca el elemento en los hijos.
    console.log(item);
});
$('body').closets('about').forEach(function(item){ // Busca el elemento en los padres.
    console.log(item);
});

// Eventos.
$(menu).on('click', function() {

});

$('#menu').on("click", ".contact", function(e){ // Para aplicar un evento a un elemento añadido dinamicamente.
    $(this) // Con this puedo saber a qué elemento le apliqué la función. Aquí sería al elemento contact.
    e.target
});