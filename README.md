# Member Count

This is the repository for a bot that will edit a channel name to whatever you like, plus the member count at the end. It's pretty self explanatory unless you can't code, so let me walk you through it.

## How it works

The bot is only designed to be used for one server, so I won't be running this bot for you or something, you must do it yourself.

## How to use

You must create a new bot user on Discord, and copy the token. You can find tutorials of how to do that online. Then you must head over to the config.json file and put the token inside the empty quotes. There is a prefix option there too in case you wanna add commands later. Then, three times within the code, there is `client.guilds.cache.get('ID');`, where you replace `'ID'` with your desired server ID. This requires developer mode enabled on discord. Secondly, three times also, there is `Guild.channels.cache.get('ID');`, where you replace `'ID'` with your desired channel ID.

## How to run

Head to command prompt (or whatever terminal you use), change the directory to the folder that your files are in, and type `node mem.js` and it will run the bot if you have done everything correctly.

## Links

[Click here to join the Developer World Discord Server](https://discord.gg/g5Svrjr)