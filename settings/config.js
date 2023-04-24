const { ActivityType } = require("discord.js");


module.exports = {

  ///////////////////////////////////////////////
 //  CONFIG BOT A EDIT COMME BON VOUS SEMBLE  //
///////////////////////////////////////////////

  app: {
    token: 'MTA5NzU1MTMxNjAwMTIzMTAzOQ.GbKOZN.6GAjpI-FPguUFbKx2RXxgXSsPudzpWvaFcOUz0',
    prefix: '/', // Inutile étant donné que le bot utilise les slashcommands //
    clientid: '1097551316001231039'
  },

  activities: {
    activity: {
      name: '@vypstealer',
      type: ActivityType.Streaming,
      url: 'https://twitch.tv/vypstealer',
    },
    activity1: {
      name: 'the best and cheapest stealer on the market',
      type: ActivityType.Streaming,
      url: 'https://twitch.tv/vypstealer',
    },
    activity2: {
      name: '/help = commands list',
      type: ActivityType.Streaming,
      url: 'https://twitch.tv/vypstealer',
    },
    changeInterval: {
      time: 4000,
    },
  },

  commands: {
    ids: {
      information: {
        help: '1097552297057321028',
        botinfos: '1097552297057321027',
      },
      customer: {
        login: '1097552297057321025',
        check: '1097552297057321022',
        decode: '1097552297057321023',
        getrole: '1097552297057321024',
      },
      dev: {
        createkey: '1097552297057321026',
      },
    },
  },

  developers: {
      ids: {
        adm1: "",
        adm2: "",
        adm3: "",
        adm4: "",
        adm5: "",
        adm6: "",
        adm7: "",
        adm8: "",
        adm9: "",
        adm10: "",
      },
      names: {
        adm1: "Pseudo du 1er admin bot",
        adm2: "Pseudo du 2eme admin bot",
        adm3: "Pseudo du 3eme admin bot",
        adm4: "Pseudo du 3eme admin bot",
        adm5: "Pseudo du 3eme admin bot",
        adm6: "Pseudo du 3eme admin bot",
        adm7: "Pseudo du 3eme admin bot",
        adm8: "Pseudo du 3eme admin bot",
        adm9: "Pseudo du 3eme admin bot",
        adm10: "Pseudo du 3eme admin bot",
      },
  },
  
  MongoDB: '',

  embed: {
    author: {
      name: 'Vyp Stealer',
      icon_url: 'https://share.creavite.co/tk9omA4zK6lUgPWf.gif',
    },
    color: 0xFF0000,
    footer: '@vypstealer',
  },

  server: {
    customer_role: '1097285214641864835',
    guild_id: '1097256334543564942',
    channelkey_log: '1097285035280838788',
    tickets_channel: '1097284931375349930',
  },

  links: {
    telegram: "https://t.me/vypstealerglobal"
  },

  Slash: {
    Global: true,
  },
};




















































































  ////////////////////////////
 //  NE PAS TOUCHER ICI !  //
////////////////////////////


  /* botAPI: {
    listeningPort: "1337",
    url: `http://localhost:1337/botapi`,
  }, */


  /* audios: {
    supportAudios: {
      files: {
        a1: 'testSupport',
        aOnJoin: 'onStartAudio'
      },
      formats: {
        mp3: 'mp3',
        wav: 'wav',
        aac: 'aac',
        flac: 'flac',
        wma: 'wma',
        ogg: 'ogg',
      },
    },
  }, */

  /* vc: {
    supportChannels: {
      ids: {
        sc1: '1097518903862755490',
      },
      names: {
        sc1: 'Support channel number one',
      }
    },
  }, */