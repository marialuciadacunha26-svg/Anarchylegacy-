let war = false;

module.exports = {
  execute(message) {
    war = !war;

    if (war) {
      message.channel.send("⚔️ GUERRA ATIVADA!");
    } else {
      message.channel.send("🕊️ Guerra desativada.");
    }
  }
};