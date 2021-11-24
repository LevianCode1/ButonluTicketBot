const { readdirSync } = require('fs');
const { Collection } = require('discord.js');

client.commands = new Collection();

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));

console.log(`Loading events...`);

for (const file of events) {
    const event = require(`../events/${file}`);
    console.log(`-> Loaded event ${file.split('.')[0]}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`../events/${file}`)];
};

console.log(`Loading commands...`);

const commands = readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commands) {
    const command = require(`../commands/${file}`);
    console.log(`-> Loaded command ${command.name.toLowerCase()}`);
    client.commands.set(command.name.toLowerCase(), command);
    delete require.cache[require.resolve(`../commands/${file}`)];
};