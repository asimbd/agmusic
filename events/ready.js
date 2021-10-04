module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);
  client.user.setActivity("Created By Asim | ag/help");
};