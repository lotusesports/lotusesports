const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Role Selection')
        .setDescription(`**Info:** Warzone
                         **Type:** Game
                         `)
        .setThumbnail(`https://cdn.discordapp.com/attachments/841443613987962940/841447330988818482/rolewarzone.png`)
        .setColor('#f5fdff')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "rolewarzone",
      description: "",
      usage: "!rolewarzone",
      accessableby: "Members",
      aliases: ['warzone']
    }