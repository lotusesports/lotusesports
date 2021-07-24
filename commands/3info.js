const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Lotus eSports - Server Rules')
        .setDescription(`

        **1:** We do not allow anykind of toxic behaviour.
        **2:** Staff members are always allowed to correct you if you break any of our rules.
        **3:** Spamming, advertising, of any kind is not allowed in our server.
        **4:** We do not support game account / game sales in our discord.
        **5:** Racism is not allowed, and we will react on this with a perm ban.
        **6:** Do not blame / flame other players in our chats / voice chats.
        **7:** We do not allow NSFW content in our discord server.
        
        Full version of our rules:
        https://lotusesports.eu/rules.html

        Invite your friends with this Discord invite link.
        https://discord.gg/WHgCgtu3eA
        
        Check out our website:
        https://lotusesports.eu/index.html
        
        Donate page
        https://lotus-esports.tebex.io/category/1875259`)
        .setFooter('If you have any questions, please contact us in #support or tagg a staff member of choice..')
        .setColor('#665cff')

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "3info",
      description: "",
      usage: "!3info",
      accessableby: "Members",
      aliases: ['3', 'info']
    }