module.exports = {
  name: "chaos",

  execute(message) {
    const events = [
      "💥 Explosão global de coins!",
      "⚔️ PvP liberado por 10 minutos!",
      "👑 Novo rei do servidor escolhido!",
      "💀 Todos perderam 25% das coins!",
      "🎁 Drop lendário apareceu no chat!"
    ];

    const event = events[Math.floor(Math.random() * events.length)];

    message.channel.send(`🔥 **ANARCHY EVENT:** ${event}`);
  }
};