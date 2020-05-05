const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    message.guild.members.forEach(members => {
        return message.channel.send("> test");
    });

}


module.exports.help = {
    name: "dm"
}
