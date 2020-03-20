const discord = require('discord.js');
const client = new discord.Client()

const token = require('./config.json').token;

client.login(token);

client.on('ready', () => {
    let Guild = client.guilds.cache.get('ID');
    let memberCount = Guild.memberCount;
    let memberCountChannel = Guild.channels.cache.get('ID');
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberAdd', () => {
    let Guild = client.guilds.cache.get('ID');
    let memberCount = Guild.memberCount;
    let memberCountChannel = Guild.channels.cache.get('ID');
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberRemove', () => {
    let Guild = client.guilds.cache.get('ID');
    let memberCount = Guild.memberCount;
    let memberCountChannel = Guild.channels.cache.get('ID');
    memberCountChannel.setName('Members: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});