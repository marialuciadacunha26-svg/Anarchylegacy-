const items = [
  { name: "💣 Bomba do caos", price: 500 },
  { name: "🛡️ Proteção temporária", price: 300 },
  { name: "⚔️ Espada do anarchy", price: 800 }
];

module.exports = {
  name: "shop",

  execute(message) {
    let list = "🛒 **LOJA ANARCHY LEGACY**\n\n";

    items.forEach(i => {
      list += `${i.name} - 💰 ${i.price}\n`;
    });

    message.channel.send(list);
  }
};