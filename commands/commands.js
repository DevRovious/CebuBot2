const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    return message.channel.send("> **Following commands are:** \n > \n > - .help \n > - .about \n > - .preflix \n > - .report \n > - .support \n > - .ticket \n > - .updates \n >  \n > **Following staff commands are:** \n >  \n > - .announce \n > - .kick \n > - .ban \n > \n > **More commands are comming soon!** ");
    

}


module.exports.help = {
    name: "commands"
}
