const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("555983666699042841")
setInterval(function() {
channel.send(`Spam Spam Spam !!!!!!!!!!!!!!!!! sPAAAAAAAM SPAAAAAAAAAAAAM !!!!!!!!!!!!!!!!!!!!`);
}, 100)
})

client.login(process.env."NDE1MTcxMTQ3NzQ3ODE5NTMx.D3bo1g.LGMl_EOpN7omDVQs29EsSBddUAU");