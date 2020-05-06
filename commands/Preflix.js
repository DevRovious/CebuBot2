const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`You used the command: .preflix`)
        //.setThumbnail(boticon)
        .setColor("00ff26")
        .setDescription(`Preflix is: **.**`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;

}


module.exports.help = {
    name: "preflix"
}




