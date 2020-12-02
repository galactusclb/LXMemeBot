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
    } else if (msg.content === 'rangana') {
        msg.reply('බොකයා - ගේම් එකේදී තමාට කෙලවූවොත් වැලහින්නක් මෙන් අඩා වැලපෙනු ඇත. නහයෙන් ඇඩීම,මල පැනීම,අන් අයට කෑගැසීම සුවිශේෂී ලක්ෂනයයි. සියල්ල දමා ගසා මැච් එක මැදදී left වීමට ඉඩ ඇත💩.')
    }


})

client.login(process.env.BOT_TOKEN)