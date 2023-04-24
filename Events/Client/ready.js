const { ActivityType } = require("discord.js");
const chalk = require('chalk');
const client = require("../../index");
const config = require('./../../settings/config.js');
const mongoose = require('mongoose');

client.on("ready", () => {
    console.log(chalk.yellow(`[-] The robot ${client.user.tag} is now connected.\n[-] Online on ${client.guilds.cache.size} servers for a total of ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users.`));

    const activities = [
        { name: config.activities.activity.name, type: config.activities.activity.type, url: config.activities.activity.url },
        { name: config.activities.activity1.name, type:config.activities.activity1.type, url: config.activities.activity1.url },
        { name: config.activities.activity2.name, type: config.activities.activity2.type, url: config.activities.activity2.url }
    ];

    let i = 0;
    setInterval(() => {
        if (i >= activities.length) i = 0
        client.user.setActivity(activities[i])
        i++;
    }, config.activities.changeInterval.time);
});