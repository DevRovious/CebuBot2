const discord = require("discord.js");

module.exports.run = async(client, message, args, boticon) => {

    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Britisch Airways Roblox | Developments`)
        .setFooter(`Sendend by ${message.author.tag}`)
        .setThumbnail(boticon)
        .setColor("1a4ebd")
        .setTimestamp()
        .setDescription(`**UPDATES:** \n \n - Self Check In! \n - New In Flight Entertrainment! \n -  And More! \n`)
        .setImage('https://media.discordapp.net/attachments/719211340572393523/719212400020160562/8Hib2HM0RtCdQAAAAASUVORK5CYII.png')
        .addField("Test");
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "Dev"
}
