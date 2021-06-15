const Discord = require('discord.js')
const Levels = require("discord-xp")
const canvacord = require("canvacord")

module.exports.run = async (bot, message, args) => {
    const target = message.mentions.users.first() || message.author;

    const user = await Levels.fetch(target.id, message.guild.id);

    if (!user) return message.reply("You dont have xp. Try to send some messages.");

    const rank = new canvacord.Rank()
    .setAvatar(message.author.displayAvatarURL({dynamic: false, format: 'png' }))
    .setCurrentXP(user.xp)
    .setLevel(user.level)
    .setStatus(message.member.presence.status)
    .setProgressBar('#FFA500', "COLOR")
    .setUsername(message.author.username)
    .setDiscriminator('0001')
    rank.build()
    .then(data => {
        const attatchment = new Discord.MessageAttachment(data, 'funny.png')
        message.channel.send(attatchment);
        
    })
}


module.exports.config = {
    name: "rank",
    aliases: ['rank']
}