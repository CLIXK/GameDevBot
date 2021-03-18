const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log('Bot online');

    fs.readdir('./commands', (err, files) => {
        if (err) return console.log(err);

        const jsfile = files.filter((f) => f.split('.').pop() == 'js');

        if (jsfile.length <= 0) return console.log('Could not find commands!');

        jsfile.forEach((f) => {
            const props = require(`./commands/${f}`);
            bot.commands.set(props.help.name, props);
        });
    });
});

bot.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;
    const prefix = '!';
    // hello there ['hello', 'there']
    // !ban user reason ['user', 'reason']
    // Breaking Rules ['breaking', 'rules'] breaking rules
    // hello
    const MessageArray = message.content.split(' ');
    const cmd = MessageArray[0].slice(prefix.length);
    const args = MessageArray.slice(1);

    if (!message.content.startsWith(prefix)) return;

    const commandfile = bot.commands.get(cmd);
    if (commandfile) {
        commandfile.run(bot, message, args);
    }
});

bot.login('ODE4NTczNTI4ODcyOTEwODQ5.YEaCAQ.WB_kUQcSnP2IWeqEo1bJohJr7bo');
