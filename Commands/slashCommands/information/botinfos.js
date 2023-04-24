const { Message, PermissionFlagsBits, Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder, ApplicationCommandType } = require("discord.js");
const config = require('./../../../settings/config.js');

module.exports = {
    name: "botinfos",
    description: `botinfos command of @vypbot`,
    userPermissions: PermissionFlagsBits.SendMessages,
    botPermissions: PermissionFlagsBits.SendMessages,
    category: "information",
    type: ApplicationCommandType.ChatInput,
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} inter
     */
    run: async (client, inter) => {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        const uptime = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

        let embed = new EmbedBuilder()
            embed.setAuthor({ name: config.embed.author.name, iconURL: config.embed.author.icon_url })
            embed.setDescription(`*We have the most easy to use and cheapest stealer on the market*`)
            embed.addFields(
                { name: ':computer: Bot & stealer developers', value: config.developers.names.wayz, inline: false },
                // { name: ':diamond_shape_with_a_dot_inside: Dev contributor', value: config.developers.names.old, inline: true },
                { name: ':robot: Bot uptime', value: `${uptime}`, inline: false },
              )
            embed.setColor(config.embed.color)
            embed.setFooter({ text: config.embed.footer})

        const row = new ActionRowBuilder()
            row.addComponents(
                new ButtonBuilder()
                    .setLabel(`Join Telegram`)
                    .setStyle('Link')
                    .setDisabled(false)
                    .setURL(config.links.telegram)
            )
        inter.reply({ embeds: [embed], components: [row] })
    }
}