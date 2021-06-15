const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args, guild) => {

    if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Nop, you are not a moderator!");

    if (!args[0]) return message.reply("Please tell me how much messages i have to delete");

    if (Number.isInteger(parseInt(args[0]))) {

        var aantal = parseInt(args[0]) + 1;

        message.channel.bulkDelete(aantal).then(() => {

            if (args[0] == 0) {

                message.reply(`Do you really try to remove 0 messages?`).then(msg => msg.delete({ timeout: 3000 }));

            } else if (args[0] == 1) {

                message.reply(`I removed 1 message for you`).then(msg => msg.delete({ timeout: 3000 }));

            } else {

                message.reply(`I deleted ${args[0]} messages for you.`).then(msg => msg.delete({ timeout: 3000 }));

            }

        });

    } else {
        return message.reply("Please tell me how much messages i have to delete");
    }
}

module.exports.config = {
  name: "clear",
  description: "",
  usage: "!clear",
  accessableby: "Members",
  aliases: ['clear']
}