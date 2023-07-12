const Discord = require('discord.js');
const client = new Discord.Client();
const { token , prefix } = require('./ayarlar.json')
 
client.on('ready', () => { 
console.log('-----------------------------------------'); 
console.log(`${client.user.tag} adıyla giriş yapıldı!`);
console.log('-----------------------------------------'); 
});


client.on('message', message => {
if (message.content === 'ping') { 
      message.reply('Ping: ' + client.ws.ping);
    }
});
client.on('message', message => {
    if (message.content === 'Merhaba') { 
          message.reply('Merhabalar Hoşgeldin ☺');
        }
    });

client.login(token);