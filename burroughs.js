//Our first move it declare the constants of Discord and client. *Obligatory*
const Discord = require ('discord.js') // To import the discord.js expresions and functions
const client = new Discord.Client() // This is how we talk to the "bot"

const { token } = require('./config.json') // The token of the bot. Be careful with this password, any that have it can control the bot.
// We require the token from a external file to have it secured.

client.on('ready', () => { // Whit this code the console return a string when the bot is online.
    console.log('Hello Master')
})

client.login(token) // The bot sign in with it password
