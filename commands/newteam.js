const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message) => {

        const logo = 'https://cdn.discordapp.com/attachments/562400670364336138/839979057092231168/logo.png'

        const embed = new Discord.MessageEmbed()
        .setTitle("**Welcome - New team**")
        .setDescription(`

        Welcome to Lotus eSports.
        You all have been selected to join a Lotus eSports team.
        We want to give you some starters information. Please take your time to read this message.
        
        **Rules**
        We made some rules to make sure that everything runs smooth. Here for we want to redirect you to our website. Please read our team related rules on the website.
        https://lotusesports.eu/rules.html
        
        **Organization**
        We made this team with 5 new lotus members. This means that all of u are joining a lotus team for the first time.
        One of you is going to be the team captain. You can deside with your team who that is going to be.
        The team captain is in direct contact with a Lotus staff member to tell us about your team status. Also he is responsible to contact lotus for roster changes / problems / ect.
        
        You also have a team manager.
        This is someone from Lotus, a person that will fix all the problems for you and your team.
        This staff member will introduce him / her self in your team chat.
        
        **Questions**
        If you have any questions please create a ticket in #support.
        If you think that you are miss placed or not in the right team, please make a ticket aswell.
        
        **How to start?**
        Please all start chatting in here.
        Start setting up a first training and play some games.
        If there is a person that wont match in the team, then let us know for a replacement.
        
        **LOTUS DISCLAIMER**
        - Use this discord for chatting / voice chatting with your team.
        - Do not be toxic towards team mebers.
        - Do not make a extern discord for your team.
        
        Breaking any of those rules will get you kicked out of lotus teams.
        Have fun with your team, 
        And we wish you the best of luck on the Rift.`)
        .setColor('#34eb55')
        .setThumbnail("https://cdn.discordapp.com/attachments/562400670364336138/864932600405819412/logo.png")

      message.channel.send(embed)
    }

    module.exports.config = {
      name: "newteam",
      description: "",
      usage: "!newteam",
      accessableby: "Members",
      aliases: ['4newteam', 'newteam']
    }