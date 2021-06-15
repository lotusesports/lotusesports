const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const logo = 'https://cdn.discordapp.com/attachments/562400670364336138/839979057092231168/logo.png'

        const embed = new Discord.MessageEmbed()
        .setFooter(`
        Do you agree with our rules? Then you can click on the ✅ to gain access to our discord.`)
        .setColor('#5c9dff')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "4info",
      description: "",
      usage: "!4info",
      accessableby: "Members",
      aliases: ['4', 'info']
    }