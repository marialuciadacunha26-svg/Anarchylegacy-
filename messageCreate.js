module.exports = (client) => {
  client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    const prefix = "!";

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);
    if (!command) return;

    command.execute(message, args, client);
  });
};