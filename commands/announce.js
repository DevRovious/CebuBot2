const discord = require("discord.js");

module.exports.run = async(client, message, args, boticon) => {

    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Britisch Airways Roblox | Announcements`)
        .setFooter(`Sendend by ${message.author.tag}`)
        .setThumbnail(message.author.displayAvatarURL())
        .setColor("1a4ebd")
        .setTimestamp()
<<<<<<< HEAD
        .setDescription(`**UPDATES:** \n \n - Self Check In! \n - New In Flight Entertrainment! \n -  And More! \n`)
        .setImage('https://media.discordapp.net/attachments/719211340572393523/719212400020160562/8Hib2HM0RtCdQAAAAASUVORK5CYII.png')
        .addField("Test");
=======
        .setDescription(`We are currently trying to fix the airport Glasgow. We hope our next flight there will become history. \n \n Signed by: \n DevRovious `)
        .setImage('https://cdn.discordapp.com/attachments/690504401017634827/719132286997626960/britishairways_800x350_web.jpg');
>>>>>>> 2e3d5deaa8e05aa0944c369b3891aa8e207c01d9
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "Dev"
}
