const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    message.channel.send("> **This funtion is under development!**");
    await sentMessage.delete({ timeout: 10000 });
    return;

}


module.exports.help = {
    name: "announce"
}
