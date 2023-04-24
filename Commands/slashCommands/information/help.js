const { Message, PermissionFlagsBits, Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder, ApplicationCommandType } = require("discord.js");
const config = require('./../../../settings/config.js');

module.exports = {
  name: "help",
  description: `help command of @vypbot`,
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
    let embed = new EmbedBuilder()
    embed.setAuthor({ name: config.embed.author.name, iconURL: config.embed.author.icon_url })
    embed.setDescription(`*You can make a ticket if you want to pay a vypstealer key*`)
    embed.addFields(
      { name: '**:information_source: Informative commands**', value: `</help:${config.commands.ids.information.help}> - </botinfos:${config.commands.ids.information.botinfos}>`, inline: false },
      { name: '**:star: Customer commands**', value: `</login:${config.commands.ids.customer.login}> - </check:${config.commands.ids.customer.check}> - </decode:${config.commands.ids.customer.decode}> - </getrole:${config.commands.ids.customer.getrole}>`, inline: false },
      { name: '**:computer: Developer commands**', value: `</createkey:${config.commands.ids.dev.createkey}>`, inline: false },
    )
    embed.setColor(config.embed.color)
    embed.setFooter({ text: config.embed.footer })

    inter.reply({ embeds: [embed] });
  },
};