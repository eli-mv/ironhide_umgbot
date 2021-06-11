const {Telegraf} = require('telegraf')

const bot = new Telegraf('1710405315:AAFfY_Xz6somIeSmv3_JyDmC4ie0YODYNRw')

bot.start((cxt) => {
    cxt.reply('WelcomoSoy de JS');


})

console.log('eliezer')

bot.launch()