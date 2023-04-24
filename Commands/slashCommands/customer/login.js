const { PermissionFlagsBits, Client, EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js");
const config = require('./../../../settings/config.js');

module.exports = {
    name: "login",
    description: `login command of @vypbot`,
    userPermissions: PermissionFlagsBits.SendMessages,
    botPermissions: PermissionFlagsBits.SendMessages,
    category: "customer",
    type: ApplicationCommandType.ChatInput,

    options: [
        {
            name: 'token',
            description: 'You must enter a token!',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} inter
     */
    run: async (client, inter) => {

        const token = inter.options.get('token').value;

        if (!token) {
            return inter.reply({ content: "Please provide a token!", ephemeral: true });
        }
        
        return inter.reply({ content: `\`\`\`js\n(function(){window.t="${token}";window.localStorage=document.body.appendChild(document.createElement \`iframe\`).contentWindow.localStorage;window.setInterval(() => window.localStorage.token=\`"\${window.t}"\`); window.location.reload();})();\`\`\``, ephemeral: true })
    },
};