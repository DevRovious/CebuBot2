const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {



    message.delete();

    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`📢 ${message.guild.name} | **Flight Announcement** 📢`)
        .setFooter(`Sendend by ${message.author.tag}`)
        .setColor("00ff26")
        .setTimestamp()
        .setDescription(`Flight *Number* \n \n Host: ${message.author.tag} \n \n Time: *time*`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "announce"
}
