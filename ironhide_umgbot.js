
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
    return resultado2.resultado // “Chacarron”
   };

   

//getPredictionCero();
//getPredictionUno();

//getPredictionDos().then(val => console.log(val));


const request = require("request-promise"),
    RUTA = "http://localhost:3636/pre";

request({
    uri: RUTA,
    json: true, // Para que lo decodifique automáticamente 
}).then(predictiondb => {
    predictiondb.forEach(predictiondb => {
        console.log(`${predictiondb.resultado}`);

        bot.hears('Abril', (ctx) =>  ctx.reply('esto es Enero 2022 '+ predictiondb.resultado ))
    })
});











//console.log(result2);



//conexion y lectura de datos de la base de datos


const {Telegraf} = require('telegraf')

const bot = new Telegraf('1710405315:AAFfY_Xz6somIeSmv3_JyDmC4ie0YODYNRw')

bot.start((cxt) => {
    cxt.reply('Hola dime que mes es el que deseas predecir Enero, Febrero o Marzo 2020 para comprar');
})


bot.hears('Enero', (ctx) =>  ctx.reply('esto es Enero 2022 '))
bot.hears('Febrero',(ctx) =>  ctx.reply('esto es Febrero 2022'))
bot.hears('Marzo', (ctx) =>  ctx.reply('Esto es marzo 2022'))

bot.on('pedro', ctx =>  ctx.reply('Esto es marzo 2022'))

bot.launch()