const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`You used the command: .twitter`)
        //.setThumbnail(boticon)
        .setColor("00ff26")
        .setDescription(`https://twitter.com/rbxcebupacific/status/1258797204363530251`);
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
    

}


module.exports.help = {
    name: "TwitterPostWithHand"
}
