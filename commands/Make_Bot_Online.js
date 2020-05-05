const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    console.log(`${client.user.username} is online.`);
    const newLocal = message.channel.send("Bot is online");
    message.channel.send("Bot is online")
}


module.exports.help = {
    name: "online"
}
