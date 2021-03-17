// 🎮[Untitled Game Project]
// 📔game-info
// 🧰dev-updates
// 💬dev-discussion
// 📝task-and-deadlines
// ✍dev-review
// 🕷known-bugs
// ║「🔊」Voice
// message.guild.channels.create('Category', { type: 'category' });

exports.run = async (bot,message,args) => {

    if(!args[0]) return message.channel.send("Did not specify the name of the project!");

    let channel = await message.guild.channels.create(`🎮${args[0]}`, {
                type: 'category',
                position: 1,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    }]
            }).then(cat => {              
                message.guild.channels.create('📔game-info', {
                    type: 'text',
                    parent: cat,
                    topic: `Everything you need to know about ${args[0]}`,
                    permissionOverwrites: [
                        {
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                        }]
                })
                message.guild.channels.create('🧰dev-updates', {
                    type: 'text',
                    parent: cat,
                    topic: `Development updates will be shared here including external links, screenshots and GIFs for ${args[0]}`,
                    permissionOverwrites: [
                        {
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                        }]  
                })
                message.guild.channels.create('💬dev-discussion', {
                    type: 'text',
                    parent: cat,
                    topic: `Development discussion for ${args[0]}`,
                    permissionOverwrites: [
                        {
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                        }]
                })
                message.guild.channels.create('📝task-and-deadlines', {
                    type: 'text',
                    parent: cat,
                    topic: `Find and report on task and deadlines for ${args[0]}`,                    
                    permissionOverwrites: [
                        {
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                        }]
                })
                message.guild.channels.create('✍dev-review', {
                    type: 'text',
                    parent: cat,
                    topic: `Review development here for ${args[0]}`,
                    permissionOverwrites: [
                        {
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                        }]
                })          
                message.guild.channels.create('🕷known-bugs', {
                    type: 'text',
                    parent: cat,
                    topic: `Report and discuss found bugs for ${args[0]}`,
                    permissionOverwrites: [
                        {
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                        }]
                })
                message.guild.channels.create('║「🔊」Voice', {
                    type: 'voice',
                    parent: cat,
                    permissionOverwrites: [
                        {
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                        }]
                })                                                                     
            })

    message.channel.send(`Your project: ${args[0]} has started!`)
}


exports.help = {
    name: 'start'
}