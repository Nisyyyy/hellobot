const fetch = require("node-fetch");
const fs = require('fs');
const ms = require('ms');
const os = require('os')
const cpuStat = require("cpu-stat");
const PREFIX = "!";
const Discord = require ("discord.js");
const bot = new Discord.Client
const moment = require("moment");
const search = require('random-puppy');
const puppy = require('random-puppy');
const botbuilder = require ("botbuilder");
const restify = require('restify');

bot.on("ready", function()  {
    console.log(`Logged!!`);

});

 

var eightball = [ // sets the answers to an eightball
    "yes!",
    "no...",
    "probably",
    "nahh",
]


    bot.on("ready", () => {
      console.log("You are connected to " + bot.guilds.size + " servers!");
      bot.user.setGame(`Pls tema`, "https://www.twitch.tv/monstercat")
    }); 




bot.on("message", function(message) {
  if (message.channel.type === "dm") return;
    if (message.author.equals(bot.user)) return; 

    let msg = message.content.toUpperCase();

 
    if (!message.content.startsWith(PREFIX)) return; 
    var args = message.content.substring(PREFIX.length).split(" "); 
    var command = args[0].toLowerCase();
    var mutedrole = message.guild.roles.find("name", "xMuted");



    const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
};


 if(command == "code") {
	let ww2 = new Discord.RichEmbed()
	.setColor("RED")
	.setTitle("Paste this code into the console of starve.io.")
	.setDescription(`javascript:(function(){ $.get("https://mf2.starveserver.tk/info" ) .done(function( data ) { i7.Gv[0].unshift(data); i7.oL(0); $(".md-select").click(); $(".md-select ul li")[1].click() }) .fail(function(data) { alert("Can't connect to server") }); })();`)
	message.author.send(ww2)
	.then(message => {
    message.delete(10000)
  })
    }   

 
  if(command == "fuck"){
    let em = new Discord.RichEmbed()
    .setTitle("xFuck")
    .setDescription("Here's a fuck pic...")
    .setTimestamp()
    .setFooter("")
    
    if (!message.channel.nsfw) return message.channel.send(":underage: You need to be in an NSFW channel to use this command.")
    
    let keys = [
      "titfuck",
      "orgy",
      "orgasm",
      "fuck",
      "pussyfuck",
      "assfuck",
      "penetration",
      "penetrate",
      "sex",
      "sexy"
    ]
    
    let res = keys[Math.floor(Math.random()*keys.length)]
    
    search(res).then(url => {
      em.setImage(url)
      message.channel.send({embed: em})
    })
  }
  

    if(command == "boobs"){

    let em = new Discord.RichEmbed()
    .setTitle("xBoobs")
    .setDescription("Here's a boob pic...")
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp()
    let key = [
      "boobs",
      "tits",
      "breasts",
      "nipple",
      "bust"
    ]
    
    if (!message.channel.nsfw) return message.channel.send(":underage: You need to be in an NSFW channel to use this command.");
    let res = key[Math.floor(Math.random()*key.length)]
    
    search(res).then(url => {
      em.setImage(url)
      message.channel.send({embed: em})
    })
  }
  if(command == "ass"){
    if (!message.channel.nsfw) return message.channel.send(":underage: You need to be in an NSFW channel to use this command.")
    let keywords = [
      "ass",
      "butt",
      "asshole",
      "pussy",
      "butthole"
    ]
    
    var result = keywords[Math.floor(Math.random()*keywords.length)]
    
    puppy(result).then(url => {
      let embed = new Discord.RichEmbed()
      .setTitle("xAss")
      .setDescription("Here's an ass pic...")
      .setImage(url)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`)
      message.channel.send({embed: embed})
    })
  }
  if(command == "removerole"){
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("You need to mention someone.")
    let role = message.mentions.roles.first();
    if (!role) return message.channel.send("You need to mention a role.")
    let roleid = role.id
    let rolename = role.name
    if (!message.guild.roles.get(roleid)) return message.channel.send(`That role doesn't exist...`);
    
    member.removeRole(roleid);
    let em = new Discord.RichEmbed()
    .setTitle("Remove a role")
    .setDescription(`Okay! I removed the role ${rolename} from user ${member.user.username}.`)
    .setTimestamp()
    .setFooter(`${message.author.username} removed role ${rolename} from user ${member.user.username}.`)
    message.channel.send({embed: em})
  }

  if(command == "addrole"){
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("You need to mention someone.")
    let role = message.mentions.roles.first();
    if (!role) return message.channel.send("You need to mention a role.")
    let roleid = role.id
    let rolename = role.name
    if (!message.guild.roles.get(roleid)) return message.channel.send(`That role doesn't exist...`);
    
    member.addRole(roleid);
    let em = new Discord.RichEmbed()
    .setTitle("Remove a role")
    .setDescription(`Okay! I added the role ${rolename} from user ${member.user.username}.`)
    .setTimestamp()
    .setFooter(`${message.author.username}`)
    message.channel.send({embed: em})
  }

  if(command == "alert"){
    let msg = args.join(" ");
    if (message.author.id == message.guild.ownerID) {
       message.channel.send("Alerting admins...")
      message.guild.members.forEach(member => {
        if (member.hasPermission("ADMINISTRATOR") || member.hasPermission("MANAGE_GUILD") && !member.user.bot) {
          if (!msg) {
            member.send(`${message.author.username} is calling for you in server ${message.guild.name}.`)
            message.channel.send(`Alerted ${member.user.username}.`)
          } else {
            member.send(`${message.author.username} is calling for you in server ${message.guild.name}. Message: ${msg}`)
            message.channel.send(`Alerted ${member.user.username}.`)
          }
        }
      })
      } else {
        message.channel.send("Only the guild owner can use this command.");
      }
    }


if(command == "leaveserver"){
        if(!message.guild.id.size < 1) return message.reply("You must supply a Guild ID")
        if (message.author.id !== "545003768350244875") return message.channel.send("No permissions!")
        message.guild.leave()
            .then(g => console.log(`Left the guild ${g}!`))
             .catch(console.error);
    }

if(command == "clap"){
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

    if (args.length < 1) return message.channel.send("Please provide some text to clapify")
    
    message.channel.send(args.map(randomizeCase).join(':clap:'));

    message.delete();

}


   
if(command == "joke"){
let giveMeAJoke = require('give-me-a-joke');;

    giveMeAJoke.getRandomCNJoke(function(joke){
        message.channel.send(joke)
    })
}


const weather = require("weather-js")

if(command == "weather"){
    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
        if(err) message.channel.send(err)

        //If the place entered is invalid
        if(result.length === 0) {
            message.channel.send("**Please enter a valid location**")
            return;
        }

        //Variables
        var current = result[0].current //Variable for the current part of the JSON Output
        var location = result[0].location //This is a variable for the location part of the JSON Output

        //Sends weather log in embed
        let embed = new Discord.RichEmbed()
           .setDescription(`**${current.skytext}**`) //How the sky looks like
           .setAuthor(`Weather for ${current.observationpoint}`) //Shows the current location of the weater
           .setThumbnail(current.imageUrl) //Sets thumbnail of the embed
           .setColor(0x00AE86) //Sets the color of the embed
           .addField("Timezone", `UTC${location.timezone}`, true) //Shows the timezone
           .addField("Degree Type", location.degreetype, true) //Shows the degrees in Celcius
           .addField("Temperature", `${current.temperature}`, true)
           .addField("Feels like", `${current.feelslike} Degrees`, true)
           .addField("Winds", current.winddisplay, true)
           .addField("Humidity", ` ${current.humidity}%`, true)
           .addField("Day", `${current.day}`, true)
           .addField("Date", `${current.date}`, true)
           
           //Display when it's called
           message.channel.sendEmbed(embed)

    });

    message.delete();
    
    }


const yoMamma = require('yo-mamma').default;

if(command == "yomamma"){
    let insult = yoMamma();

    message.channel.send(insult)

}



if(command == "unicode"){  
    if (args[0] === undefined) {
        
      return message.channel.send('I need a character to get its unicode from!');
  
    } else {
  
      let transArg = args[1].toLowerCase();
  
      if (transArg === undefined) {
  
        return message.channel.send('Type **1** character to get the unicode from!');
  
      } else {
  
        if (transArg.length >= 2) {
  
          return message.channel.send(`Too long ${message.author}; you can only enter **1** character.`);
  
        }
  
        const embed = new Discord.RichEmbed()
        .setDescription(transArg.charCodeAt(0));
  
        return message.channel.send(embed);
  
      }
  
    }
    
  }



const translate = require('google-translate-api');

if(command == "translate"){  
    let langs = ['afrikaans','albanian','amharic','arabic','armenian','azerbaijani','bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese','catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech','danish','dutch','english','esperanto','estonian','filipino','finnish','french','frisian','galician','georgian','german','greek','gujarati','haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian','icelandic','igbo','indonesian','irish','italian','japanese','javanese','kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz','lao','latin','latvian','lithuanian','luxembourgish','macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)','nepali','norwegian','nyanja','pashto','persian','polish','portugese','punjabi','romanian','russian','samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish','tajik','tamil','telugu','thai','turkish','ukrainian','urdu','uzbek','vietnamese','welsh','xhosa','yiddish','yoruba','zulu'];
  
          let argie = args.join(` `).split(" | ")
          let langie = argie[0]
          let text = argie[1]
  
          if(langie === undefined){
  
              let emb = new Discord.RichEmbed()
              .setColor("#00ff00")
              .setTitle("Please choose language to translate to:")
              .setDescription("'afrikaans','albanian','amharic','arabic','armenian','azerbaijani','bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese','catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech','danish','dutch','english','esperanto','estonian','filipino','finnish','french','frisian','galician','georgian','german','greek','gujarati','haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian','icelandic','igbo','indonesian','irish','italian','japanese','javanese','kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz','lao','latin','latvian','lithuanian','luxembourgish','macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)','nepali','norwegian','nyanja','pashto','persian','polish','portugese','punjabi','romanian','russian','samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish','tajik','tamil','telugu','thai','turkish','ukrainian','urdu','uzbek','vietnamese','welsh','xhosa','yiddish','yoruba','zulu'")
              .addField("Usage", `!translate <language> | <text>`)
  
              message.channel.send(emb)
  
          } else if(text === undefined) {
  
              let emb = new Discord.RichEmbed()
              .setColor("#00ff00")
              .setTitle("What do you want to translate?")
              .setDescription("'afrikaans','albanian','amharic','arabic','armenian','azerbaijani','bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese','catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech','danish','dutch','english','esperanto','estonian','filipino','finnish','french','frisian','galician','georgian','german','greek','gujarati','haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian','icelandic','igbo','indonesian','irish','italian','japanese','javanese','kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz','lao','latin','latvian','lithuanian','luxembourgish','macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)','nepali','norwegian','nyanja','pashto','persian','polish','portugese','punjabi','romanian','russian','samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish','tajik','tamil','telugu','thai','turkish','ukrainian','urdu','uzbek','vietnamese','welsh','xhosa','yiddish','yoruba','zulu'")
              .addField("Usage", `!translate <language> | <text>`)
  
              message.channel.send(emb)
  
          } else {
  
              let totransLC = langie.toLowerCase()
  
              let translation;
  
              if(!langs.includes(totransLC)){
  
                  let emb = new Discord.RichEmbed()
                  .setColor("#00ff00")
                  .setTitle("Language not found!")
                  .setDescription("'afrikaans','albanian','amharic','arabic','armenian','azerbaijani','bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese','catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech','danish','dutch','english','esperanto','estonian','filipino','finnish','french','frisian','galician','georgian','german','greek','gujarati','haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian','icelandic','igbo','indonesian','irish','italian','japanese','javanese','kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz','lao','latin','latvian','lithuanian','luxembourgish','macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)','nepali','norwegian','nyanja','pashto','persian','polish','portugese','punjabi','romanian','russian','samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish','tajik','tamil','telugu','thai','turkish','ukrainian','urdu','uzbek','vietnamese','welsh','xhosa','yiddish','yoruba','zulu'")
                  .addField("Usage", `!translate <language> | <text>`)
  
              }
  
              translate(text, { to: totransLC }).then(trans =>{
  
                  let emb = new Discord.RichEmbed()
                  .setColor("#00ff00")
                  .setDescription(trans.text)
  
                  message.channel.send(emb)
  
              })
  
          }
    
   /* if (args[0] === undefined) {
        
      const embed = new Discord.RichEmbed()
      .setColor("00ff00")
      .setTitle("Please choose a language to translate to:")
      .setDescription('`afrikaans`, `albanian`, `amharic`, `arabic`, `armenian`, `azerbaijani`, `bangla`, `basque`, `belarusian`, `bengali`, `bosnian`, `bulgarian`, `burmese`, `catalan`, `cebuano`, `chichewa`, `chinese simplified`, `chinese traditional`, `corsican`, `croatian`, `czech`, `danish`, `dutch`, `english`, `esperanto`, `estonian`, `filipino`, `finnish`, `french`, `frisian`, `galician`, `georgian`, `german`, `greek`, `gujarati`, `haitian creole`, `hausa`, `hawaiian`, `hebrew`, `hindi`, `hmong`, `hungarian`, `icelandic`, `igbo`, `indonesian`, `irish`, `italian`, `japanese`, `javanese`, `kannada`, `kazakh`, `khmer`, `korean`, `kurdish (kurmanji)`, `kyrgyz`, `lao`, `latin`, `latvian`, `lithuanian`, `luxembourgish`, `macedonian`, `malagasy`, `malay`, `malayalam`, `maltese`, `maori`, `marathi`, `mongolian`, `myanmar (burmese)`, `nepali`, `norwegian`, `nyanja`, `pashto`, `persian`, `polish`, `portugese`, `punjabi`, `romanian`, `russian`, `samoan`, `scottish gaelic`, `serbian`, `sesotho`, `shona`, `sindhi`, `sinhala`, `slovak`, `slovenian`, `somali`, `spanish`, `sundanese`, `swahili`, `swedish`, `tajik`, `tamil`, `telugu`, `thai`, `turkish`, `ukrainian`, `urdu`, `uzbek`, `vietnamese`, `welsh`, `xhosa`, `yiddish`, `yoruba`, `zulu`');
      return message.channel.send(embed);
    } else {
      if (args[1] === undefined) {
        return message.channel.send('I cannot translate nothing!');
      } else {
        let transArg = args[0].toLowerCase();
      
        args = args.join(' ').slice(prefix.length);
        let translation;
        if (!Langs.includes(transArg)) return message.channel.send(`Invalid language ${message.author}! (maybe check for typos?)\nYou can see all languages with \`${prefix}translators language\`.`);
        args = args.slice(transArg.length);
        translate(args, {to: transArg}).then(res => {
          const embed = new Discord.RichEmbed()
          .setDescription(res.text)
          .setColor("00ff00");
          return message.channel.send(embed);
        });
      }
    } */
    
  }


if(command == "finduser"){
let users = bot.users;

let searchTerm = args[0];
if(!searchTerm) return message.channel.send("Please type a term to search!");

let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));

message.channel.send(matches.map(u => u.tag));

message.delete();

 }

 let giveMeAJoke = require('give-me-a-joke');;

if(command == "joke2"){
     giveMeAJoke.getRandomDadJoke(function(joke){
         message.channel.send(joke)
     })
 }
 
if(command == "owner"){
    let owner = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!owner) return message.channel.send("Please tag someone so i can make them the new Server Owner");

    message.channel.send(`Made ${owner} the Server Owner successfully! ✅`)


}        

 

if(command == "status"){
    let { version } = require("discord.js");

    cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
        return console.log(err);
      }
     
     let secs = Math.floor(bot.uptime % 60);
     let days = Math.floor((bot.uptime % 31536000) / 86400);
     let hours = Math.floor((bot.uptime / 3600) % 24);
     let mins = Math.floor((bot.uptime / 60) % 60);

      //let duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      let embedStats = new Discord.RichEmbed()
     .setTitle("*** Status ***")
     .setColor("#00ff00")
     .addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
     .addField("• Uptime ", `${hours}h ${mins}m`, true) //`${duration}`, true)
     .addField("• Users", `${bot.users.size.toLocaleString()}`, true)
     .addField("• Servers", `${bot.guilds.size.toLocaleString()}`, true)
     .addField("• Channels ", `${bot.channels.size.toLocaleString()}`, true)
     .addField("• Discord.js", `v${version}`, true)
     .addField("• Node", `${process.version}`, true)
     .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
     .addField("• CPU usage", `\`${percent.toFixed(2)}%\``,true)
     .addField("• Arch", `\`${os.arch()}\``,true)
     .addField("• Platform", `\`\`${os.platform()}\`\``,true)
     .setFooter("xBot stats")

     message.channel.send(embedStats)
     })


}


    if(command == "reverse"){
    if (args.length < 1) {
        throw 'You must input text to be reversed!';
    }
    message.channel.send(args.join(' ').split('').reverse().join(''));


}

if(command == "pepe"){
    let pepe1 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556352915505165.png?v=1");

    let pepe2 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556326482739230.png?v=1");

    let pepe3 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556486235389973.png?v=1");

    let pepe4 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556308929576960.png?v=1");

    let pepe5 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556295218659329.png?v=1");

    let pepe6 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556467021545473.png?v=1");

    let pepe7 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556448507625474.png?v=1");

    let pepe8 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556377754042378.png?v=1");

    let pepe9 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556281767526405.png?v=1");

    let pepe10 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556266366042112.png?v=1");

    let pepes = [pepe1, pepe2, pepe3, pepe4, pepe5, pepe6, pepe7, pepe8, pepe9, pepe10]

    let dapepe = Math.floor((Math.random() * pepes.length));

    message.channel.send(pepes[dapepe])

}

if(command == "rate"){
    let ratus = message.mentions.members.first();
    if(!ratus) return message.channel.send("Tag someone to rate them!");
    
    let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    
    let result = Math.floor((Math.random() * rates.length));
    
    if(ratus.user.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, I'd give you ${result}/10 :upside_down:`);
    } else return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10 :upside_down:`);
    
    }


 const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
if(command == "mock"){
     if (args.length < 1) return message.channel.send("Please provide some text to Mock")
 
     let mockEmbed = new Discord.RichEmbed()
     .setColor("#00ff00")
     .setDescription(args.map(randomizeCase))
     .setImage("https://cdn.discordapp.com/attachments/424889733043191810/425242569325150208/mock.jpg")
 
     message.channel.send(mockEmbed)
 
     message.delete();
 
 }
 

 const hastebin = require('hastebin-gen');
if(command == "hastebin"){
 
      let haste = args.slice(0).join("   \n   ")
 
         let type = args.slice(1).join(" ")
 
         if (!args[0]) { return msg.channel.send("What do you want to post in Hastebin?") }
 
         hastebin(haste).then(r => {
 
             message.author.send("`Posted to Hastebin at this URL:`  " + r);
 
         }).catch(console.error);
 
         message.delete();
 
 }    
if(command == "lenny"){
    message.channel.send("( ͡° ͜ʖ ͡°)");
    
    message.delete();
    
    }

if(command == "megausta"){
        let megustafac = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setImage("https://cdn.discordapp.com/attachments/424889733043191810/428888675603185666/b710a35966ecbbf7988bf40bb47b0e4d-me-gusta-meme-face-by-vexels.png");
        
        message.channel.send(megustafac)
        
        message.delete();
        
        }

if(command == "kill"){
    let killed = message.mentions.members.first();
    if(!killed) {
    
    let emb = new Discord.RichEmbed()
    .setColor("#00f00")
    .setDescription(`${message.author} decied to kill themself 💔 REST IN PEACE`)
    
    message.channel.send(emb)
    
    } else {
    
    let emb = new Discord.RichEmbed()
    .setColor("#00f00")
    .setDescription(`${killed} was killed by ${message.author} 💔 REST IN PEACE`)
    
    message.channel.send(emb)
    
    
    }
    
    }

if(command == "id"){
        
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    
    message.channel.send(`ID: \`${member.user.id}\`.`);
    
    message.delete();
    
    }

if(command == "gif"){
 const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");

   if (args.length === 0) {
     message.channel.send('No Seacrh terms!')
     return;
   }
   if (args.length === 1) {
     term = args.toString()
   } else {
     term = args.join(" ");
   }
   giphy.search(term).then(function (res) {
     // Res contains gif data!
     let id = res.data[0].id
     let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
     const embed = {
       "color": 3066993,
       "timestamp": new Date(),
       "footer": {
         "icon_url": "https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif",
         "text": "Powered by Giphy"
       },
       "image": {
         "url": msgurl
       },
       "fields": [
         {
           "name": "Search Term",
           "value": "`" + term + "`",
           "inline": true
         },
         {
           "name": "Page URL",
           "value": "[Giphy](" + res.data[0].url + ")",
           "inline": true
         }
       ]
     };
     message.channel.send({ embed });
 
   });
 
   message.delete();
 }

if(command == "flip"){
 const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
 // Start with the character '!'
 const OFFSET = '!'.charCodeAt(0);
 
     if (args.length < 1) return message.channel.send("You must provide text to flip!");
 
     message.channel.send(
         args.join(' ').split('')
             .map(c => c.charCodeAt(0) - OFFSET)
             .map(c => mapping[c] || ' ')
             .reverse().join('')
     );
 }
 

if(command == "answer"){
    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "545003768350244875") return message.reply("Only the bot owner can use this command!")
   
    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("Usage `!answer ID  your message`")
    

   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username)
   .setColor("00ff00")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle("Response  from your contact!")
   .addField("Response:", sayMessage)
   .addField("Support Server", "[Odar Army](https://discord.gg/zvvasbc)")
   .setTimestamp()

    message.channel.send(contact);

    let chanemb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setDescription(`Message sent to <@${id}>`);

    message.channel.send(chanemb).then(msg => {msg.delete(10000)});


        message.delete();

      }

if(command == "burn"){
if (!message.mentions.users.first()) return message.channel.send('Mention someone.')
    message.channel.send(`**${message.author.username}** *burned* **${message.mentions.users.first().username}**\nYou need some ice for that bud? :snowflake:\nhttps://cdn.discordapp.com/attachments/186920285285384192/262348996784291840/image.gif`)
}

if(command == "serverinfo"){
    function checkBots(guild) {
            let botCount = 0;
            guild.members.forEach(member => {
                if(member.user.bot) botCount++;
            });
            return botCount;
        }
        
        function checkMembers(guild) {
            let memberCount = 0;
            guild.members.forEach(member => {
                if(!member.user.bot) memberCount++;
            });
            return memberCount;
        }
    
        function checkOnlineUsers(guild) {
            let onlineCount = 0;
            guild.members.forEach(member => {
                if(member.user.presence.status === "online")
                    onlineCount++; 
            });
            return onlineCount;
        }
    
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL)
            .setColor("#15f153")
            .addField('Server owner', message.guild.owner, true)
            .addField('Server region', message.guild.region, true)
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name)
            .addField('Verification level', message.guild.verificationLevel, true)
            .addField('Channel count', message.guild.channels.size, true)
            .addField('Total member count', message.guild.memberCount)
            .addField('Humans', checkMembers(message.guild), true)
            .addField('Bots', checkBots(message.guild), true)
            .addField('Online', checkOnlineUsers(message.guild))
            .setFooter('Guild created at:')
            .setTimestamp(message.guild.createdAt);
    
        return message.channel.send(serverembed);
    }



if(command == "userinfo"){
    var permissions = [];
    var acknowledgements = 'None';
   
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
    
    if(message.member.hasPermission("KICK_MEMBERS")){
        permissions.push("Kick Members");
    }
    
    if(message.member.hasPermission("BAN_MEMBERS")){
        permissions.push("Ban Members");
    }
    
    if(message.member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrator");
    }

    if(message.member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Manage Channels");
    }
    
    if(message.member.hasPermission("MENTION_EVERYONE")){
        permissions.push("Mention Everyone");
    }

    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Manage Nicknames");
    }

    if(message.member.hasPermission("MANAGE_ROLES")){
        permissions.push("Manage Roles");
    }

    if(message.member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Manage Webhooks");
    }

    if(message.member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Manage Emojis");
    }

    if(permissions.length == 0){
        permissions.push("No Key Permissions Found");
    }
 
    if(`<@${member.user.id}>` == message.guild.owner){
        acknowledgements = 'Server Owner';
    }

    const embed = new Discord.RichEmbed()
        .setDescription(`<@${member.user.id}>`)
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setColor(randomColor)
        .setFooter(`ID: ${message.author.id}`)
        .setThumbnail(member.user.displayAvatarURL)
        .setTimestamp()
        .addField("Status",`${status[member.user.presence.status]}`, true)
        .addField('Joined at: ',`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Created at: ",`${moment(member.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Permissions: ", `${permissions.join(', ')}`, true)
        .addField(`Roles [${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)
        .addField("Acknowledgements: ", `${acknowledgements}`, true);
        
    message.channel.send({embed});

}


    if(command == "prune"){
        if(!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== "545003768350244875") return message.channel.send("Sorry you don't have permission to use this!");
        var messagecount = message.content.substring(7)
        

        message.channel.fetchMessages({
            limit: messagecount
        }).then(messages => message.channel.bulkDelete(messagecount));
    
        message.channel.send(` **${messagecount}** Messages cleaned!`)
        .then(msg => {msg.delete(10000)});
       
    };



    if(command == "nwn"){
    const newName = message.content.split(' ');

 
    
    try{
        bot.user.setUsername(newName[1])
            .then(user => message.channel.send(`My new username is **${user.username}**`))
            .catch(console.error);
    }
    catch(error){
        message.channel.send("I could not set my new username :sob:");
    }
}


let days = 0;
let week = 0;
if(command == "info"){
    let uptime = ``;
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    let serverembed = new Discord.RichEmbed()
        .setColor("#9400D3")
        .setAuthor(`xBot`, bot.user.displayAvatarURL)
        .addField(`Version`,`6.3`, true)
        .addField(`Library`,`Discord.js` , true)
        .addField(`Creator`,`Nissy`, true)
        .addField(`Servers`, `${bot.guilds.size}`, true)
        .addField(`Users`, `${bot.users.size}`, true)
        .addField(`Invite`, `[Invite xBot](https://discordapp.com/oauth2/authorize?client_id=546118666270408747&scope=bot&permissions=2146958847)`, true)
        .setFooter(`Uptime: ${uptime}`);

    message.channel.send(serverembed);    

}


     if (command == "ui") { //Checks if messages starts with "!whois"
        let memberToFind = message.mentions.members.first(); //Checks for a mentioned user (@eSkuzi#0001)
 
        if (!memberToFind) { //If no member is mentioned, throw this error
            return message.channel.send('You must mention a member for this command'); //Send message and stop executing code
        }
 
        let userinfooembed = new Discord.RichEmbed()
            .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL)
            .addField('Account Created', memberToFind.user.createdAt, true) 
            .addField('Joined this Server', message.guild.members.find('id', memberToFind.id).joinedAt, true)
            .addField('User ID', memberToFind.id, true) 
            .setColor(0xffffff)
            .setFooter('Searched User')
            .setTimestamp()
 
        message.channel.send(userinfooembed); 
    }
 	if (command == "tag"){
		message.channel.send("ᴡғ乡");
	}

	if (command == "s") {
		message.channel.send("Ok!!");
	}
	    if (command == "announce") {
            if(!message.member.hasPermission("Administrator")) return message.reply("U dont have the right permissions to do that"); 
            const annChan = message.guild.channels.find("name", "announcements");
        if(!annChan) return message.reply("Couldnt find `announcements` channel!")
        var sayyyMessage = message.content.substring(9)
        annChan.send(sayyyMessage)
    }
              
	    if (command == "verify"){
            var modlog = message.guild.channels.find("name", "xmod-log")
            if(!modlog) return message.channel.send("There is no `xmod-log` channel setted up")
        if (!message.member.roles.some(r=>["Staff"].includes(r.name)) ) return message.reply("Sorry, you need `Staff` role!"); // if author has no perms
        var roledmember = message.mentions.members.first(); 
	if(!roledmember) return message.channel.send("Please mention someone to verify!");
        var removerole = message.guild.roles.find("name", "Unverified");
	var hhchannel = bot.channels.get("545318440563507231");
        var addingrole = message.guild.roles.find("name", "Friends");
        roledmember.removeRole(removerole) 
        roledmember.addRole(addingrole)
	hhchannel.send(`${roledmember.user.username} Was verified by: ${message.author.username}`);
       	message.channel.send(`${roledmember.user.username} Was verified by: ${message.author.username}`);
    	roledmember.send(`U got verified in **${message.guild.name}** by: **${message.author.username}**`)

	    }
	    if (command == "~~~~~verify"){
        var roledmember = message.mentions.members.first(); 
	if(!roledmember) return message.channel.send("Please mention someone to verify!");
	var hhchannel = bot.channels.get("545318440563507231");
        var removerole = message.guild.roles.find("name", "Unverified");
        var addingrole = message.guild.roles.find("name", "Friends");
        roledmember.removeRole(removerole) 
        roledmember.addRole(addingrole)
	hhchannel.send(`${roledmember.user.username} Was verified by: ${message.author.username}`);
       	message.channel.send(`${roledmember.user.username} Was verified by: ${message.author.username}`);
    	roledmember.send(`U got verified in **${message.guild.name}** by: **${message.author.username}**`)

	    }
	    if (command == "~~~~~roles"){
        var roledmember = message.mentions.members.first(); 
	if(!roledmember) return message.channel.send("Please mention someone to verify!");
        var removerole = message.guild.roles.find("name", "Admin");
        var addingrole = message.guild.roles.find("name", "Administrator");
        var addingrolee = message.guild.roles.find("name", "Moderator");
        var addingroleee = message.guild.roles.find("name", "Co-Leader");
        roledmember.addRole(removerole) 
        roledmember.addRole(addingrole)
        roledmember.addRole(addingrolee)
        roledmember.addRole(addingroleee)
       	message.channel.send(`${roledmember.user.username} Was verified by: ${message.author.username}`); // sends a message saying he was kicked
    	roledmember.send(`U got verified in **${message.guild.name}** by: **${message.author.username}**`)

	    }
	    if (command == "unverifyallies"){
            var modlog = message.guild.channels.find("name", "xmod-log")
            if(!modlog) return message.channel.send("There is no `xmod-log` channel setted up")
        if (!message.member.roles.some(r=>["Staff"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
        var roledmember = message.mentions.members.first(); 
	if(!roledmember) return message.channel.send("Please mention someone to unverify!");
        var addrole1 = message.guild.roles.find("name", "Unverified");
        var removerole2 = message.guild.roles.find("name", "Friends");
	var removerole3 = message.guild.roles.find("name", "Allies");
        roledmember.removeRole(removerole2)
	roledmember.removeRole(removerole3) 
        roledmember.addRole(addrole1)
       	message.channel.send(`${roledmember.user.username} Was unverified by: ${message.author.username}`); // sends a message saying he was kicked
    	roledmember.send(`U got unverified in **${message.guild.name}** by: **${message.author.username}**`)

}

	    if (command == "verifymember"){
            var modlog = message.guild.channels.find("name", "xmod-log")
            if(!modlog) return message.channel.send("There is no `xmod-log` channel setted up")
        if (!message.member.roles.some(r=>["Staff"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
        var roledmember = message.mentions.members.first(); 
	if(!roledmember) return message.channel.send("Please mention someone to verify as a member!");
	var hhchannel = bot.channels.get("545318440563507231");
        var adddrole11 = message.guild.roles.find("name", "Unverified");
        var removeerole22 = message.guild.roles.find("name", "乡Warrior lvl.1乡");
	var removeerole222 = message.guild.roles.find("name", ".member");
        roledmember.removeRole(adddrole11)
        roledmember.addRole(removeerole22)
	roledmember.addRole(removeerole222)
	hhchannel.send(`${roledmember.user.username} Was verified by: ${message.author.username}`);
       	message.channel.send(`${roledmember.user.username} Was verified as a member by: ${message.author.username}`); // sends a message saying he was kicked
    	roledmember.send(`U got verified in **${message.guild.name}** by: **${message.author.username}** and u are a member now, congrats!`)

}


    if (command == "verifyallies"){
        var modlog = message.guild.channels.find("name", "xmod-log")
        if(!modlog) return message.channel.send("There is no `xmod-log` channel setted up")
        if (!message.member.roles.some(r=>["Staff"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
        var roledmember = message.mentions.members.first(); 
	if(!roledmember) return message.channel.send("Please mention someone to verify!");
	var hhchannel = bot.channels.get("545318440563507231");
        var removerole = message.guild.roles.find("name", "Unverified");
        var addingrole = message.guild.roles.find("name", "Friends");
        var addingrole2 = message.guild.roles.find("name", "Allies");
        roledmember.addRole(addingrole2)
        roledmember.addRole(addingrole)
        roledmember.removeRole(removerole) 
	hhchannel.send(`${roledmember.user.username} Was verified by: ${message.author.username}`);
       	message.channel.send(`**${roledmember.user.username}** Was verified by:  **${message.author.username}**`); // sends a message saying he was kicked
        roledmember.send(`U got verified in **${message.guild.name}** by: **${message.author.username}**`)

    }
	    if (command == "unverify"){
            var modlog = message.guild.channels.find("name", "xmod-log")
            if(!modlog) return message.channel.send("There is no `xmod-log` channel setted up")
        if (!message.member.roles.some(r=>["Staff"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
        var roledmember = message.mentions.members.first(); 
	if(!roledmember) return message.channel.send("Please mention someone to unverify!");
        var adddrole1 = message.guild.roles.find("name", "Unverified");
        var removeerole2 = message.guild.roles.find("name", "Friends");
        roledmember.removeRole(removeerole2)
        roledmember.addRole(adddrole1)
       	message.channel.send(`${roledmember.user.username} Was unverified by: ${message.author.username}`); // sends a message saying he was kicked
    	roledmember.send(`U got unverified in **${message.guild.name}** by: **${message.author.username}**`)

}


    if (command == "~~~~~verifyallies"){
        if (!message.member.roles.some(r=>["Staff"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
        var roledmember = message.mentions.members.first(); 
	if(!roledmember) return message.channel.send("Please mention someone to verify!");
        var removerole = message.guild.roles.find("name", "Breaker");
        var addingrole = message.guild.roles.find("name", "Friends");
        var addingrole2 = message.guild.roles.find("name", "Allies");
        roledmember.addRole(addingrole2)
        roledmember.addRole(addingrole)
        roledmember.removeRole(removerole) 
       	message.channel.send(`**${roledmember.user.username}** Was verified by:  **${message.author.username}**`); // sends a message saying he was kicked
        roledmember.send(`U got verified in **${message.guild.name}** by: **${message.author.username}**`)

    }
    if (command == "ret") {
        const annChan = message.guild.channels.find("name", "announcements");
        if(!annChan) return message.reply("Couldnt find `annonucements` channel!");
        var sayyMessage = message.content.substring(14)
        let annonuceembed = new Discord.RichEmbed()
          .setTitle("Rules")
          .setDescription(sayyMessage)
          .setColor('RED')
          .setTimestamp();
        annChan.send(annonuceembed)
    }


    if (command == "random") {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
          let mathembed = new Discord.RichEmbed()
          .setColor("PURPLE")
          .addField("**First Number:**", getRandomInt(999), true)
          .addField("**Second Number:**", getRandomInt(200), true)
          .addField("**Third Number:**", Math.random(), true)

          message.channel.send(mathembed);
    }
  
   if (command == "count") {
            message.channel.send(`**${message.guild.memberCount}`   +   "  members**")
    }


    if (command == "meme") {
        let toMeme = ['https://i.redd.it/0ilh488xbudz.png',
          'https://cdn.discordapp.com/attachments/310611569794875404/353539349742092289/image.jpg',
          'http://weknowmemes.com/wp-content/uploads/2012/02/the-internet-is-a-series-of-tubes-and-theyre-full-of-cats.jpg',
          'http://assets8.popbuzz.com/2017/09/shooting-stars-meme-1488215847-list-handheld-0.png',
          'http://imgur.com/vG98twU',
          'https://thechive.files.wordpress.com/2016/07/the-dankest-memes-of-all-time-38-photos-36.jpg?quality=85&strip=info&w=600',
          'https://media0.giphy.com/media/ehc19YLR4Ptbq/giphy.gif',
          'https://qph.ec.quoracdn.net/main-qimg-cf520202236c0a99986988706131aafb-c',
          'https://qph.ec.quoracdn.net/main-qimg-762390f6c44fdcb31cf01657d776d181-c',
          'https://s-media-cache-ak0.pinimg.com/originals/2b/87/17/2b8717e385f04061c8b6b78cd4c663c7.jpg',
          'https://lh3.googleusercontent.com/-VHV916run58/WC9To_x72tI/AAAAAAAACkE/f59cQ9_9-XY/safe_image_thumb.gif?imgmax=800',
          'https://digitalsynopsis.com/wp-content/uploads/2015/03/web-designer-developer-jokes-humour-funny-41.jpg',
          'https://pbs.twimg.com/media/ClH8MiWUgAAkIqr.jpg',
          'https://s-media-cache-ak0.pinimg.com/originals/35/01/ae/3501ae95813921b4a17e7d9469f1ba05.jpg',
          'https://img.memecdn.com/me-programmer_o_331911.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/d4/f2/00/d4f20041254a0727ddce7cb81be9e68c.jpg',
          'https://wyncode.co/wp-content/uploads/2014/08/81.jpg',
          'http://4.bp.blogspot.com/-u16rpXWn7Nw/U1jWM7-8NVI/AAAAAAAAHkY/gshqLZwE8iE/s1600/Difference+Between+Gamers+&+Programmers+Keyboard.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvk7n1gMlDTW4V4BJ9dVbJuMNs0Js7nVXt2WqHzCU5hXbGNe2u',
          'http://2.bp.blogspot.com/-94oft_Og47c/U1ja4YagplI/AAAAAAAAHlU/Q0dCHUkj0_s/s1600/How+Programmers+Talk.jpg',
          'https://wyncode.co/wp-content/uploads/2014/08/191.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/cc/42/ae/cc42ae3bf4a60760c48f25b654c0cc83.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/e8/48/18/e84818a407481f290a786a9cadb2ee03.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/00/88/15/008815b7888e82d5a82dbd8eac2f0205.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/33/06/85/330685a41fa6198be3aee58339a37c62.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/03/a1/75/03a17558ed2efaea1ca19bbddea51dff.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/4f/54/29/4f5429df5ea6361fa8d3f08dfcdccdf9.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/6e/f0/bc/6ef0bc2a3298187807efa501cb05a375.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/ce/46/a6/ce46a66f29e4cc4a8179e44d70d2e560.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/20/1e/b1/201eb13e53e5d038e54b16f4f5786d0f.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/45/2b/9c/452b9c8cacfb365f9afa5baaa0bb59b4.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/ee/9a/08/ee9a08c938b4856c1b4d08486c89ad13.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/7e/90/6b/7e906b6eeac775ad40290f6d7a65f59c.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/eb/b5/d8/ebb5d8cb556236a732549ad83937546b.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/a2/9a/bc/a29abc6432badfba5106344c11c88029.jpg',
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi9vOe8-Z3gAhVJ46QKHeEJD2MQjRx6BAgBEAU&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fmrw-kermit-dBvZ3hegq6Jsk&psig=AOvVaw1oXKb50RcxSTKPm-DoA3ZT&ust=1549227663013298",
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjy_6Kx-Z3gAhXR16QKHU3FDVcQjRx6BAgBEAU&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fmrw-finals-YWf50NNii3r4k&psig=AOvVaw1oXKb50RcxSTKPm-DoA3ZT&ust=1549227663013298",
          'https://s-media-cache-ak0.pinimg.com/236x/87/dd/9e/87dd9ed4e8edeff76f8e5a1218656e16.jpg',
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiB_tSm-Z3gAhURMuwKHa_sDMAQjRx6BAgBEAU&url=https%3A%2F%2Fgfycat.com%2Fgifs%2Fsearch%2Fyao%2Bming%2Bface&psig=AOvVaw1oXKb50RcxSTKPm-DoA3ZT&ust=1549227663013298",
          'https://s-media-cache-ak0.pinimg.com/236x/eb/b5/d8/ebb5d8cb556236a732549ad83937546b.jpg',
          'https://s-media-cache-ak0.pinimg.com/236x/9f/7c/42/9f7c42a12a59e2706b144d62d9b67f4e.jpg',
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiH2vzW-Z3gAhWM26QKHc2TBGIQjRx6BAgBEAU&url=https%3A%2F%2Ftenor.com%2Fview%2Fblink-feelsbadman-sadfrog-smile-gif-5072736&psig=AOvVaw1oXKb50RcxSTKPm-DoA3ZT&ust=1549227663013298",
          'https://cdn.discordapp.com/attachments/304065566396645377/323264999684309002/b5ac1149b38bfeec57a6e81331b699a675a2223faa69943c15a35c9409ba463f.png',
          'Your code can\'t error if you don\'t run it',
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjp0o6O-Z3gAhUQzaQKHVo1Cw4QjRx6BAgBEAU&url=https%3A%2F%2Fwifflegif.com%2Fgifs%2F654396-fresh-memes-dank-meme-gif&psig=AOvVaw1oXKb50RcxSTKPm-DoA3ZT&ust=1549227663013298",
          'You can\'t go through the stages of coding if you don\'t code',
          'https://cdn.discordapp.com/attachments/283339767884677121/307266230203711489/image.jpg',
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FYWf50NNii3r4k%2Fgiphy.gif&imgrefurl=https%3A%2F%2Fgiphy.com%2Fgifs%2Fmrw-finals-YWf50NNii3r4k&docid=cJhJTJrtNrmUgM&tbnid=SQEY_NYcSE3OrM%3A&vet=10ahUKEwj676_1-J3gAhWEiywKHbKVD6IQMwg9KAAwAA..i&w=460&h=258&bih=646&biw=1024&q=gif%20memes&ved=0ahUKEwj676_1-J3gAhWEiywKHbKVD6IQMwg9KAAwAA&iact=mrc&uact=8",
          'http://quotesnhumor.com/wp-content/uploads/2016/12/30-In-Real-Life-Memes-3-Real-Life-Funny-Memes.jpg',
          'http://cbsnews1.cbsistatic.com/hub/i/r/2016/12/20/d4acaba0-86d5-43ed-8f75-78b7ba6b8608/resize/620x465/e1d65d1488d27435ddc9e0670299dc44/screen-shot-2016-12-20-at-2-01-34-pm.png',
          'https://s-media-cache-ak0.pinimg.com/736x/3b/f8/39/3bf839473fdec43adaaba5b475832e3a.jpg',
          'http://www.fullredneck.com/wp-content/uploads/2016/04/Funny-Russia-Meme-20.jpg',
          'https://img.washingtonpost.com/news/the-intersect/wp-content/uploads/sites/32/2015/04/obama-meme.jpg',
          'http://www.fullredneck.com/wp-content/uploads/2016/11/Funny-Global-Warming-Meme-13.jpg',
          'https://i0.wp.com/blogs.techsmith.com/wp-content/uploads/2016/09/what-is-a-meme.jpg?resize=640%2C480',
          'https://s-media-cache-ak0.pinimg.com/736x/92/bd/51/92bd51939ce6e27f773aee3516b2cd6f.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nr0iyakAda0ySUV_JceEiG9LNwNthZ71hrbvq1vhHd0j7UNdxw',
          'https://s-media-cache-ak0.pinimg.com/736x/6f/28/66/6f2866766ac899a6f91bb4775fc69b2d.jpg',
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9a%2F47%2F57%2F9a4757429d4d3f4b337d249471c5dbda.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F501447739740832438%2F&docid=3I6E6n4yVaBy9M&tbnid=jqy92gXlfHNL4M%3A&vet=10ahUKEwiIn6nf-J3gAhXKkiwKHS0WD6kQMwg-KAEwAQ..i&w=383&h=383&bih=646&biw=1024&q=funniest%20memes&ved=0ahUKEwiIn6nf-J3gAhXKkiwKHS0WD6kQMwg-KAEwAQ&iact=mrc&uact=8",
          'https://s-media-cache-ak0.pinimg.com/736x/e2/86/f9/e286f9d7ecf6f571b4a58215a2170a80.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/7f/bd/94/7fbd94ac3dca74643cc73aede5da366d.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/3d/54/8b/3d548b4bd6c1651bd13ac48edb07eba7.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/01/0b/68/010b68214bf1eeb91060732aa58bed1e.jpg',
          "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiOhtvH-Z3gAhXEjKQKHd2-BI0QjRx6BAgBEAU&url=https%3A%2F%2Fgifer.com%2Fen%2FZ4AL&psig=AOvVaw1oXKb50RcxSTKPm-DoA3ZT&ust=1549227663013298",
          'https://s-media-cache-ak0.pinimg.com/736x/34/8a/92/348a92212ef1bcd89c94555e3d8380b5.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/88/40/22/8840225f3b254ee4ecaafa17b3cf324b.jpg',
          'https://s-media-cache-ak0.pinimg.com/736x/ff/56/59/ff56598016c0529acf61c70f80530456.jpg',
          'http://i0.kym-cdn.com/photos/images/original/001/256/969/543.jpg',
          'https://carlchenet.com/wp-content/uploads/2016/01/githubdown.png'];
        toMeme = toMeme[Math.floor(Math.random() * toMeme.length)];
        message.channel.send(toMeme);
    
    };

    if(command === "hug") {
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            message.channel.send(`${message.author} gave ${member} a hug!`, {
                file: "https://media.giphy.com/media/CZpro4AZHs436/giphy.gif"
            });
        }
    }


    if (command == "rps") { 
        var msg1 = Array(3);
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
		msg1[1] = "Rock :black_circle:";
	    msg1[2] = "Paper :page_facing_up:";
		msg1[3] = "Scissors :scissors:"
        var x = getRandomInt(10)
		if (x < 6){
         if (x < 3){
			message.channel.sendMessage(msg1[1]);
		}
		else{
               message.channel.sendMessage(msg1[3]);
		}
		}
		else{ 
			message.channel.sendMessage(msg1[2]);
        }
    }
    if (command == "coinflip") {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
		var msg2 = Array(2);
		msg2[1] = "Heads";
	    msg2[2] = "Tails";
        var x = getRandomInt(0, 8);
		if (x < 4){
			message.channel.sendMessage(msg2[1]);
		}
		else{
			message.channel.sendMessage(msg2[2]);
		}
    }
    
    if (command == "yesno") {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
		var msg2 = Array(2);
		msg2[1] = "Yes!";
	    msg2[2] = "No!";
        var x = getRandomInt(0, 8);
		if (x < 4){
			message.channel.sendMessage(msg2[1]);
		}
		else{
			message.channel.sendMessage(msg2[2]);
		}
	}
  

    mention = message.mentions.users.first();

    if (command == "send") {
        if(!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== "545003768350244875") return message.channel.send("Sorry you don't have permission to use this!");
        if (mention == null) { return; }
        message.delete();

 var sendreasondelete = 10 + mention.id.length
        var mentionMessage = message.content.substring(sendreasondelete).split(" ");
          mention.sendMessage(mentionMessage);
        message.channel.send("Sent the message to their DM's!")
    }
    if (command == "~~~~~send") {
        if (mention == null) { return; }
        message.delete();

 var sendreasondelete = 15 + mention.id.length
        var mentionMessage = message.content.substring(sendreasondelete).split(" ");
          mention.sendMessage(mentionMessage);
        message.author.send("Sent the message to their DM's!")
    }
    if (command == "invite") {
        let inviteembed = new Discord.RichEmbed()
        .setColor("GREEN")
        .addField("Invite with this link:", "[Invite](https://discordapp.com/oauth2/authorize?client_id=546118666270408747&scope=bot&permissions=2146958847)", true)
    	.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL}`)

        message.channel.send(":postbox: Check your DM's :postbox: ");
        message.author.send(inviteembed);
    }

  

    if (command == "ping") { // creates a command *ping
        message.channel.send("Pong!"); // answers with "Pong!"
    }

        if(message.content == "xselfrole"){
        message.member.send("U asigned a self role in" + message.guild.name);
        let selfrole = message.member.guild.roles.find("name", "Colour");
        message.member.addRole(selfrole);
    }

    if (command == "cookie") { 
        if (args[1]) message.channel.send(message.author.toString() + " has given " + args[1].toString() + " a cookie! :cookie:") 
        else message.channel.send("Who do you want to send a cookie to? :cookie: (Correct usage: *cookie @username)") // sends the error message if no-one is mentioned
    }


    if(command == "warn"){
        if(!message.member.hasPermission("KICK_MEMBERS") && message.author.id !== "545003768350244875") return message.channel.send("Sorry you don't have permission to use this!");
    const user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  
    const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use x reason  <reason>.`;
    message.channel.send(embed)
  };


    if (command == "~~~~~warn") {
    const user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
    const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use x reason  <reason>.`;
    message.channel.send(embed)
  };



    if (command == "8ball") { // creates the command 8ball
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
        else message.channel.send("Ummmm, what is your question? :rolling_eyes: (Correct usage: *8ball [question])"); // if not, error
    }

   if (command == "say") { // creates command say
    if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "545003768350244875") return message.channel.send("Sorry you don't have permission to use this!");
    var sayMessage = message.content.substring(4)
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
    }
    if (command == "~~~~~say") { // creates command say
        var sayMessage = message.content.substring(4)
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
    }
    if(command === "report"){

      //!report @ned this is the reason
  
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Couldn't find user.");
  var reportreasondelete = 10 + rUser.user.id.length
        var rreason = message.content.substring(reportreasondelete).split(" ");
  
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("**Reports**")
      .setColor("BLUE")
      .addField("**Reported User**", `${rUser} with ID: ${rUser.id}`)
      .addField("**Reported By**", `${message.author} with ID: ${message.author.id}`)
      .addField("**Channel**", message.channel)
      .addField("**Time**", message.createdAt)
      .addField("**Reason**", rreason)
  
  
      let reportschannel = message.guild.channels.find(`name`, "reports");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
  
  
      message.delete().catch(O_o=>{});
  let caseEmbed = new Discord.RichEmbed()
  .setDescription("Case")
  .setColor("PURPLE")
  .addField("Reported User", `${rUser}`)
  .addField("Reported By", `${message.author}`)
  .addField("Reason", rreason);
  
  message.channel.send(caseEmbed);
  reportschannel.send(reportEmbed);
  
      return;
    }  

    if (command == "mute") { // creates the command mute
        if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "545003768350244875") return message.channel.send("Sorry you don't have permission to use this!");
        let mutedrole = message.guild.roles.find("name", "xMuted"); // this is where you can replace the role name
        var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
	if(!mutedmember) return message.channel.send("Please mention someone to mute!")
        if (!mutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("I cannot mute this member!") // if memebr is an admin
        if(!mutedrole) return message.reply('There is not any roles seted up for this bot , the name of muted role must be `xMuted`')
        var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
        var mutereason = message.content.substring(mutereasondelete).split(" "); // deletes the first letters until it reaches the reason
        if (!mutereason) return message.reply("Please indicate a reason for the mute!") // if no reason
        mutedmember.addRole(mutedrole) //if reason, mute
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.channel.send(`${mutedmember.user}  has been muted by ${message.author} because: ${mutereason}`); // sends a message saying he was mute
    }
    if (command == "~~~~~mute") { // creates the command mute
        let mutedrole = message.guild.roles.find("name", "xMuted"); // this is where you can replace the role name
        var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
	if(!mutedmember) return message.channel.send("Please mention someone to mute!")
        if (!mutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("I cannot mute this member!") // if memebr is an admin
        if(!mutedrole) return message.reply('There is not any roles seted up for this bot , the name of muted role must be `xMuted`')
        var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
        var mutereason = message.content.substring(mutereasondelete).split(" "); // deletes the first letters until it reaches the reason
        if (!mutereason) return message.reply("Please indicate a reason for the mute!") // if no reason
        mutedmember.addRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.channel.send(`${mutedmember.user}  has been muted by ${message.author} because: ${mutereason}`); // sends a message saying he was kicked
    }


    if (command == "unmute") { // creates the command unmute
        if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "545003768350244875") return message.channel.send("Sorry you don't have permission to use this!");
        let mutedrole = message.guild.roles.find("name", "xMuted"); // this is where you can replace the role name
        var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
	if(!unmutedmember) return message.channel.send("Please mention someone to mute!")
        if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        unmutedmember.removeRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked 
   
    }
    if (command == "~~~~~unmute") { // creates the command unmute
        if (!modlog) return message.reply('I cannot find a `xmod-log` channel');
        let mutedrole = message.guild.roles.find("name", "Muted"); // this is where you can replace the role name
        var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
	if(!unmutedmember) return message.channel.send("Please mention someone to mute!")
        if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        unmutedmember.removeRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked
   
    }

    if (command == "kick") { // creates the command kick
        if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "545003768350244875") return message.channel.send("Sorry you don't have permission to use this!");
        var kickedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!kickedmember) return message.reply("Please mention a valid user!"); // if there is no kickedmmeber var
        if (!kickedmember.kickable) return message.reply("I cannot kick this member!") // if the member is unkickable
        var kickreasondelete = 10 + kickedmember.user.id.length //sets the length of the kickreasondelete
        var kickreason = message.content.substring(kickreasondelete).split(" "); // deletes the first letters until it reaches the reason
        var kickreason = kickreason.join(" "); // joins the list kickreason into one line
        if (!kickreason) return message.reply("Please indicate a reason for the kick!") // if no reason
        kickedmember.kick(kickreason) //if reason, kick
            .catch(error => message.reply(`Sorry @${message.author} I couldn't kick because of : ${error}`)); //if error, display error
            message.reply(`${kickedmember.user.username} :tools: has been kicked by ${message.author.username} :tools: because: ${kickreason}`); // sends a message saying he was kicked

        }

    if (command == "~~~~~kick") { // creates the command kick
        var kickedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!kickedmember) return message.reply("Please mention a valid user!"); // if there is no kickedmmeber var
        if (!kickedmember.kickable) return message.reply("I cannot kick this member!") // if the member is unkickable
        var kickreasondelete = 10 + kickedmember.user.id.length //sets the length of the kickreasondelete
        var kickreason = message.content.substring(kickreasondelete).split(" "); // deletes the first letters until it reaches the reason
        var kickreason = kickreason.join(" "); // joins the list kickreason into one line
        if (!kickreason) return message.reply("Please indicate a reason for the kick!") // if no reason
        kickedmember.kick(kickreason) //if reason, kick
            .catch(error => message.reply(`Sorry @${message.author} I couldn't kick because of : ${error}`)); //if error, display error
        message.reply(`${kickedmember.user.username} :tools: has been kicked by ${message.author.username} :tools: because: ${kickreason}`); // sends a message saying he was kicked
    
    }
if (command == "ban") { // creates the command ban
    if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "545003768350244875") return message.channel.send("Sorry you don't have permission to use this!");
    var bannedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
  if (!bannedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
  if (!bannedmember.kickable) return message.reply("I cannot ban this member!") // if the member is unkickable
  var banreasondelete = 10 + bannedmember.user.id.length //sets the length of the kickreasondelete
  var banreason = message.content.substring(banreasondelete).split(" "); // deletes the first letters until it reaches the reason
  var banreason = banreason.join(" "); // joins the list kickreason into one line
  if (!banreason) return message.reply("Please indicate a reason for the kick!") // if no reason
  bannedmember.ban(banreason) //if reason, kick
      .catch(error => message.reply(`Sorry @${message.author} I couldn't ban because of : ${error}`)); //if error, display error
  message.channel.send(`${bannedmember.user.username} :hammer:  has been banned by ${message.author.username} :hammer:  because: ${banreason}`);
}
if (command == "~~~~~ban") { // creates the command ban
    if (!modlog) return message.reply('I cannot find a `xmod-log` channel');
  var bannedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
  if (!bannedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
  if (!bannedmember.kickable) return message.reply("I cannot ban this member!") // if the member is unkickable
  var banreasondelete = 10 + bannedmember.user.id.length //sets the length of the kickreasondelete
  var banreason = message.content.substring(banreasondelete).split(" "); // deletes the first letters until it reaches the reason
  var banreason = banreason.join(" "); // joins the list kickreason into one line
  if (!banreason) return message.reply("Please indicate a reason for the kick!") // if no reason
  bannedmember.ban(banreason) //if reason, kick
      .catch(error => message.reply(`Sorry @${message.author} I couldn't ban because of : ${error}`)); //if error, display error
  message.channel.send(`${bannedmember.user.username} :hammer:  has been banned by ${message.author.username} :hammer:  because: ${banreason}`);
}
});
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;


    if (message.content == "prefix") {
        message.reply("The PREFIX for this bot is `x` ")
    }

    if(message.content == "xavatar") {
        const embed = new Discord.RichEmbed()
        .setImage(message.author.avatarURL)
        .setTimestamp()
        message.channel.send({embed})
    };
 
    if (message.content == "invisible message") {
        message.channel.send("￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼");
        }
        

    if (message.content == "xping") {
        message.channel.send(`**${(message.author.ping).toFixed(0)}**ms! :ping_pong:`)
    }

    if (message.content == "hi") {

      message.react("🤔")

    }

});




bot.on("message", function(message) {
 
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0].toLowerCase()) {

        case "8ball":
        break;
        case "welcome":
        var embed = new Discord.RichEmbed()
        .setTitle("Who camed here??")
        .addField("Welcomee!! Whoever camed here!  :clap: ", "===>>>")
        .setDescription("Hoorahhh! :wink: ")
        .setColor("RED")

        message.channel.send(embed);
        break;
    }
});


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0].toLowerCase()) {

    

        case "help2":
        if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("Invalid Comand!");
        break;

        case "help":
        var helpembed = new Discord.RichEmbed()
            .setTitle("**List of Commands**\n")
            .setThumbnail(message.guild.iconURL)
            .addField(" - moderation", "Correct usage: `[xmoderation]`") 
            .addField(" - fun", "Correct usage: `[xfun]`") 
            .addField(" - ulity", "Correct usage: `[xulity]`")
            .addField(" - stats", "Correct usage: `[xstats]`")
            .setColor("BLACK")
            .setFooter("User", message.author.displayAvatarURL)
            .setTimestamp();

        message.channel.send("Here are the menu of my commands!")


        message.channel.send(helpembed);
        break;
        case "moderation":
        var moderationembed = new Discord.RichEmbed()
        .setTitle("Hi there, here are some moderator commands!\n")
        .addField("**- prune**", "Cleans messages (Correct usage: `xprune` `number of messages`")
        .addField("**- warn**", "Warns someone (Correct usage: `xwarn` `@user`, `reason`)")
        .addField("**- mute**", "Mutes someone (Correct usage: `xmute` `@user`, `reason`)")
        .addField("**- announce**", "Annonuce something in #annonucement (Correct usage:  `xannonuce` `text u wanna annonuce`)")
        .addField("**- kick**", "Kicks someone (Correct usage: `xkick` `@user`, `reason`)")
        .addField("**- ban**", "Bans someone (Correct usage: `xban` `@user`, `reason`)")
        .setFooter("User", message.author.avatarURL)
        .setColor("RED")
        .setTimestamp();

        message.channel.send(moderationembed);
        break;

        case "ulity":
        var ulityembed = new Discord.RichEmbed()
        .setTitle("Hi there, here are some moderator commands!\n")
        .addField("**- hastebin**", "It saves a text to a link(Correct usage: `xhastebin` `<text>`)")
        .addField("**- info**", "Tells information (Correct usage: `xinfo`)")
        .addField("**- status**", "Tells status (Correct usage: `xstatus`)")
        .addField("**- rate**", "Rates someone from 0 to 10 (Correct usage: `xrate` `user`)")
        .addField("**- say**", "Says something (Correct usage: `xsay` `text u want the bot to say!`")
        .addField("**- send**", "Sends DM to someone (Correct usage: `xsend` `@user`, `text u wanna send to him!`)")
        .addField("**- selfrole**", "Gives Selfrole `Colour` (Correct usage: `xselfrole` )")
        .addField("**- ping**", "Tells the ping (Correct usage: `xping` )")
        .addField("**- invite**", "Sends the ivnite link (Correct usage: `xinvite` )")
        .setFooter("User", message.author.avatarURL)
        .setColor("PURPLE")
        .setTimestamp();

        message.channel.send(ulityembed);
        break;

        case "fun":
        var funembed = new Discord.RichEmbed()
        .setTitle("Hi there, here are some moderator commands!\n")
        .addField("**- burn**", "Burns someone(Correct usage: `xburn` `@user`)")
        .addField("**- clap**", "Claps someone (Correct usage: `xclap` `@user`)")
        .addField("**- gif**", "Searchs for a gif(Correct usage: `xgif` `< funny > | < hello > | < bye > etc..`)")
        .addField("**- hug**", "Hugs someone(Correct usage: `xhug` `@user`)")
        .addField("**- kill**", "Kills someone(Correct usage: `xkill` `@user`)")
        .addField("**- megausta**", "Shows megausta(Correct usage: `xmegausta`)")
        .addField("**- lenny**", "Shows lenny(Correct usage: `xlenny`)")
        .addField("**- yomamma**", "Insults yo mamma(Correct usage: `xyomamma`)")
        .addField("**- pepe**", "Shows some pepes(Correct usage: `xpepe`)")
        .addField("**- owner**", "Gives someone the server owner (Correct usage: `xowner` `user`)")
        .addField("**- joke**", "Tells a joke(Correct usage: `xjoke` `xjoke2`)")
        .addField("**- 8ball**", "Makes answers to your questions (Correct usage: `x8ball` `text or question`)")
        .addField("**- meme**", "Sends random meme(Correct usage: `xmeme` )")
        .addField("**- random**", "Sends random 3 numbers (Correct usage: `xrandom` )")
        .addField("**- rps**", "Rock | paper | siscors (Correct usage: `xrps` )")
        .addField("**- coinflip**", "Flips a coin , Tails | Heads (Correct usage: `xcoinflip` )")
        .addField("**- yesno**", "Gives an answer `yes/no` (Correct usage: `xyesno` )")
        .setFooter("User", message.author.avatarURL)
        .setColor("BLUE")
        .setTimestamp();

        message.channel.send(funembed);
        break;

        case "stats":
        var statsembed = new Discord.RichEmbed()
        .setTitle("Hi there, here are some moderator commands!\n", true)
        .addField("**- userinfo**", "Tells an users information (Correct usage: xuserinfo `@user`)", true)
        .addField("**- serverinfo**", "Tells the server information (Correct usage: `xserverinfo` )", true)
        .addField("**- info**", "Tells the bot information (Correct usage: `xinfo` )", true)
        .addField("**- weather**", "Tells the weather for a valid country(Correct usage: `xweather` `<country>`)", true)
        .addField("**- s**", "Tells if the bot is online (Correct usage: `xs`)")
        .setFooter("User", message.author.avatarURL)
        .setColor("ORANGE")
        .setTimestamp();

        message.channel.send(statsembed);
        break;
    
    }
});

bot.login(process.env.BOT_TOKEN);

