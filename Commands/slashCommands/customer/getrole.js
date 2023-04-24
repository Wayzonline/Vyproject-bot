const { PermissionFlagsBits, Client, EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js");
const config = require('./../../../settings/config.js');
const profiles = require('./../../../tables/profiles.js');
const db = require('quick.db')
module.exports = {
    name: "getrole",
    description: `getrole command of @vypbot`,
    userPermissions: PermissionFlagsBits.SendMessages,
    botPermissions: PermissionFlagsBits.SendMessages,
    category: "customer",
    type: ApplicationCommandType.ChatInput,

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} inter
     */
    run: async (client, inter) => {
		// const wl = db.get('wl');
		// if (!wl.includes(inter.author.id) && !client.config.owners.includes(inter.author.id)) return inter.reply('lmao');
        const guild = client.guilds.cache.get(config.server.guild_id);
        const user_id = inter.member.id;
        const member = await guild.members.fetch(user_id).catch(() => { });
        const USERID = user_id;

        const customer = await profiles.exists({userid: USERID});

        if (customer) {
		    try {
			    await member.roles.add(config.server.customer_role)

			    return inter.reply({ content: 'Gave you the role successfully !', ephemeral: true });
		    } catch {
			    return inter.reply({ content: 'Unknown error occured, try again later !', ephemeral: true });
		    }
        } else if (!customer) {
            return inter.reply({ content: `You are not a customer, please create a ticket to buy (<#${config.server.tickets_channel}>)`, ephemeral: true });
        }
	}
}