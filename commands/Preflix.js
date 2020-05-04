const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    return message.channel.send("> Preflix is: **.**");

}


module.exports.help = {
    name: "preflix"
}




