const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const db = require('quick.db');

exports.run = function(client, message, args) {
  
  let kanal = "628224206307459082" //Güncelleme Mesajı Hangi Kanala Gidecek 
  
  let versiyon = args[0]
  
  let madde = args.slice(1).join(" ");
  
  let güncelleme = madde.replace('1', `\`1\``).replace("2", `\n\`2\``).replace("3", `\n\`3\``).replace("4", `\n\`4\``).replace("5", `\n\`5\``)
  
  if(!versiyon || !güncelleme) { 
    
    message.channel.send(`:x: Versiyon veya güncelleme mesajını belirtmeyi unuttun`)
  
  } else {
  
    client.channels.get(kanal).send(stripIndents`
\`\`\`Versiyon ${versiyon} Değişiklik Kayıtları\`\`\`
${güncelleme}
`)
  
  message.channel.send(`<a:evett:564549317445156923> Yeni versiyon \`${versiyon}\` başarıyla yayımlandı!`)
    
    db.set(`activity_${client.user.id}`, versiyon)
  }

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
    kategori: 'Sahip'
};

exports.help = {
    name: 'güncelleme',
    description: 'Güncelleme yayınlamayı sağlar',
    usage: 'güncelleme',
};