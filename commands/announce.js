const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {



    message.delete();
    var boticon = bot.user.displayAvaterURL
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`📢  ${message.guild.name} | **Flight Announcement:**  📢`)
        .setFooter(`Sendend by ${message.author.tag}`)
        .setThumbnail(boticon)
        .setColor("00ff26")
        .setTimestamp()
        .setDescription(`**Flight: ** *number* \n **Plane: **  *planetype* \n **Host:** *${message.author.tag}* \n \n **Times:** \n *Serveropentime* \n *serverclosetime* \n *boardingtime* \n \n **Link: ** \n *link*`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "announce"
}
