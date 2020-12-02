require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Our bot is ready to go.`)
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong')
    }
})


client.login(process.env.BOT_TOKEN)