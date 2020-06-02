const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Applications:`)
        //.setThumbnail(boticon)
        .setColor("1a4ebd")
        .setDescription(`Greetings! This application is designed to assess the knowledge, responsibilities, and duties you hold to potentially become a staff member here at British Airways. Here at British Airways, our staff play an integral part in our glorious Airline. Staff play a vital role in the development and enrichment of our Airline, Hence, the maturity, discipline and development of trainees is of paramount importance to our High Ranking Staff. \n \n https://docs.google.com/forms/d/1F2Xd18xe1p3XSzjONAV_amKSLZk1o44gp4Pl37CNEqg/edit`);
        
        var embedSend = await message.channel.send(announceEmbed);
        return;

}


module.exports.help = {
    name: "applications"
}
