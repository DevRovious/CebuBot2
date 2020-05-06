const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {



    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`You used the command: .report`)
        .setColor("00ff26")
        .setDescription(`**Please use .report {@Username} {Reason}!`);



    // {prefix}report speler reden

    var prefix = botConfig.prefix;

    if (!args[0]) return message.channel.send(announceEmbed)

    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send("I can't find this person. Please try again later!");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Please add a reason!")

    var reportEmbed = new discord.RichEmbed()
        .setDescription("Reports")
        .setColor("00ff26")
        .addField("Reported user", `${user} with ID ${user.id}`)
        .addField("Report by: ", `${message.author} with id: ${message.author.id}`)
        .addField("Reason", reason)
        .setFooter(message.createdAt);

    var channelReport = message.guild.channels.find("name", "report");
    if (!channelReport) return message.channel.send("Kan het kanaal niet vinden");

    // ZORG VOOR ADMINISTRATOR RECHTEN OP BOT.
    message.delete();

    return channelReport.send(reportEmbed);











}


module.exports.help = {
    name: "report"
}







