const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`.commands`)
        //.setThumbnail(boticon)
        .setColor("00ff26")
        .setDescription(`**Following commands are:** \n\n - .help \n - .about \n - .preflix \n - .report \n - .support \n - .ticket \n - .updates \n\n **Following staff commands are:** \n\n - .announce \n - .kick \n - .ban \n\n **More commands are comming soon!**`);
        
        var embedSend = await message.channel.send(announceEmbed);
        return;

}


module.exports.help = {
    name: "commands"
}
