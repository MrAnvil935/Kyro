// Load discord.js
var Discord = require("discord.js");

// Create a client
var bot = new Discord.Client();

// This code will run once the bot has started up.
bot.on("ready", function () {
	bot.user.setPresence({
    status: 'dnd',
})
	console.log("Ready to begin! Serving in " + bot.channels.length + " channels");
});


// This code will run once the bot receives any message.
bot.on('message', message => {
  if (message.content === 'kping') {  
    message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms`);
  }
});

// Login (replace these auth details with your bot's)
bot.login(process.env.token);
