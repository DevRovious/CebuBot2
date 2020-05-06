const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {



    message.delete();

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
    .setDescription("Test")
    .setColor("#00ff26")
    .setThumbnail(icon)
    .addField("From * to *")
    .addField("Time *");
    return message.channel.send(serverEmbed)
    
    return;
}


module.exports.help = {
    name: "announce"
}
