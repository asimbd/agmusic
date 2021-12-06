module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);
  client.user.setActivity(`Currently in ${client.guilds.cache.size} servers`);
};
