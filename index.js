const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    console.log(message.content);
    if (message.content === config.prefix + 'ping') {
        message.channel.send('Pong.');
    }
})

client.login(config.token);
