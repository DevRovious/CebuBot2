const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    
    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`You used the command: .about`)
        //.setThumbnail(boticon)
        .setColor("00ff26")
        .setDescription(`**About:** \n\n Info: \n Welcome to the *About* from ${bot.name}. \n\n Time created: \n *- 3-5-2020 18:55 CET*. \n\n reator: \n *- DevRovious*`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "about"
}
