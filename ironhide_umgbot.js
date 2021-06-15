
//conexion y lectura de datos de la base de datos
const { Pool } = require('pg');

const pool = new Pool({
    host:'postgresql-34334-0.cloudclusters.net',
    user: 'skay',
    password:'Umg123456',
    database:'ironhidedb',
    port:'34334'
    
});

var resultadox; 

const getPredictionCero = async () => {
 const res = await pool.query('select resultado from predictiondb order by anio asc limit 3');
 console.log(res.rows[0]);
};

const getPredictionUno = async () => {
    const res = await pool.query('select resultado from predictiondb order by anio asc limit 3');
    console.log(res.rows[1]);
   };

const getPredictionDos = async () => {
    const res = await pool.query('select resultado from predictiondb order by anio asc limit 3');
  //  console.log(JSON.stringify(res.rows[2]));

    let resultado2 = JSON.parse(JSON.stringify(res.rows[2]))
    return resultado2.resultado // 
   };

 
//Enero

const request = require("request-promise"),
    RUTA = "http://localhost:3636/mes/1";

request({
    uri: RUTA,
    json: true, // Para que lo decodifique automáticamente 
}).then(predictiondb => {
    predictiondb.forEach(predictiondb => {
        console.log(`${predictiondb.resultado}`);

        bot.hears('Enero', (ctx) =>  ctx.reply('Debes de comparar '+ predictiondb.resultado +' Libras de carne para el mes de Febrero de 2022' ))
    })
});

//Febrero

const request2 = require("request-promise"),
    RUTA2 = "http://localhost:3636/mes/2";

request({
    uri: RUTA2,
    json: true, // Para que lo decodifique automáticamente 
}).then(predictiondb => {
    predictiondb.forEach(predictiondb => {
        console.log(`${predictiondb.resultado}`);
        bot.hears('Febrero', (ctx) =>  ctx.reply('Debes de comparar  '+ predictiondb.resultado+' Libras de carne para el mes de Febrero de 2022' ))
    })
});


//Marzo

const request3 = require("request-promise"),
    RUTA3 = "http://localhost:3636/mes/3";

request({
    uri: RUTA3,
    json: true, // Para que lo decodifique automáticamente 
}).then(predictiondb => {
    predictiondb.forEach(predictiondb => {
        console.log(`${predictiondb.resultado}`);
        bot.hears('Marzo', (ctx) =>  ctx.reply('Debes de comparar '+ predictiondb.resultado +' Libras de carne para el mes de Marzo de 2022' ))
    })
});


//Abril

const request4 = require("request-promise"),
    RUTA4 = "http://localhost:3636/mes/4";

request({
    uri: RUTA4,
    json: true, // Para que lo decodifique automáticamente 
}).then(predictiondb => {
    predictiondb.forEach(predictiondb => {
        console.log(`${predictiondb.resultado}`);
        bot.hears('Abril', (ctx) =>  ctx.reply('Debes de comparar '+ predictiondb.resultado +' Libras de carne para el mes de Abril de 2022' ))
    })
});


const request5 = require("request-promise"),
    RUTA5 = "http://localhost:3636/mes/5";

request({
    uri: RUTA5,
    json: true, // Para que lo decodifique automáticamente 
}).then(predictiondb => {
    predictiondb.forEach(predictiondb => {
        console.log(`${predictiondb.resultado}`);
        bot.hears('Mayo', (ctx) =>  ctx.reply('Debes de comparar '+ predictiondb.resultado +' Libras de carne para el mes de Abril de 2022' ))
    })
});


const request6 = require("request-promise"),
    RUTA6 = "http://localhost:3636/mes/6";

request({
    uri: RUTA6,
    json: true, // Para que lo decodifique automáticamente 
}).then(predictiondb => {
    predictiondb.forEach(predictiondb => {
        console.log(`${predictiondb.resultado}`);
        bot.hears('Junio', (ctx) =>  ctx.reply('Debes de comparar '+ predictiondb.resultado +' Libras de carne para el mes de Abril de 2022' ))
    })
});



//conexion y lectura de datos de la base de datos


const {Telegraf} = require('telegraf')

const bot = new Telegraf('1710405315:AAFfY_Xz6somIeSmv3_JyDmC4ie0YODYNRw')

bot.start((cxt) => {
    cxt.reply('Hola, quieres saber cuanta carne de res debes de estimar para comprar en los meses del 2022, escribe el mes que desees predecir de Enero a Diciembre');
});

bot.launch()
