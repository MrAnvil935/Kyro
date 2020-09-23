const Eris = require("eris");
 
var client = new Eris(process.env.token);
// Replace BOT_TOKEN with your bot account's token
 
client.on("ready", () => { // When the bot is ready
console.log("Ready!"); // Log "Ready!"
});
 

 
client.on('messageCreate', (msg) => {                     
    
	
	if (!msg.author.bot)
	{
		
		
  
  if (msg.channel.id != '677876231609253914') {
    if(msg.content.includes('YAH') || msg.content.includes('yah') || msg.content.includes('Yah')) {                 
       setTimeout(function(){ 
    client.createMessage(msg.channel.id, 'YAH');  
}, 500);
  }}
	
	
		
 });

 
client.connect(); 
