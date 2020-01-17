const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(`Yeterli Yetkin yokmuş gibi görünüyor.`);
  let vkanal = await db.fetch(`girisC_${message.guild.id}`);
  if (args[0] == "kapat") {
    if (!vkanal) return message.reply("Ayarlanmayan şeyi sıfırlayamazsın.");
    await db.delete(`girisC_${message.guild.id}`);
    message.channel.send(`Giriş çıkış başarıyla kapatıldı.`);
    return;
  }

  let channel = message.mentions.channels.first();
  if (!channel) {
    message.channel.send(
      "Ayarlamak istediğin kanalı etiketlemelisin.``tr!vkanal #giren-çıkan``"
    );
    return;
  }

  await db.set(`girisC_${message.guild.id}`, channel.id);

  return message.channel.send(
    `Resimli Giriş-Çıkış Kanalı ${channel} olarak ayarlandı.`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
kategori : 'Yetkili'
};

exports.help = {
  name: "vkanal",
  description: "Giriş Kanalını Ayarlar.",
  usage: "tr!hg-kanal <#kanal>"
};
