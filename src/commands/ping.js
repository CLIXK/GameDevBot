module.exports = {
    description: 'A simple ping command',
    help: {
        name: 'ping'
    },
    run(message) {
        message.channel.send(
            `Pong! \`\`${new Date().getTime() - message.createdTimestamp}ms\`\``
        );
    }
};
