//Our first move it declare the constants of Discord and client. *Obligatory*
const Discord = require ('discord.js') // To import the discord.js expresions and functions
const client = new Discord.Client() // This is how we talk to the "bot"

const { token } = require('./config.json') // The token of the bot. Be careful with this password, any that have it can control the bot.
// We require the token from a external file to have it secured.

const prefix = "!"

client.on('ready', () => { // The console return a string when the bot is online.
    console.log('Hello Master')
})

client.on('message', message =>{ // The bot can "hear" our messages
    
    if (!message.content.startsWith(prefix) || message.author.bot) return; // The bot only take the messages that starts with the prefix (!) or+
    // the messages that the bot isn't the author
  
      const args = message.content.slice(prefix.length).split(/ +/)
      const command = args.shift().toLowerCase() 
  
  if (command === 'ping') { // if the message is "ping" the bot send "pong" message
    
    message.channel.send("pong") // "message.channel.send" refer to send a message in the same channel that the command was send
  
  }

})

client.login(token) // The bot sign in with it password
