# Proyecto IronHide_UmgBot
## Tecnologias Utilizadas:
- Brain.js : para la aplicación de redes neuronales 
- Telegraf: para la interaccion con telegram y el chatbot
- NodeJS: entorno en tiempo de ejecución para el servidor JS
- cdn de Brain.js: Este se utilizo para hacer la prediccion de lado de FrontEnd
- pg postgres nodejs: este modulo se utilizo para la realizacion de la conexion e interaccion de PostgreSQ con NodeJS
- ExpressJS: se utilizo para la realizacion de la API Rest



Estructura:

> En la carpeta controller se encuentran todos los funciones de la API Rest.
> En la carpeta Route se configuran las rutas y funciones a utilizar con cada ruta
> En el archivo ironhide_umgbot.js es el archivo que se debe de ejecutar para que el chatbot se active con el comando:
- Node ironhide_umgbot.js