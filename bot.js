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
        msg.reply('බොකයා - 💩 \n ගේම් එකේදී තමාට කෙලවූවොත් වැලහින්නක් මෙන් අඩා වැලපෙනු ඇත. නහයෙන් ඇඩීම,මල පැනීම,අන් අයට කෑගැසීම සුවිශේෂී ලක්ෂනයයි. සියල්ල දමා ගසා මැච් එක මැදදී left වීමට ඉඩ ඇත.')
    } else if (msg.content === '!-gihan') {
        msg.reply('ටික් ටොක් වීරයා - 🤡 \n මොහුට යමක් කර ගැනීමට ද පුළුවනි.නමුත් මහ දෙයක් බැරිය.නමුත් සිතා සිටින්නේ ඔහු තරම් වැඩ්ඩෙක් නෑ කියාය.අනිත් උන් සියල්ල ඔහුව අනුගමනය කළ යුතු යැයි සිතයි.')
    } else if (msg.content === '!-thamidu') {
        msg.reply('ඇපෙක්ස් දෙයියෝ - 👶 \n සෙට් එකේම පොඩි එකාය.මුළු දවසම game ගහන එක විතරක් කරන මොහු හරියටම රෑ එකොළහට ගේම් ගැසීම නවත්වයි.ඒ නවත්වන්නේ ත් තාත්තාගෙන් ගුටි කෑමට වන නිසාය.ඉන්පසු ඔහු රෝස පාට මල් ඇති නයිටිය ඇඳගෙන නින්දට යයි.')
    } else if (msg.content === '!-nirman') {
        msg.reply('කයියා - 💧💧 \n කෑම මොහුගේ ප්‍රථම රාජකාරියයි.මැච් එකක් මැදදි හිටපු ගමන් "මචන් පොඩ්ඩක් හිටපං කන්න මොනවා හරි දෙයක් අරන් එන්නම් ,  ඒ පොඩ්ඩක් හිටපං චු දාල එන්නම් "කියා අතුරුදහන් වෙයි.ඔහු තරම් බුද්ධිමතෙකු මේ ලොවේ නැති තරම්ය.')
    } else if (msg.content === '!-maduka') {
        msg.reply('වහලා - 😢 \n සැමවිට කෙල්ලන්ගෙන් ගුටි කන මොහු හිත හොද කොල්ලෙකි.කෙල්ලගේ වහලෙක් වන මොහු යටිපතුල් පිස්සන්ගෙ සංගමයේ ප්‍රබල සාමාජිකයෙකුද වේ.')
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
    } else if (msg.content === '!-banners') {

        const embed = new Discord.MessageEmbed()
            // .setTitle('This is a test Embed.')
            .setTitle('Save Walter White')
            .setURL('http://www.savewalterwhite.com/')
            .setAuthor('jr.Walter')
            .setDescription(`
            My dad is amazing. It's funny, but I didn't know that until I
            found out he was going to die.  That it was going to happen
            soon.  That it was real.  Then I thought about a lot of stuff.
            Things I hadn't thought about for a long time.  I guess I kind
            of took him for granted or something.  I mean, our parents are
            just always there.  You expect them to always be bugging you
            to clean up your room or study harder or have good manners or
            try new things to grow up to be a more well-rounded person one
            day.  And make you get up early on the weekend to have
            "family time" and all that other stuff that used to drive me
            crazy.  I don't feel that way now.  Everything's different since
            Dad got his diagnosis.  Since I realized that one day in the
            near future, he might not be around to drive me crazy.
            `)
            .setColor('#FF2D00')
            .setThumbnail('https://cdn1.bbcode0.com/uploads/2020/12/17/525d52e3cd2984db9171ec683c6dd598-full.png')
            .setImage('https://cdn1.bbcode0.com/uploads/2020/12/17/525d52e3cd2984db9171ec683c6dd598-full.png')
            .setFooter('This is a example footer', 'https://cdn1.bbcode0.com/uploads/2020/12/17/525d52e3cd2984db9171ec683c6dd598-full.png')
            .addFields({
                name: 'Notice',
                value: 'We have a special steam at 7:00pm today, so if join with us ',
                inline: true
            }, {
                name: '👇👇👇',
                value: '',
                inline: true
            }, {
                name: '👇👇',
                value: ''
            }, {
                name: '👇',
                value: ''
            })
            .setTimestamp();

        // .addFields({
        //     name: 'Notice',
        //     value: 'We have a special steam at 7:00pm today, so if join with us ',
        //     inline: true
        // }, {
        //     name: 'Test Number 2',
        //     value: 'This is a example value',
        //     inline: true
        // }, {
        //     name: 'Test Number 3',
        //     value: 'This is a example value'
        // }, {
        //     name: 'Test Number 4',
        //     value: 'This is a example value'
        // })

        msg.channel.send(embed)
    }
    // else {
    //     msg.reply(' wrong command bitch')
    // }




})

client.login(process.env.BOT_TOKEN)