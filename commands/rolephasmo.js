const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Role Selection')
        .setDescription(`**Info:** Phasmophobia
                         **Type:** Game
                         `)
        .setThumbnail(`https://cdn.discordapp.com/attachments/834111540826210405/847852529831510066/phasmo.png`)
        .setColor('#000000')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "rolephasmo",
      description: "",
      usage: "!rolephasmo",
      accessableby: "Members",
      aliases: ['rolephasmo']
    }