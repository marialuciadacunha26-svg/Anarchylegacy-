let warMode = false;

module.exports = {
  name: "war",

  execute(message) {
    warMode = !warMode;

    if (warMode) {
      message.channel.send("⚔️ GUERRA ATIVADA! PvP e caos liberados!");
    } else {
      message.channel.send("🕊️ Guerra finalizada.");
    }
  }
};