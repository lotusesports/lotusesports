const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const logo = 'https://cdn.discordapp.com/attachments/562400670364336138/839979057092231168/logo.png'

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - About us')
        .setDescription(`

        We created this organization in 2021. Our management is made by experienced and friendly peeps. All experienced in esports / community management. Our main goals are simple, we want you to have fun and play some cool games! We make teams for a few games and also organize alot of fun tournaments. You can join a team by looking in to the #application chat.`)
        .setColor('#a93dff')
        .setThumbnail('https://cdn.discordapp.com/attachments/562400670364336138/839979057092231168/logo.png')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "2info",
      description: "info 2",
      usage: "!2info",
      accessableby: "Members",
      aliases: ['2', 'info']
    }