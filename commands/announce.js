const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    return message.channel.send("> **This funtion is under development!**")
    
    return;
}


module.exports.help = {
    name: "announce"
}
