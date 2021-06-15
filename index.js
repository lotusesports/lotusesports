const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose');
const bot = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

const Levels = require('discord-xp')

mongoose.connect('mongodb+srv://juststeffx:broekzak@examplecluster.awmfj.mongodb.net/main',{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', function(){
    console.log('Database connection has been made');
}).on('error', function(error){
    console.log('error is:', error);
})

require('./utils/loadEvents')(bot);
Levels.setURL("mongodb+srv://juststeffx:broekzak@examplecluster.awmfj.mongodb.net/main")
const fs = require("fs");
const { reply } = require('canvacord/src/Canvacord');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.disbut = require('discord-buttons')(bot);
const prefix = '!';

fs.readdir("./commands/", (err, files) => {

    if(err) console,log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't find commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)
    
});

bot.login(process.env.token)