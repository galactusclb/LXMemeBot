require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Our bot is ready to go.`)
})

client.on('guildMemberAdd', member => {
    member.guild.channels.get('channelID').send("Welcome");
});

client.on('message', msg => {
    if (msg.content === '!-ping') {
        msg.reply('pong')
    } else if (msg.content === '!-command') {
        msg.reply('!-<name>  ex: !-gihan')
    } else if (msg.content === '!-kanna') {
        msg.reply('තේ නෑනේ මහත්තයො')
    } else if (msg.content === '!-rangana') {
        msg.reply('බොකයා - 💩 ගේම් එකේදී තමාට කෙලවූවොත් වැලහින්නක් මෙන් අඩා වැලපෙනු ඇත. නහයෙන් ඇඩීම,මල පැනීම,අන් අයට කෑගැසීම සුවිශේෂී ලක්ෂනයයි. සියල්ල දමා ගසා මැච් එක මැදදී left වීමට ඉඩ ඇත.')
    } else if (msg.content === '!-gihan') {
        msg.reply('ටික් ටොක් වීරයා - 🤡 මොහුට යමක් කර ගැනීමට ද පුළුවනි.නමුත් මහ දෙයක් බැරිය.නමුත් සිතා සිටින්නේ ඔහු තරම් වැඩ්ඩෙක් නෑ කියාය.අනිත් උන් සියල්ල ඔහුව අනුගමනය කළ යුතු යැයි සිතයි.')
    } else if (msg.content === '!-thamidu') {
        msg.reply('ඇපෙක්ස් දෙයියෝ - 👶 සෙට් එකේම පොඩි එකාය.මුළු දවසම game ගහන එක විතරක් කරන මොහු හරියටම රෑ එකොළහට ගේම් ගැසීම නවත්වයි.ඒ නවත්වන්නේ ත් තාත්තාගෙන් ගුටි කෑමට වන නිසාය.ඉන්පසු ඔහු රෝස පාට මල් ඇති නයිටිය ඇඳගෙන නින්දට යයි.')
    } else if (msg.content === '!-nirman') {
        msg.reply('කයියා - 💧💧 කෑම මොහුගේ ප්‍රථම රාජකාරියයි.මැච් එකක් මැදදි හිටපු ගමන් "මචන් පොඩ්ඩක් හිටපං කන්න මොනවා හරි දෙයක් අරන් එන්නම් ,  ඒ පොඩ්ඩක් හිටපං චු දාල එන්නම් "කියා අතුරුදහන් වෙයි.ඔහු තරම් බුද්ධිමතෙකු මේ ලොවේ නැති තරම්ය.')
    } else if (msg.content === '!-maduka') {
        msg.reply('වහලා - 😢 සැමවිට කෙල්ලන්ගෙන් ගුටි කන මොහු හිත හොද කොල්ලෙකි.කෙල්ලගේ වහලෙක් වන මොහු යටිපතුල් පිස්සන්ගෙ සංගමයේ ප්‍රබල සාමාජිකයෙකුද වේ.')
    } else if (msg.content === '!-thakshila') {
        msg.reply(' comming soon - 🍆 give your comment')
    } else if (msg.content === '!-supun') {
        msg.reply(' comming soon - 🍆 give your comment')
    } else if (msg.content === '!-pathum') {
        msg.reply(' comming soon - 🍆 give your comment')
    } else if (msg.content === '!-chanaka') {
        msg.reply(' comming soon - 👑 ')
    } else if (msg.content === '!-thiran') {
        msg.reply(' comming soon - 🥚 ')
    }




})

client.login(process.env.BOT_TOKEN)