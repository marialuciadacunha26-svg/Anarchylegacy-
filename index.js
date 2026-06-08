const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Anarchy Legacy Bot online 💀");
});

app.listen(3000, () => {
  console.log("Web server rodando");
});
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Map();

require("./src/system/config");
require("./src/system/events")(client);

client.login(process.env.TOKEN);