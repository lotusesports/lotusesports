const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Role Selection')
        .setDescription(`**Info:** CS-GO
                         **Type:** Game
                         `)
        .setThumbnail(`https://cdn.discordapp.com/attachments/841443613987962940/841450539480645662/rolecsgo.png`)
        .setColor('#d4a31c')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "rolecsgo",
      description: "",
      usage: "!rolecsgo",
      accessableby: "Members",
      aliases: ['rolecsgo']
    }