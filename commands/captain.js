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
        .setTitle('Lotus Staff - Captain')
        .setDescription(`**Supervisor:** ${message.author}
                         **Member:** ${dUser}`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/839217875641958400/866058855816888370/lotus.png`)
        .setColor('#FFD700')
        .setFooter(`${dMessage}`)

      message.channel.send(embed)

      dUser.send(`You are added to the Lotus eSports captains!
      
**User:** ${dUser}
**Recruiter:** ${message.author}
**Extra Info:** ${dMessage}`)
    }

    module.exports.config = {
      name: "captain",
      description: "",
      usage: "!captain",
      accessableby: "Members",
      aliases: ['captain']
    }