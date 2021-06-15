const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Role Selection')
        .setDescription(`**Info:** Valorant
                         **Type:** Game
                         `)
        .setThumbnail(`https://cdn.discordapp.com/attachments/841443613987962940/841449579161452574/rolevalorant.png`)
        .setColor('#ff5959')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "rolevalorant",
      description: "",
      usage: "!rolevalorant",
      accessableby: "Members",
      aliases: ['rolelol']
    }