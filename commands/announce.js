const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Britisch Airways Roblox | Announcement`)
        .setFooter(`Sendend by ${message.author.tag}`)
        //.setThumbnail(boticon)
        .setColor("1a4ebd")
        .setTimestamp()
        .setDescription(`**UPDATES:** \n \n - Self Check In \n - New In Flight Entertrainment \n - More coming soon!`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "announce"
}
