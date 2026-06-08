module.exports = {
  execute(message) {
    const events = [
      "💥 Explosão de coins global!",
      "⚔️ PvP liberado por 10 minutos!",
      "👑 Novo rei do servidor!",
      "💀 Todos perderam dinheiro!",
      "🎁 Drop raro apareceu!"
    ];

    const event = events[Math.floor(Math.random() * events.length)];
    message.channel.send("🔥 " + event);
  }
};