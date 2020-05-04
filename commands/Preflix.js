const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    message.channel.send("> Preflix is: **.**");
    return

}


module.exports.help = {
    name: "preflix"
}




