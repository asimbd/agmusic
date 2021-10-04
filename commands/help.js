const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
  `Prefix\`\` - 'ag/' for commands
   connect\`\` - join the voice channel you are in
   play <Song Name or url>\`\` - play songs from youtube
   queue\`\` - shows the song queue of the server
   np\`\` - see now playing song
   lyrics\`\` - get lyrics of current song
   invite\`\` - get invite link for the bot
   ping\`\` - Returns Pong!
   serverstatus\`\` - See the server status!
   help\`\` - to see this command`;

  const revised = commands
    .split("\n")
    .map((x) => "• " + "``" + client.config.prefix + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "AG MUSIC Commands Help",
        "https://img.icons8.com/color/2x/services--v2.gif"
      )
      .setColor("FFFBFB")
      .setTimestamp()
      .setDescription(revised)
  );
};
