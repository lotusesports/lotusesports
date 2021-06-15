const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
    },

module.exports.config = {
  name: "cc",
  description: "",
  usage: "!cc",
  accessableby: "Members",
  aliases: ['cc']
}