const discord = require("discord.js");

module.exports.run = async(client, message, args, boticon) => {

    message.delete();
    var icon = message.guild.iconURL;
    // Make an embed
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`Britisch Airways Roblox | Allocation`)
        .setFooter(`Sendend by ${message.author.tag}`)
        .setThumbnail(boticon)
        .setColor("1a4ebd")
        .setTimestamp()
        .setDescription(`\n Flight Code: BA 0002 \n Date: \n Staff Join: \n Unslock: \n Airport: \n Aircraft: \n \n \n **Management Roles** \n Host: \n Co-Host: \n Supervisor: \n \n \n **Terminal** \n Check-In/Duty Free: \n \n \n **Flight Deck** \n Captain: \n Backup: \n First Officer: \n Backup: \n \n \n **Cabin Staff** \n Purser (SS+): \n Cabin Crew: \n \n \n **Lounge** \n Gate Desk: \n \n \n **Landside Team** \n Tarmac Supervisor (SS+): \n Landside: `)
        .setImage('https://cdn.discordapp.com/attachments/690504401017634827/719132286997626960/britishairways_800x350_web.jpg');
        
 
    // Send the embed to the current channel
    var embedSend = await message.channel.send(announceEmbed);
    return;
}


module.exports.help = {
    name: "Flight"
}
