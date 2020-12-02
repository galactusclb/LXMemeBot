require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Our bot is ready to go.`)
})

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong')
    } else if (msg.content === 'kanna') {
        msg.reply('තේ නෑනේ මහත්තයො')
    }


})


client.login(process.env.BOT_TOKEN)