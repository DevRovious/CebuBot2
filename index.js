const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs")

const client = new discord.Client();

client.commands = new discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");


    if (jsFiles.length <= 0) {
        console.log("Can't find files!")
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De files ${f} is geladen`);
        message.channel.send("> **I have been updated!**");

        client.commands.set(fileGet.help.name, fileGet);

    })
});


client.login(botConfig.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);

    client.user.setActivity("Watching Cebu Pacific Roblox Discord Server!", { type: "PLAYING" });

});


client.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];
    var args = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client,message, args);


});

client.login(process.env.token);