const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    message.channel.send("> **This funtion is under development!**").delete({timeout: 3000});
    return;

}


module.exports.help = {
    name: "announce"
}
