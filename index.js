const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    
    const args = message.content.slice(prefix.length).trim().split('/ +/');
    const command = args.shift().toLowerCase();


    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    } else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send('Boop.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    } else if (command === `args-info`) {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}`);
        }
        else if (args[0] === `foo`) {
            return message.channel.send('bar');
        }

        message.channel.send(`First argument: ${args[0]}`);
    } else if (message.content.startsWith(`${prefix}wave`)) {
        const taggedUser = message.mentions.users.first();

        if (!message.mentions.users.size) {
            
            return message.reply('you need to tag a user in order to wave at them.');
        }

        message.channel.send(`Waving at : ${taggedUser.username}`);
    }
})

client.login(token);
