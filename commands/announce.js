const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.channel.delete()
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Britisch Airways Roblox | Announcement`)
        .setFooter(`Sendend by ${message.author.tag}`)
        .setThumbnail(boticon)
        .setColor("1a4ebd")
        .setTimestamp()
        .setDescription(`**Test`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "announce"
}
