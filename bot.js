require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Our bot is ready to go.`)
})

client.on('message', msg => {
    if (msg.content === '!-ping') {
        msg.reply('pong')
    } else if (msg.content === '!-kanna') {
        msg.reply('තේ නෑනේ මහත්තයො')
    } else if (msg.content === '!-rangana') {
        msg.reply('බොකයා - 💩 ගේම් එකේදී තමාට කෙලවූවොත් වැලහින්නක් මෙන් අඩා වැලපෙනු ඇත. නහයෙන් ඇඩීම,මල පැනීම,අන් අයට කෑගැසීම සුවිශේෂී ලක්ෂනයයි. සියල්ල දමා ගසා මැච් එක මැදදී left වීමට ඉඩ ඇත.')
    } else if (msg.content === '!-gihan') {
        msg.reply('හුස්ම හිරවුණා - 🤡 මොහුට යමක් කර ගැනීමට ද පුළුවනි.නමුත් මහ දෙයක් බැරිය.නමුත් සිතා සිටින්නේ ඔහු තරම් වැඩ්ඩෙක් නෑ කියාය.අනිත් උන් සියල්ල ඔහුව අනුගමනය කළ යුතු යැයි සිතයි.')
    } else if (msg.content === '!-thmidu 1') {
        msg.reply('ඇපෙක්ස් දෙයියෝ - ')
    } else if (msg.content === '!-nirman') {
        msg.reply('ඇපෙක්ස් දෙයියෝ - 💧💧 කෑම මොහුගේ ප්‍රථම රාජකාරියයි.මැච් එකක් මැදදි හිටපු ගමන් "මචන් පොඩ්ඩක් හිටපං කන්න මොනවා හරි දෙයක් අරන් එන්නම් ,  ඒ පොඩ්ඩක් හිටපං චු දාල එන්නම් "කියා අතුරුදහන් වෙයි.ඔහු තරම් බුද්ධිමතෙකු මේ ලොවේ නැති තරම්ය.')
    }




})

client.login(process.env.BOT_TOKEN)