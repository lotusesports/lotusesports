const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Role Selection')
        .setDescription(`**Info:** For honor
                         **Type:** Game
                         `)
        .setThumbnail(`https://cdn.discordapp.com/attachments/852193039694299186/865887530393927700/forhonor.png`)
        .setColor('#a18433')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "rolehonor",
      description: "",
      usage: "!rolehonor",
      accessableby: "Members",
      aliases: ['honor']
    }