const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Applications Hub:`)
        //.setThumbnail(boticon)
        .setColor("1a4ebd")
        .setDescription(`**https://www.roblox.com/games/5126107873/British-Airways-Low-Ranks-Applications`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "application"
}
