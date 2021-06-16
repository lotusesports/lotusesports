const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const logo = 'https://cdn.discordapp.com/attachments/562400670364336138/839979057092231168/logo.png'

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - How to apply')
        .setDescription(`

        You can apply by simply filling in one of the following forms.
        For questions, please create a ticket in #support.
        
        **League of Legends:**
        Apply: https://bit.ly/2UdQPSB
        
        **Rocket league:**
        Apply: https://bit.ly/3iKz33u
        
        **Valorant:**
        Apply: https://bit.ly/2Tvl3Qu

        **CS-GO:**
        Apply: https://bit.ly/3xqLRA8
        
        You will be updated about your application in the #application chat.
        This will take about 1/2 days.
        Please wait patiently.`)
        .setColor('#a93dff')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "apply2",
      description: "",
      usage: "!apply2",
      accessableby: "Members",
      aliases: ['apply2']
    }