const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Commands:`)
        //.setThumbnail(boticon)
        .setColor("1a4ebd")
        .setDescription(`**Following commands are:** \n\n -applications \n -updates \n -commands`);
        
        var embedSend = await message.channel.send(announceEmbed);
        return;

}


module.exports.help = {
    name: "commands"
}
