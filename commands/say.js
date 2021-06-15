const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args, guild) => {

    message.delete().catch(err => console.log(err));

    var botIcon = bot.user.displayAvatarURL;
    var botEmbed = new Discord.MessageEmbed()
    const sayMessage = args.join(" ");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Nop, you are not a moderator!")
    let dMessage = args.join(" ").slice(22);
    let successfullyembed = new Discord.MessageEmbed()
    message.delete().catch(err => console.log(err));
    message.channel.send(sayMessage);

}

module.exports.config = {
  name: "say",
  description: "",
  usage: "!say",
  accessableby: "Members",
  aliases: ['say']
}