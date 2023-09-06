# 🤖 Vyproject Discord bot selfleak
Here's a bot from an unreleased project I had with a friend, but since we aren't talking together anymore and because the project is dead I decided to release this to give a solid base if someone need a bot for any Discord stealer project.



# 💿 How to setup ?
Go the the [releases section](https://github.com/Wayzdsc/Vyproject-bot/releases) and download the release named "Release.zip"

Once you downloaded the release, extract the .zip archive, and then you will have two batch files

First of all, open the install.bat one, and wait the process to finish. When it's done, it will ask you to press a key to exit the window

Then, go edit the config in the root folder of the bot (the config.js file). Take care to edit since I mentioned it, and btw don't touch to code in comments format. You will see this code if you scroll down the file, but yeah don't touch anything there it's important, cuz we don't need this so don't uncomment these lines please

In the config, the more important to edit is the token and appid named "clientd" in the app part, the commands ids in different command categories (information, customer && dev), the developers ids (bot admin rights, to create a key since no other dev command exists rn. I've created a bunch of admins ids available in the config, for a total of 10 bot admins which can be added. Simply copy your id or friends ids you want to be added, and paste them in each admins slots (adm1, adm2, adm3 etc.) You also need to change each of their nicknames, like for example if I enter my id in the adm1 slot, I'll also add my name below in the adm1 slot located in the name part. You also can add more slots, as much as you want, but you also need to add them in createkey command so the bot will check if the guy is a bot admin when creating a key. I guess 10 bot admins is already huge so no need to add more ! You will also need to edit the the stuff located in the server part

THE MOST IMPORTANT THING in the config is the MongoDB part, where you need to copy your app connection link from MongoDB website and then paste it in the config. This part is necessary and can't be skipped, as the previous one but yeah it's really really important, as the createkey is based on it, each time you create a key it register this key in the mongodb database

Also, if any of these steps are too confusing for you, and you can't make it work because you don't understand something I'll let you search on Google, that's how we learn 👍

Anyways, here is some evident tracks I found to give you for some of precedent steps: How to get a Discord bot slashcommand id / How to get my Discord account userid / How to get a Discord channel id / How to get a Discord role id / How to create a MongoDB database and connect it to my Discord bot

Now you edited the config file, just save it and then simply start the index.js file in local, with the run.bat file, or if you have a VPS or any kind of way to keep it online use just it, cuz it's better than keeping your computer on 24/7 😂



# ⭐ How can you support me ?
If you liked this basic bot, and if you are satisfied by these detailed explanations, then just please follow me and leave a star on the project, tysm in advance it's really helpful to me. I'm giving my time to release the best things I can so it could be really appreciable !
