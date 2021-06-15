const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const logo = 'https://cdn.discordapp.com/attachments/562400670364336138/839979057092231168/logo.png'

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Events')
        .setDescription(`

        We also host alot of events.
        You can expect events like:
        - Tournaments Online
        - Tournaments Offline
        - Lan Partys
        - Live coaching
        - Epic 1v1
        - Epic 5v5
        - Gaming Gatherings
        
        Ofcourse, You are not obligated to join those events.
        But you are more then welcome to join in for free.
        All our events are eather sponsored or payed by our staff members.
        We do not expect you to pay for our event services in any way.`)
        .setColor('#985cff')
        .setFooter('You are allowed to sign up for free! We will announce a new event in our discord. Please create a ticket if you have any questions.')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "1info",
      description: "info 1",
      usage: "!1info",
      accessableby: "Members",
      aliases: ['1', 'info']
    }