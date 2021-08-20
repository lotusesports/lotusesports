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
        .setTitle('Lotus Applications - Accepted')
        .setDescription(`**Recruiter:** ${message.author}
                         **Member:** ${dUser}`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/852193039694299186/878299557849608212/lotuslogo1.png`)
        .setColor('#69f591')
        .setFooter(`${dMessage}`)

      message.channel.send(embed)

      dUser.send(`Your application has been accepted. You will receive the member roles soon. If you have any questions, please contact our staff by creating a ticket. Getting placed into a casual team will take about 1 - 4 days. Getting placed into a competitive team can take a bit longer. This really depends on the free positions etc. Well anyway! Gratz with your member role. And welcome to Lotus eSports.
      
**User:** ${dUser}
**Recruiter:** ${message.author}
**Extra Info:** ${dMessage}`)
    }

    module.exports.config = {
      name: "accept",
      description: "",
      usage: "!accept",
      accessableby: "Members",
      aliases: ['accept']
    }