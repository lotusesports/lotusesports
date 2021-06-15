const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Role Selection')
        .setDescription(`**Info:** Rocket League
                         **Type:** Game
                         `)
        .setThumbnail(`https://cdn.discordapp.com/attachments/841443613987962940/841446405784862760/rolerocketleague.png`)
        .setColor('#21abeb')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "rolerocket",
      description: "",
      usage: "!rolerocket",
      accessableby: "Members",
      aliases: ['rolerocket']
    }