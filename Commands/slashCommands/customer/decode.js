const { PermissionFlagsBits, Client, EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, AttachmentBuilder } = require("discord.js");
const config = require('./../../../settings/config.js');
const axios = require('axios');

module.exports = {
    name: "decode",
    description: `decode command of @vypbot`,
    userPermissions: PermissionFlagsBits.SendMessages,
    botPermissions: PermissionFlagsBits.SendMessages,
    category: "customer",
    type: ApplicationCommandType.ChatInput,

    options: [
        {
            name: 'attachment',
            description: 'Upload an attachment',
            required: true,
            type: 11
        }
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} inter
     */
    run: async (client, inter, reference) => {

        const interactionReceiveInformation = await inter.options.getAttachment('attachment');
        if (!interactionReceiveInformation) return inter.reply({ content: 'You need to reply to the message containing the cookie file.', ephemeral: true })

        axios.post(interactionReceiveInformation.attachment).then(res => {
            let content = res.data.toString();
            var new_cookies = "";
            content.split(/\r?\n/).forEach((line) => {
                if (line.includes("COOKIES FROM:")) return;
                if (line == "" || line == undefined) return;
                var host = line.split("|")[0]?.replace("HOST KEY: ", "").trim();
                var name = line.split("|")[1]?.replace(" NAME: ", "").trim();
                var value = line.split("|")[2]?.replace(" VALUE: ", "").trim();
                new_cookies += host + "	" + "TRUE" + "	/" + "	FALSE" + "	2597573456	" + name + "	" + value + "\n"
            });
            let decoded = Buffer.from(new_cookies)
            return inter.reply({ files: [new AttachmentBuilder(decoded, { name: 'valid-cookies.txt' })], ephemeral: true })
        })
            .catch((err) => {
                console.log(err)
                return inter.reply({ content: 'Error!', ephemeral: true })
            })
    },
};