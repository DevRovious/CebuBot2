const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    console.log(`${client.user.username} is offline.`);
    const newLocal = message.channel.send("Bot is offline");
    message.channel.send("Bot is offline")
}


module.exports.help = {
    name: "offline"
}
