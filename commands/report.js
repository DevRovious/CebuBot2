const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`You used the command: .report`)
        //.setThumbnail(boticon)
        .setColor("00ff26")
        .setDescription(`**Please use .report {@Username} {Reason}!`);
        
        await await await message.channel.send("This is currently in development!")
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;

}


module.exports.help = {
    name: "report"
}







