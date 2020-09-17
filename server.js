const Discord = require('discord.js');
const bot = new Discord.Client();
 
var bot = new Eris(process.env.token);
// Replace BOT_TOKEN with your bot account's token
 
bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});
 
 
bot.on('messageCreate', (msg) => {                     
    
	if (!msg.author.bot)
	{
		
	if(msg.content.includes('dog') || msg.content.includes('DOG') || msg.content.includes('Dog')  ) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'cat > dog');   
}, 500);
  }
		
	else if(msg.content.includes('cat')) {               
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'CAT');  
}, 2500);
  }
		
	else if(msg.content.includes('c a t') || msg.content.includes('Cat')|| msg.content.includes('CAT') ) {               
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'CAT');  
}, 500);
  }
		
	if(msg.content.includes('got scammed')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'L');  
}, 500);
  }
  
    if(msg.content.includes('YAH') || msg.content.includes('yah') || msg.content.includes('Yah')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'YAH');  
}, 500);
  }
	
	 if(msg.content.includes('@everyone') || msg.content.includes('@Member')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'bru');  
}, 500);
  }
  
  	 if(msg.content.includes('fortnite') || msg.content.includes('Fortnite') || msg.content.includes('Minecraft') || msg.content.includes('minecraft') || msg.content.includes('Terraria') || msg.content.includes('terraria') || msg.content.includes('LoL') || msg.content.includes('league of legends') || msg.content.includes('League of Legends') || msg.content.includes('League of legends')){                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'brawlhalla better');  
}, 500);
  }
	
	  if(msg.content.includes('m poor')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'just drop drag pet ez');  
}, 500);
  }
  
  	  if(msg.content.includes('animal') || msg.content.includes('Animal')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'cats>everything');  
}, 500);
  }
  
    if(msg.content.includes('BRAZIL') || msg.content.includes('brazil') || msg.content.includes('Brazil')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'BRAZIL');  
}, 500);
  }
	
	if(msg.content.includes('Angeli') || msg.content.includes('angeli') || msg.content.includes('ANGELI')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'ANGELI is DEAD');  
}, 500);
  }
  
  	if(msg.content.includes('god') || msg.content.includes('God') || msg.content.includes('GOD')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'I\'m god of cats');  
}, 500);
  }
	
	if(msg.content.includes('fragile ego')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'look whos talking');  
}, 500);
  }
	
	if(msg.content.includes('shadow legends') || msg.content.includes('Shadow Legends') || msg.content.includes('RAID')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'RAID: Shadow Legends™ is an immersive online experience with everything you\'d expect from a brand new RPG title. It\'s got an amazing storyline, awesome 3D graphics, giant boss fights, PVP battles, and hundreds of never before seen champions to collect and customize.I never expected to get this level of performance out of a mobile game. Look how crazy the level of detail is on these champions!RAID: Shadow Legends™ is getting big real fast, so you should definitely get in early. Starting now will give you a huge head start. There\'s also an upcoming Special Launch Tournament with crazy prizes! And not to mention, this game is absolutely free!So go ahead and check out the video description to find out more about RAID: Shadow Legends™. There, you will find a link to the store page and a special code to unlock all sorts of goodies. Using the special code, you can get 50,000 Silver immediately, and a FREE Epic Level Champion as part of the new players program, courtesy of course of the RAID: Shadow Legends™ devs.');  
}, 500);
  }
  
  	 if(msg.content.includes('italy') || msg.content.includes('Italy')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'i dont speak mafia');  
}, 500);
  }
	
	if(msg.content.includes('TNTnearchos')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'haha autoclickr');  
}, 500);
  }
  
  	if(msg.content.includes('boomer') || msg.content.includes('Boomer') || msg.content.includes('BOOMER')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'ok boomer');  
}, 500);
  }
  
    if(msg.content.includes('vnj') || msg.content.includes('Vnj') || msg.content.includes('VNJ')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, ':clown:');  
}, 500);
  }
  
    if(msg.content.includes('pog') || msg.content.includes('Pog') || msg.content.includes('POG')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'pog');  
}, 500);
  }
	
	if(msg.content.includes('k!help')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'no');  
}, 500);
  }
  
  	if(msg.content.includes('wanna do drag')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'lemme start my macro');  
}, 500);
  }
  
    if(msg.content.includes('suck') || msg.content.includes('SUCK')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'no u');  
}, 500);
  }
  
     if(msg.content.includes('donate to me') || msg.content.includes('Donate to me')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'https://vignette.wikia.nocookie.net/hypixel-skyblock/images/9/99/Ender_Armor.png');  
}, 500);
  }
	
	}
 });

 
bot.connect(); 