const { MessageEmbed, MessageCollector } = require('discord.js');
const TicketData = require('../models/TicketData');

module.exports.run = async (bot, message, args) => {
    let ticketData = await TicketData.findOne({ GuildID: message.guild.id });
    if (!message.member.hasPermission('MANAGE_GUILD')) {
        return message.channel.send('You are missing permissions! You must have the **MANAGE_SERVER** permission.');
    }
    
    if (!ticketData) {
        const firstEmbed = new MessageEmbed()
            .setTitle('Ticket System Setup')
            .setDescription('What do you want the embed description to be?')
            .setColor('BLUE');
        let firstMsg = await message.channel.send(firstEmbed);

        const firstFilter = m => m.author.id === message.author.id;
        const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 2 });

        let embedDescription;

        firstCollector.on('collect', async msg => {
            embedDescription = msg.content;
            const secondEmbed = new MessageEmbed()
                .setTitle('Ticket System Setup')
                .setDescription('Where do you want to send the message? Please mention a channel.')
                .setColor('BLUE');
            msg.channel.send(secondEmbed);
            firstCollector.stop();

            const secondFilter = m => m.author.id === message.author.id;
            const secondCollector = new MessageCollector(message.channel, secondFilter, { max: 2 });

            secondCollector.on('collect', async msg => {
                let embedChannel = msg.mentions.channels.first();
                if (!embedChannel) {
                    msg.channel.send('That is not a valid channel! Please try again.');
                    secondCollector.stop();
                    return;
                }

                const thirdEmbed = new MessageEmbed()
                    .setTitle('Ticket System Setup')
                    .setDescription('What roles do you want to have access to see tickets? Please provide a role name, mention, or ID.')
                    .setColor('BLUE');
                msg.channel.send(thirdEmbed);
                secondCollector.stop();

                const thirdFilter = m => m.author.id === message.author.id;
                const thirdCollector = new MessageCollector(message.channel, thirdFilter, { max: 2 });

                thirdCollector.on('collect', async message => {
                    let savedRole = message.mentions.roles.first() || message.guild.roles.cache.get(message.content) || message.guild.roles.cache.find(role => role.name.toLowerCase() === message.content.toLowerCase());

                    if (!savedRole) {
                        msg.channel.send('That is not a valid role! Please try again.');
                        thirdCollector.stop();
                        return;
                    }

                    const fourthEmbed = new MessageEmbed()
                        .setTitle('Ticket System Setup')
                        .setDescription('The setup is now finished!')
                        .setColor('BLUE');
                    await msg.channel.send(fourthEmbed);
                    thirdCollector.stop();

                    await createTicketSystem(ticketData, embedDescription, embedChannel, message, savedRole)
                });
            });
        });
    } else {
        await TicketData.findOneAndRemove({
            GuildID: message.guild.id
        });
        message.channel.send(`**Successfuly Reset the Ticket System on your Server!**\npls use this command again to re-setup!`);
    }
}

module.exports.config = {
    name: "ticket-setup",
    description: "Set up a ticket system for your server!",
    usage: 'ticket-setup',
    accessableby: "MANAGE_GUILD",
    aliases: []
}

async function createTicketSystem(ticketData, embedDescription, embedChannel, message, savedRole) {
    const sendEmbed = new MessageEmbed()
        .setTitle('Lotus Support')
        .setDescription(embedDescription)
        .setThumbnail('https://cdn.discordapp.com/attachments/562400670364336138/839979057092231168/logo.png')
        .setColor('#8f34eb');

    let msg = await embedChannel.send(sendEmbed);
    await msg.react('✉️');

    const newData = new TicketData({
        GuildID: message.guild.id,
        MessageID: msg.id,
        TicketNumber: 0,
        WhitelistedRole: savedRole.id
    });
    newData.save();
}
