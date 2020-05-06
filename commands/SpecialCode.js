const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`.aboout`)
        //.setThumbnail(boticon)
        .setColor("00ff26")
        .setDescription(`**This funtion is under development!**`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
    

}


module.exports.help = {
    name: "TwitterPostWithHand"
}
