# Seguridad web, CORS y cookies
## Tres partes en las que tenemos que pensar al hacer una aplicación web
* Privacidad
* Integridad
* Autenticidad
## Capas
* Capa Presentación (HTML, CSS, JavaScript)
* Capa Aplicación (Servidor)
* Capa Datos (BD)
## Clientes
* Fat Client (Capa Presentación principalmente y un poco de Capa Aplicación)
* Thin Client (Capa Aplicación y Capa Datos)
## XSS (Cross-site scripting)
### Cómo evitar
* Validar formas
* Sanitizar inputs
* Expresiones regulares
* Limitar etiquetas de entrada
* Validar datos de entrada
* Codificar texto
## Inyección SQL
* Primer orden (Logra entrar a la base de datos)
* Segundo orden (Deja algo corriendo permanentemente en la base de datos como un proceso)
* Lateral (Obtener privilegios de administrador para cambiar o borrar datos en la base de datos, o instalar software)
## Backend
* Encriptar datos
* Manejo de sesiones
* Mantener los datos en constante cambio
* Reglas / capchas
## Phishing/Spamming
* Notifícale al usuario de lo que es y lo que no es ("No solicitamos información por correo")
## Denial of Service / Botnets
* Capchas
* IP DNS bloqueas una entrada
* Doble autentificación
## Encriptación
### Simétrica
* Es cuando el emisor y el receptor, las dos partes que se comunican, tienen una llave pública para cifrar y descifrar los mensajes que se envían.
### Asimétrica
* Es cuando el emisor usa la llave pública del receptor para que sólo ese receptor pueda descifrar el mensaje con su llave privada.