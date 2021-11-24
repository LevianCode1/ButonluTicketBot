const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
      name: 'test',

    execute(client, message) {
const setupEmbed = new MessageEmbed();

      		setupEmbed.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
          setupEmbed.setDescription(`**Bot Başarılı Bir Şekilde Çalışıyor**`)
          	setupEmbed.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
          	setupEmbed.setTimestamp()
	  		setupEmbed.setFooter(client.user.username, client.user.avatarURL())
		  	setupEmbed.setColor(message.guild.me.displayColor)
  message.channel.send({ embeds: [setupEmbed]});
    },
};