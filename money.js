const coins = new Map();

module.exports = {
  name: "money",

  execute(message, args) {
    const user = message.author.id;

    if (!coins.has(user)) coins.set(user, 0);

    if (args[0] === "daily") {
      const reward = Math.floor(Math.random() * 200) + 50;
      coins.set(user, coins.get(user) + reward);

      return message.reply(`💰 você ganhou ${reward} coins`);
    }

    message.reply(`💰 saldo: ${coins.get(user)} coins`);
  }
};