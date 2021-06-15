const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

  let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if (!dUser) return message.channel.send("Can't find user!")
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't you that command!")
  let dMessage = args.join(" ").slice(22);
  let successfullyembed = new Discord.MessageEmbed()
  message.delete().catch(err => console.log(err));

  var botIcon = bot.user.displayAvatarURL;

  const embed = new Discord.MessageEmbed()
        .setTitle('Lotus Applications - Rejected')
        .setDescription(`**Recruiter:** ${message.author}
                         **Member:** ${dUser}`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/841443613987962940/850485530323058718/rejected.png`)
        .setColor('#fc6d62')
        .setFooter(`${dMessage}`)

      message.channel.send(embed)

      dUser.send(`Your application has been rejected. There are many reasons for rejections, Though in many cases it is because we found your drive lacking on this occasion. If you have any questions or want to know exact reasons why your application has been rejected, then please contact the staff team. The easiest way to do this is by creating a ticket or by joining the voice support waiting room. You can always make a new application once you have received your feedback, and it often works out well!
      
**User:** ${dUser}
**Recruiter:** ${message.author}
**Extra Info:** ${dMessage}`)
    }

    module.exports.config = {
      name: "reject",
      description: "",
      usage: "!reject",
      accessableby: "Members",
      aliases: ['reject']
    }