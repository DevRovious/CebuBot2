const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`.aboout`)
        //.setThumbnail(boticon)
        .setColor("00ff26")
        .setDescription(`**Latest update:** \n\n Date: \n *6-5-2020* \n\n > Subject: \n *Embleds added* \n\n **Version:** \n 1.0.0.1`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;

}


module.exports.help = {
    name: "updates"
}
