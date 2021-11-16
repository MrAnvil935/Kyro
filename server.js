const Eris = require("eris");
 
var bot = new Eris(process.env.token);

 var status = "dnd"
var game = new Object();
game.name = 'Super Hentai'
 
bot.on("ready", () => {
bot.editStatus(status, game);
console.log("Ready!");
});
 

 
bot.on('messageCreate', (msg) => {                     
    
	
	if (msg.author.id != '755098192038854686')
	{
		
		
		
	if(msg.content.includes('yah') && msg.content.includes('fortnite')&& msg.content.includes('angeli') && msg.content.includes('animal'))
         { bot.createMessage(msg.channel.id, 'fuck off'); }	
		
		else 
		{	
	var y =(Math.floor((Math.random() * 4000) + 1))	
	if (y==97 || y==98 || y==99 || y==100)
	   {bot.createMessage(msg.channel.id, 'I got drag pet');  }	

        var k =(Math.floor((Math.random() * 100) + 1))	
	if (k==69)
	   {bot.createMessage(msg.channel.id, '<a:pcat:788895948675874866>');  }	

	if (msg.channel.id != '806105660722774016') {		
        var j =(Math.floor((Math.random() * 3000) + 1))	
	if (j==69)
	{  
	var h =(Math.floor((Math.random() * 2) + 1))	
          if (h==2) {bot.createMessage(msg.channel.id, 'https://youtu.be/mlbch74sfG4');  }
	  else {bot.createMessage(msg.channel.id, 'https://youtu.be/FljGi6jzDmM');  }
	}}
					
			
	var c =(Math.floor((Math.random() * 5000) + 1))	
	if (c==420)
	   {bot.createMessage(msg.channel.id, 'CRAZY RARE DROP! (Real Life) (-420 Magic Find!)');  }

	var m =(Math.floor((Math.random() * 2000) + 1))	
	if (m==42)
	   {bot.createMessage(msg.channel.id, 'k');  }
		
	if(msg.content.toLowerCase().includes('dog')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'cat > dog');   
}, 500);
  }
  
    else if (msg.channel.id != '677876231609253914') {
    if((msg.content === 't!cat')) {  
  var c =(Math.floor((Math.random() * 100) + 1))            
       setTimeout(function(){ 
	   
	     if (c==69 || c==50)
	   {bot.createMessage(msg.channel.id, 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT');  }
       
	   else if (c>75) {
	   bot.createMessage(msg.channel.id, 'CAAAT');  }
       
	   else { bot.createMessage(msg.channel.id, 'CAT');}
}, 2500);
	}}
		
	if ((msg.content != 't!cat')) { 	
	if(msg.content.toLowerCase().includes('c a t') || msg.content.toLowerCase().includes(' cat') || msg.content.toLowerCase().startsWith('cat')) {  
   if(msg.content.toLowerCase().includes('cata') || msg.content.toLowerCase().includes('dog') ) {}
   else {
   if (msg.channel.id != '677876231609253914') {	
   var c =(Math.floor((Math.random() * 100) + 1))		
       setTimeout(function(){ 
	      
		  if (c==10)
 {bot.createMessage(msg.channel.id, 'https://cdn.discordapp.com/attachments/755753210974830634/784850146104967208/kbvoro3xk7361.png');  }	
     
	 if (c==69 || c==50)
	   {bot.createMessage(msg.channel.id, 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT');  }
     
		   else if (c>75) 
		   {bot.createMessage(msg.channel.id, 'CAAAT');  }
      
	  else { bot.createMessage(msg.channel.id, 'CAT');}
}, 500);
	}}}}
	
	if(msg.content.toLowerCase().includes('got scammed')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'L');  
}, 500);
  }
  
	if(msg.content.toLowerCase().includes('is dropping') || msg.content.toLowerCase().includes('m dropping')) {                 
       setTimeout(function(){ 
    bot.addMessageReaction(msg.channel.id, msg.id, "TrolleadorCara:792338470898499584")
}, 3000);
  }					
			
  if (msg.channel.id != '677876231609253914') {
    if(msg.content.toLowerCase().includes('yah')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'YAH');  
}, 500);
  }}


   if(msg.content.toLowerCase().includes('stfu kyro') ||  msg.content.toLowerCase().includes('shut up kyro') || msg.content.toLowerCase().includes('fuck up kyro')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'no');  
}, 500);
  }
	
	  if (!msg.author.bot) {
	 if(msg.content.includes('@755098192038854686') || msg.content.includes('@everyone')) { 
  var p =(Math.floor((Math.random() * 5) + 1))
       setTimeout(function(){  
	if (p==4) {
	bot.createMessage(msg.channel.id, 'fuck off with pings');}
	else {
        if (p==3) {
	bot.createMessage(msg.channel.id, 'https://cdn.discordapp.com/attachments/772883786517315613/772883815324319794/IMG_20201102_190332.jpg');}
	else {       
    bot.createMessage(msg.channel.id, 'bru');  }}
}, 500);
  }}

	  
	 if(msg.content.toLowerCase().includes('rgb')) { 
  var rgbd =(Math.floor((Math.random() * 3) + 1))
       setTimeout(function(){  
	if (rgbd==3) {
	bot.createMessage(msg.channel.id, '<a:cocaine:886341039273693214>');}
	else {
        if (rgbd==2) {
	bot.createMessage(msg.channel.id, '<a:rgbcat:886341087499812894>');}
	else {       
    bot.createMessage(msg.channel.id, '<a:rgbwave:886341055665037362><a:rgbwave:886341055665037362><a:rgbwave:886341055665037362><a:rgbwave:886341055665037362><a:rgbwave:886341055665037362><a:rgbwave:886341055665037362><a:rgbwave:886341055665037362><a:rgbwave:886341055665037362>');  }}
}, 500);
  			
			
	 if(msg.content.includes('@everyone') || msg.content.includes('@!470582170151550977') || msg.content.includes('@470582170151550977')) {                 
       setTimeout(function(){  
    bot.createMessage(msg.channel.id, 'bru');  
}, 500);
  }
	  }
  
if(msg.content.startsWith('ME')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'Ye');  
}, 500);
  }	
			
if(msg.content.toLowerCase().includes('egrill') || msg.content.toLowerCase().includes('egirl')) {                 
       setTimeout(function(){ 
   bot.addMessageReaction(msg.channel.id, msg.id, "egrill:792107202994372628")
}, 500);
  }	

if(msg.content.toLowerCase() === 'bruh' || msg.content.toLowerCase() === 'bru') {                 
       setTimeout(function(){ 
   bot.addMessageReaction(msg.channel.id, msg.id, "bruh:783813323543937034")
}, 300);
  }				

  if (msg.channel.id != '677876231609253914') {
  	 if(msg.content.toLowerCase().includes('fortnite') || msg.content.toLowerCase().includes('minecraft') ||  msg.content.toLowerCase().includes('terraria') || msg.content.includes('LoL') || msg.content.toLowerCase().includes('league of legends')){                 
    var t =(Math.floor((Math.random() * 3) + 1))
	 if (t==2){
    setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'brawlhalla better');  
}, 500);
  }}}
	
	  if(msg.content.toLowerCase().includes('m poor')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'just drop drag pet ez');  
}, 500);
  }
			
	  if(msg.content.toLowerCase().includes('have friend')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'like me');  
}, 500);
  }	

if (msg.author.id == '394489126310641664')	{	
 var w =(Math.floor((Math.random() * 5) + 1))
	if (w==3){
 setTimeout(function(){ 
    bot.addMessageReaction(msg.channel.id, msg.id, "🐋")
}, 500);		
}}

if (msg.author.id == '666000579692331018')	{	
 var w =(Math.floor((Math.random() * 5) + 1))
	if (w==3){
 setTimeout(function(){ 
    bot.addMessageReaction(msg.channel.id, msg.id, "🏳️‍🌈")
}, 500);		
}}

if(msg.content.toLowerCase().includes('fuck off tori')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, '!ban <@512671815928119296>');  
}, 500);
  }

if (msg.author.id == '670769970396790795')	{	
 var w =(Math.floor((Math.random() * 6) + 1))
	if (w==2){
 setTimeout(function(){ 
    bot.addMessageReaction(msg.channel.id, msg.id, "trap:787809715417251856")
}, 500);		
}}
			
  if(msg.content.startsWith('YOU')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'Nope you');  
}, 500);
  }	
  
  if (msg.channel.id != '677876231609253914') {
	  var x =(Math.floor((Math.random() * 10) + 1))
	  if (x<4) {
  	  if(msg.content.toLowerCase().includes('animal')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'cats>everything');  
}, 500);
  }}}
  
  if (msg.channel.id != '677876231609253914') {
    if(msg.content.toLowerCase().includes('brazil')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'BRAZIL');  
}, 500);
  }}
	
	if(msg.content.toLowerCase().startsWith('angeli') || msg.content.toLowerCase().includes(' angeli')) {                 
       	  var x =(Math.floor((Math.random() * 10) + 1))
	  if (x<5) {
	   setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'ANGELI is DEAD');  
}, 500);
	}}
			
	if(msg.content.toLowerCase().includes('brawlhalla')) {                 
	   setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'Super Hentai better');  
}, 500);
	}		
  
  if (msg.channel.id != '677876231609253914') {
	  var x =(Math.floor((Math.random() * 10) + 1))
	  if (x<3) {
  	if(msg.content.toLowerCase().includes('god')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'I\'m god of cats');  
}, 500);
  }}}
	
	if(msg.content.toLowerCase().includes('fragile ego')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'look whos talking');  
}, 500);
  }


	if(msg.content.toLowerCase().includes('nefersit')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, '!ban <@563397766324420608>');  
}, 300);
  }
	
   if (msg.channel.id != '677876231609253914') {	
	if(msg.content.toLowerCase().includes('shadow legends') || msg.content.includes('RAID')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'RAID: Shadow Legends™ is an immersive online experience with everything you\'d expect from a brand new RPG title. It\'s got an amazing storyline, awesome 3D graphics, giant boss fights, PVP battles, and hundreds of never before seen champions to collect and customize.I never expected to get this level of performance out of a mobile game. Look how crazy the level of detail is on these champions!RAID: Shadow Legends™ is getting big real fast, so you should definitely get in early. Starting now will give you a huge head start. There\'s also an upcoming Special Launch Tournament with crazy prizes! And not to mention, this game is absolutely free!So go ahead and check out the video description to find out more about RAID: Shadow Legends™. There, you will find a link to the store page and a special code to unlock all sorts of goodies. Using the special code, you can get 50,000 Silver immediately, and a FREE Epic Level Champion as part of the new players program, courtesy of course of the RAID: Shadow Legends™ devs.');  
}, 500);
  }} 
  
  	 if(msg.content.toLowerCase().includes('italy')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'i dont speak mafia');  
}, 500);
  }
 var toyota =(Math.floor((Math.random() * 2) + 1))	
	if (toyota==2) {
  	 if(msg.content.toLowerCase().includes('toyota')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'https://cdn.discordapp.com/attachments/617120220661678080/819760815120711720/Toyota144P_1.mp4');  
}, 500);
  }}

 var xd =(Math.floor((Math.random() * 8) + 1))	
	if (xd==2) {
  	 if(msg.content.toLowerCase().includes('xd')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'XDXDXDXDXDXDXDXDXDXDXDXDXDXDXDXD');  
}, 500);
  }}
			
  	 if(msg.content.toLowerCase().includes('t have life')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'same');  
}, 500);
  }			
	
  	if(msg.content.toLowerCase().includes('anime bad')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'you bad');  
}, 500);
  }
	if (msg.channel.id != '677876231609253914') {
	if(msg.content.toLowerCase().includes('tntnearchos')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'haha autoclickr');  
}, 500);
	}}
  
  if (msg.channel.id != '677876231609253914') {
	  var x =(Math.floor((Math.random() * 10) + 1))
	  if (x<6) {
  	if(msg.content.toLowerCase().includes('boomer')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'ok boomer');  
}, 500);
  }}}
  
  if (msg.channel.id != '677876231609253914') {
    if(msg.content.toLowerCase().includes('vnj')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, ':clown:');  
}, 500);
  }}
  
  if (msg.channel.id != '677876231609253914') {
	  var y =(Math.floor((Math.random() * 10) + 1))
	  if (y<6) {
    if(msg.content.toLowerCase().includes('pog')) {     
 var x =(Math.floor((Math.random() * 100) + 1))	
       setTimeout(function(){ 
       if (x==69)
	   {bot.createMessage(msg.channel.id, 'POOOOOOOOOOOG');  }
       else {
	   if (x>75) {
	   bot.createMessage(msg.channel.id, 'POG');  }
       else { bot.createMessage(msg.channel.id, 'pog');}}
}, 500);
  }}}
	
	if (msg.channel.id != '677876231609253914') {
	if(msg.content.toLowerCase().includes ('kyro gib key words')) {                 
       var k =(Math.floor((Math.random() * 50) + 1))
	   setTimeout(function(){ 
	   if (k==33)
	   {bot.createMessage(msg.channel.id, 'Key words: cat, dog, got scammed, bruh, yah, what drop, @ ping, macro, egirl, toyota, xd, rgb, ping tnt, genshin, no, nefersit, gay, fortnite, fuck off tori, cock, puta, I\'m poor, animal, Brazil, angeli, ping tori, anime bad, padoru, god, fragile ego, RAID Shadow Legends, Brawlhalla, Italy, OwO , TNTnearchos, boomer, vnj, ME, YOU, have friend, pog, wanna do drag, suck, superior, gojo, stfu Kyro, donate to me, what drag');  }
       else {
	   bot.createMessage(msg.channel.id, 'no');  }
}, 500);
	}}
  
  
  	if(msg.content.toLowerCase().includes('wanna do drag')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'lemme start my macro');  
}, 500);
  }
			
    if(msg.content.toLowerCase().includes(' puta') || msg.content.toLowerCase().startsWith('puta')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'no u');  
}, 500);
  }			
  
  if (msg.channel.id != '677876231609253914') {
	  var x =(Math.floor((Math.random() * 10) + 1))
	  if (x<6) {
    if(msg.content.toLowerCase().includes('suck')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'no u');  
}, 500);
  }}}
  
     if(msg.content.toLowerCase().includes('donate to me')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'https://vignette.wikia.nocookie.net/hypixel-skyblock/images/9/99/Ender_Armor.png');  
}, 500);
  }

if(msg.content.toLowerCase().includes('gay')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'https://media.discordapp.net/attachments/755753210974830634/907656500787425330/IMG_20211109_164238.jpg');  
}, 500);
  }

  if (msg.author.id != '470582170151550977') {
 var gojo =(Math.floor((Math.random() * 8) + 1))	
	if (gojo==2) {
     if(msg.content.toLowerCase().includes('gojo')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'E2 P13 GOJO hpltfz FS DM ME');  
}, 500);
  }}}

 	 if(msg.content.toLowerCase().includes('cock') || msg.content.toLowerCase().includes('penis') ) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'cock lol');  
}, 500);
  }

 	 if(msg.content.toLowerCase().includes('ping tnt')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, '<@221381845739110402>');  
}, 500);
  }

if(msg.content.toLowerCase().includes('ping tori')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, '<@512671815928119296>');  
}, 500);
  }

     if(msg.content.toLowerCase().includes('macro')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'https://cdn.discordapp.com/attachments/756401543397245018/808795891192299550/angeli.png');  
}, 500);
  }

if(msg.content.toLowerCase().includes('padoru')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'https://media.discordapp.net/attachments/692723580118499349/909106815206309888/padoru.gif');  
}, 500);
  }
	
if(msg.content.toLowerCase().includes('genshin')) {  	
   var gen =(Math.floor((Math.random() * 3) + 1))	
	if (gen==2)	
{bot.createMessage(msg.channel.id, 'genshin sucks');  }	
}

if (msg.content.toLowerCase().startsWith('now')) {}
else {
if(msg.content.toLowerCase().startsWith('no')) {    
var nope=(Math.floor((Math.random() * 4) + 1))	
	if (nope==2)	
{bot.createMessage(msg.channel.id, '**NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO**');  }	
}}
	
if(msg.content.toLowerCase().includes(' ok') || msg.content.toLowerCase().startsWith('ok')) {  	
   var ook =(Math.floor((Math.random() * 5) + 1))	
	if (ook==3)	
{bot.createMessage(msg.channel.id, '<:kk:827146082542157825>');  }	
}

  
  if (msg.channel.id != '677876231609253914') {
      if(msg.content.toLowerCase().includes('what drag')) {     
if (msg.author.id == '470582170151550977') {
	bot.createMessage(msg.channel.id, 'superior :D')}
else {			  
	      var x =(Math.floor((Math.random() * 100) + 1))	
       setTimeout(function(){ 
       if (x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8 || x==9 || x==10 || x==11 || x==12 || x==13 || x==14 || x==15 || x==16)
	   {bot.createMessage(msg.channel.id, 'protector');  }
       if (x==17 || x==18 || x==19 || x==20 || x==21 || x==22 || x==23 || x==24 || x==25 || x==26 || x==27 || x==28 || x==29 || x==30 || x==31 || x==32)
	   {bot.createMessage(msg.channel.id, 'old');  }
       if (x==33 || x==34 || x==35 || x==36 || x==37 || x==38 || x==39 || x==40 || x==41 || x==42 || x==43 || x==44 || x==45 || x==46 || x==47 || x==48)
	   {bot.createMessage(msg.channel.id, 'unstable');  }
       if (x==49 || x==50 || x==51 || x==52 || x==53 || x==54 || x==55 || x==56 || x==57 || x==58 || x==59 || x==60 || x==61 || x==62 || x==63 || x==64)
	   {bot.createMessage(msg.channel.id, 'wise');  }
       if (x==65 || x==66 || x==67 || x==68 || x==69 || x==70 || x==71 || x==72 || x==73 || x==74 || x==75 || x==76 || x==77 || x==78 || x==79 || x==80)
	   {bot.createMessage(msg.channel.id, 'young');  }
       if (x==81 || x==82 || x==83 || x==84 || x==85 || x==86 || x==87 || x==88 || x==89 || x==90 || x==91 || x==92 || x==93 || x==94 || x==95 || x==96)
	   {bot.createMessage(msg.channel.id, 'strong');  }
	   if (x==97 || x==98 || x==99 || x==100)
	   {bot.createMessage(msg.channel.id, 'superior :D');  }
      
}, 500);
  }}}
						
  
   if(msg.content.toLowerCase().includes('what drag')) {}			
   else {
if (msg.content.toLowerCase().includes('superior')) {                 
       var x =(Math.floor((Math.random() * 10) + 1))
	  if (x<4) {
	   if (msg.channel.id != '677876231609253914') {	
	   setTimeout(function(){ 
    bot.createMessage(msg.channel.id, 'superior? warp meee');  
}, 500);
	  }}}}
if (msg.author.id != '408785106942164992')	{
  if (msg.channel.id != '677876231609253914') {
if(msg.content.toLowerCase().includes('owo') || msg.content.toLowerCase().includes('uwu') || msg.content.toLowerCase().includes('meow'))       {         
       var x =(Math.floor((Math.random() * 10) + 1))
	   setTimeout(function(){ 
	   if (x==1)
	   {bot.createMessage(msg.channel.id, '```=^._.^= ∫```');  }
       if (x==2)
	   {bot.createMessage(msg.channel.id, '```(=^･ω･^=)```');  }
       if (x==3)
	   {bot.createMessage(msg.channel.id, '```/ᐠ｡ꞈ｡ᐟ\\ ```');  }
       if (x==4)
	   {bot.createMessage(msg.channel.id, '```[^._.^]ﾉ彡```');  }
	   if (x==5)
	   {bot.createMessage(msg.channel.id, '```—ฅ/ᐠ. ̫ .ᐟ\\ฅ —```');  }
       if (x==6)
	   {bot.createMessage(msg.channel.id, '```/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷ```');  }
       if (x==7)
	   {bot.createMessage(msg.channel.id, '```/ᐠﹷ ‸ ﹷ ᐟ\\ﾉ```');  }
       if (x==8)
	   {bot.createMessage(msg.channel.id, '```(ﾐΦ ﻌ Φﾐ)∫```');  }
       if (x==9)
	   {bot.createMessage(msg.channel.id, '```/ᐠ=ᆽ=ᐟ \\ ```');  }
       if (x==10)
	   {bot.createMessage(msg.channel.id, '```ᨐᵉᵒʷ ```');  }
   
}, 500);
  }}}
			
     if(msg.content.toLowerCase().includes('k_test')) {                 
       setTimeout(function(){ 
    bot.createMessage(msg.channel.id.tts, 'Kyro moment');  
}, 500);
  }
						
			
			
if(msg.content.startsWith('k_secret_keyword')) {                 
       setTimeout(function(){ 
bot.createMessage(msg.channel.id, '\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n');  
bot.createMessage(msg.channel.id, '\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n');  
bot.createMessage(msg.channel.id, '\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n_ _\n\n');  
}, 500);
  }	


if(msg.content.toLowerCase().includes('what drop')) {	
if (msg.author.id == '470582170151550977') 
 {bot.createMessage(msg.channel.id, 'pet :D');  }
else{		  
	      var dd =(Math.floor((Math.random() * 950) + 1))	
       setTimeout(function(){ 
       if (dd == 1)
	   {bot.createMessage(msg.channel.id, 'pet :D');  }
       if (dd > 1 && dd <= 50  )
	   {bot.createMessage(msg.channel.id, 'aotd');  }
       if (dd > 50 && dd <= 250  )
	   {bot.createMessage(msg.channel.id, 'leggings');  }
       if (dd > 250 && dd <= 400  )
	   {bot.createMessage(msg.channel.id, 'chest');  }
       if (dd > 400 && dd <= 650  )
	   {bot.createMessage(msg.channel.id, 'boots');  }
       if (dd > 650 && dd <= 850  )
	   {bot.createMessage(msg.channel.id, 'helmet');  }
       if (dd > 850 && dd <= 950  )
	   {bot.createMessage(msg.channel.id, 'frags');  }
   
      
}, 500);
}}				
	
		}}


if (msg.author.id == '755098192038854686')	{

if(msg.content.toLowerCase().includes('frags')) { 
bot.addMessageReaction(msg.channel.id, msg.id, "🤡")}
	
if(msg.content.toLowerCase().includes('!ban <@512671815928119296>')) { 
    bot.addMessageReaction(msg.channel.id, msg.id, "troll:909449186569777162")}
}

 }


);

 

 
bot.connect(); 
