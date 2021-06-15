const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Role Selection')
        .setDescription(`**Info:** League of Legends
                         **Type:** Game
                         `)
        .setThumbnail(`https://cdn.discordapp.com/attachments/841443613987962940/841444709867323392/rolelol.png`)
        .setColor('#e3e01b')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "rolelol",
      description: "",
      usage: "!rolelol",
      accessableby: "Members",
      aliases: ['rolelol']
    }