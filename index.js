const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Anarchy Legacy Bot online 💀");
});

app.listen(process.env.PORT || 3000);

const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// 💣 IMPORTANDO SEUS ARQUIVOS CORRETAMENTE
const chaos = require("./chaos");
const money = require("./money");
const shop = require("./shop");
const war = require("./war");

client.once("ready", () => {
  console.log(`💀 Anarchy Legacy online como ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const args = message.content.split(" ");
  const cmd = args.shift().toLowerCase();

  if (cmd === "!ping") {
    message.reply("🏓 Pong!");
  }

  if (cmd === "!chaos") {
    chaos.execute(message);
  }

  if (cmd === "!money") {
    money.execute(message, args);
  }

  if (cmd === "!shop") {
    shop.execute(message);
  }

  if (cmd === "!war") {
    war.execute(message);
  }
});

client.login(process.env.TOKEN);