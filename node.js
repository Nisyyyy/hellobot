const fetch = require("node-fetch");
const fs = require('fs');
const ms = require('ms');
const os = require('os')
const cpuStat = require("cpu-stat");
const PREFIX = "??";
const Discord = require ("discord.js");
const bot = new Discord.Client
const moment = require("moment");
const search = require('random-puppy');
const puppy = require('random-puppy');
const botbuilder = require ("botbuilder");
const restify = require('restify');
const token = "NTg1MzkxNzY5MzkxMjAyMzE1.XUWvwQ.QUDU1bW_CGnVbsJHwO4CTEUip3Q"

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
      bot.user.setGame(`ok.`, "https://www.twitch.tv/monstercat")


    }); 




bot.on("message", function(message) {
  if (message.channel.type === "dm") return;
    if (message.author.equals(bot.user)) return; 

    let msg = message.content.toUpperCase();

 
    if (!message.content.startsWith(PREFIX)) return; 
    var args = message.content.substring(PREFIX.length).split(" "); 
    var command = args[0].toLowerCase();
    var mutedrole = message.guild.roles.find("name", "Muted");


});

    bot.on("message", function(message) {
        if (message.author.equals(bot.user)) return;
    


    if (message.isMentioned("339845408157073408" && "319275658809442314" && "407222127658532864" && "545003768350244875" && "301073055524847616" && "356818912425279489")) {
        var guy = message.guild.members.get("545003768350244875");
        var banreasondelete = 5 + guy.user.id.length ;
        var mgg = message.content.substring(banreasondelete).split(" ");
    guy.send(`**${message.author.username}** \n Pinged ZeRo!! with the message: \n` + mgg );
  }

    


    
    });



bot.login(process.env.BOT_TOKEN);


