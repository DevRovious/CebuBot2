const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Updates:`)
        //.setThumbnail(boticon)
        .setColor("1a4ebd")
        .setDescription(`**Latest update:** \n\n Date: \n *2-6-2020* \n\n Subject: \n *Created by DevRovious* \n\n **Version:** \n 1.0.0.1`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;

}


module.exports.help = {
    name: "updates"
}
