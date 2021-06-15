const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Role Selection')
        .setDescription(`**Info:** Escape from Tarkov
                         **Type:** Game
                         `)
        .setThumbnail(`https://cdn.discordapp.com/attachments/834111540826210405/847852528456171581/tarkov.png`)
        .setColor('#e0caa4')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "roletarkov",
      description: "",
      usage: "!roletarkov",
      accessableby: "Members",
      aliases: ['roletarkov']
    }