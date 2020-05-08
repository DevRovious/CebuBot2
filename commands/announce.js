const discord = require("discord.js");

module.exports.run = async(client, message, args) => {



    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Cebu Pacific Roblox | Flight`)
        .setFooter(`Sendend by ${message.author.tag}`)
        //.setThumbnail(boticon)
        .setColor("00ff26")
        .setTimestamp()
        .setDescription(`**Flight: ** *number* \n **Plane: **  *aircraft* \n \n **Host:** *${message.author.tag}* \n \n \n **Times:** \n *Serveropentime* \n *serverclosetime* \n *boardingtime* \n \n **Link: ** \n *link*`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "announce"
}
