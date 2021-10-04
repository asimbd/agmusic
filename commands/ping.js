exports.run = async (client, message) => {
  message.channel.send(`Pong! ${Math.round(client.ws.ping)}ms`);
};
