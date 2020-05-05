const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    client.on("ready", async () => {

        console.log(`${client.user.username} is online.`);
    
        client.user.setActivity("Watching Cebu Pacific Roblox Discord Server!", { type: "PLAYING" });
    
    });

}


module.exports.help = {
    name: "online"
}
