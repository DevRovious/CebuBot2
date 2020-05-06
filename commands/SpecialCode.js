const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    return message.channel.send("> **New Twitter post!** \n https://twitter.com/rbxcebupacific/status/1257961677804322816");
    

}


module.exports.help = {
    name: "test"
}
