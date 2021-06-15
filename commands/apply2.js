const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const logo = 'https://cdn.discordapp.com/attachments/562400670364336138/839979057092231168/logo.png'

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - How to apply')
        .setDescription(`

        **1** • Visit our chat named: Application.
        **2** • Send a message containing the following information: In game name, Age, Country.
        **3** • When u sended this message you will have to wait till our recruiters contact you. (In a DM or in that chat).
        **4** • When our recruiters have time, you will be invited in to a voice chat. This is where the application will happen.
        **5** • You will know if you got accepted right away.
        
        **INFO:**
        Rank doesnt matter, experience doenst matter, but motivation does matter alot.
        What will we do in a application voice chat?
        We will ask you why you want to join and check if you are motivated.
        Also we will check if you are a non-toxic person. Because we want our community to stay user friendly.
        If you have any questions, please create a ticket in #support.
        Have fun and good luck!`)
        .setColor('#a93dff')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "apply1",
      description: "apply1",
      usage: "!apply1",
      accessableby: "Members",
    }