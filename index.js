const { Client, Partials, Collection, GatewayIntentBits } = require("discord.js");
const chalk = require('chalk');
const config = require("./settings/config");
const mongoose = require("mongoose");

const client = new Client({
  intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages ],
  partials: [ Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember ],
  failIfNotExists: false,
  allowedMentions: { parse: ["everyone", "roles", "users"], users: [], roles: [], repliedUser: false },
});

client.commands = new Collection()
client.aliases = new Collection()
client.events = new Collection();
client.slashCommands = new Collection();
client.prefix = config.app.prefix

module.exports = client;

mongoose.connect(config.MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log(chalk.green('[-] Mongoose database is working properly !')))
    .catch(() => console.log(chalk.red('[-] Error while connecting to mongoose database...')));

['events', 'slashCommands'].forEach((handler) => {
  require(`./Handlers/${handler}`)(client)
});

process.on("unhandledRejection", (reason, p) => {
  // console.log(" [AntiCrash] :: Unhandled Rejection/Catch");
  // console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  // console.log(" [AntiCrash] :: Uncaught Exception/Catch");
  // console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  // console.log(" [AntiCrash] :: Uncaught Exception/Catch (MONITOR)");
  // console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  // console.log(" [AntiCrash] :: Multiple Resolves");
  // console.log(type, promise, reason);
});

client.login(config.app.token);