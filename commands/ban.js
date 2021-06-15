const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args, guild) => {
  let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");

      message.delete().catch(err => console.log(err));

    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setTitle("Command: ban")
        .setDescription(
          `**Description:** Ban a member, optional time limit. \n` +
            "**Sub Commands:**\n" +
            "-ban save | Ban a user and save their messages in chat. \n" +
            "**Usage:**\n" +
            "-ban [user] (limit) (reason) \n" +
            "-ban save [user] (limit) (reason) \n" +
            "**Examples:** \n" +
            "-ban <@597253939469221891> 48h spam \n" +
            "-ban save <@597253939469221891> 48h spam "
        )
          .setColor("#9614c9")
      message.channel.send(baninfoembed);
  
      return;
    }
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
          .setTitle(`Lotus Moderation`)
          .setDescription(`You can't ban your self.`)
          .setColor("#9614c9")
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
        let noreasonembed = new Discord.MessageEmbed()
        .setTitle(`Lotus Moderation`)
        .setDescription(`Provide a ban reason.`)
        .setColor("#9614c9")
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("BAN_MEMBERS")) {
        let nopermsembed = new Discord.MessageEmbed()
        .setTitle(`Lotus Moderation`)
        .setDescription(
          "Nop, you are not a moderator!"
        )
          .setColor("#66f3c9")
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
          .setDescription(
            "Nop, you are not a moderator!"
        )
          .setColor("#66f3c9")
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.members.ban(banned, { reason: reason });
  
    let successfullyembed = new Discord.MessageEmbed()
        .setColor("#a539a8")
        .setTitle(`${banned.tag} Lotus Moderation`)
        .setDescription(`**Banned user:** ${banned.tag}
        **Banned by:** ${message.author}
        **Reason:** ${reason}`)
  
    message.channel.send(successfullyembed);
  
    }

    module.exports.config = {
      name: "ban",
      description: "",
      usage: "!ban",
      accessableby: "Members",
      aliases: ['ban']
    }