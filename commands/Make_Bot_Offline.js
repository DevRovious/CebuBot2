const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    client.on("ready", async () => {

        console.log(`${client.user.username} is offline.`);
    
        client.user.setActivity("I'm getting developed!", { type: "WATCHING" });
    
    });

}


module.exports.help = {
    name: "offline"
}
