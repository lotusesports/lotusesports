const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const logo = 'https://cdn.discordapp.com/attachments/562400670364336138/839979057092231168/logo.png'

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Applications')
        .setDescription(`

        You can sign up for joining a team in our organization. We accept every skill level / rank player. But we do have a few rules. You can find all of them on our website. If you want to apply you can find out how to in this channel. For questions feel free to create a ticket in #support`)
        .setColor('#a93dff')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "apply1",
      description: "apply1",
      usage: "!apply1",
      accessableby: "Members",
    }