# Notes Class 10
## AJAX (Asynchronous JavaScript And XML)
* Sirve para que agilizar el proceso de comunicación con la página.
## API (Application Programming Interface)
* Sirve para comunicarse entre el cliente (HTML, CSS y JS (AJAX)) y el servidor (Node.js).
### Métodos
* GET - recibir datos de un recurso específico del servidor.
* POST - crear algo nuevo en el servidor.
* PUT - actualizar algo del servidor
* DELETE - borrar algo del servidor.
## JavaScript
* Método fetch(url, settings)
* settings - qué método voy a utilizar
{
    method: "GET",
    body: ...,
    headers:
}
* El fetch se reconoce como una promesa con el servidor, el cliente espera hasta que el servidor le mande la respuesta.