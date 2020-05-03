const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    return message.channel.send("> **Latest update:** \n > \n > Date: \n > *Unknown* \n > \n > Subject: \n > *Unknown* \n > \n > **Version:** \n > 1.0.0.0");
    

}


module.exports.help = {
    name: "updates"
}
