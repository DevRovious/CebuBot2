const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {




    if (!args[0]) return message.channel.send(`Please use .report like this: .report {@UserTag} {reason}.`)

    var user = message.guild.users.cache.find(message.mentions.users.first()); 

    if (!user) return message.channel.send("Speler is niet te vinden / geef een speler op.");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Gelieve een reden op te geven.")

    var reportEmbed = new discord.MessageEmbed()
        .setDescription("Reports")
        .setColor("00ff26")
        .addField("Reported user", `${user} with ID ${user.id}`)
        .addField("Report by: ", `${message.author} with id: ${message.author.id}`)
        .addField("Reason", reason)
        .setFooter(message.createdAt);

    var channelReport = message.guild.channels.find("name", "report");
    if (!channelReport) return message.channel.send("Can't find channel");

    // ZORG VOOR ADMINISTRATOR RECHTEN OP BOT.
    message.delete();

    return channelReport.send(reportEmbed);











}


module.exports.help = {
    name: "report"
}







