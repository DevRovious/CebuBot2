const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.delete();
    return message.channel.send("> **Latest update:** \n > \n > Date: \n > *4-5-2020* \n > \n > Subject: \n > *Support and report commands* \n > \n > **Version:** \n > 1.0.0.0");
    

}


module.exports.help = {
    name: "updates"
}
