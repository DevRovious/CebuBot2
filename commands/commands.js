const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !announcement title | bericht | kleur | kanaal

    if(!message.member.hadPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet")

    var sperator = "!";

    if(args[0] == null){

        var embed = new.discord.MessageEmbed()
        .setTitle("Gebruik")
        .setColor("#00ee00")
        .setDescription(`Maak een announcement door gebruik te maken van: \n !announcement titel ${seperator} bericht ${seperator} kleur ${seperator} kanaal`);

    return message.reply(embed);

    }
}

module.exports.help = {
    name: "announcement"
