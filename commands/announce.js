const discord = require("discord.js");

module.exports.run = async(client, message, args) => {


    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Britisch Airways Roblox | Flight`)
        .setFooter(`Sendend by ${message.author.tag}`)
        //.setThumbnail(boticon)
        .setColor("00ff26")
        .setTimestamp()
        .setDescription(`**Flight:** *001* \n**Aircraft:**  *A320* \n \n**Host:** *${message.author.tag}* \n \n \n**Times:** \n*Serveropentime:* \n*serverclosetime:* \n*boardingtime:* \n \n**Link: **https://www.roblox.com/games/4781767558/Virac-Airport`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "announce"
}
