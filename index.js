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

client.once("ready", () => {
  console.log(`💀 Bot online como ${client.user.tag}`);
});

client.login(process.env.TOKEN);