const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const googleTTS = require("google-tts-api");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix =
    (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    ayarlar.prefix;

  let yazi = args.join(" ");

  if (!message.member.voiceChannel)
    return message.channel.send(
      " Lütfen sesli bir kanala katıl ve tekrar dene."
    );
  if (!yazi)
    return message.channel.send(
      " Sesli olarak söylenmesini istediğin mesajı belirtmelisin. `${prefix}seslimesaj Merhaba``"
    );

  googleTTS(`${yazi}`, "tr", 1).then(url => {
    message.member.voiceChannel.join().then(connection => {
      message.channel.send(` \`${yazi}\` mesajı sesli olarak söyleniyor.`);
      connection.playStream(url).on("end", () => {
        connection.disconnect();
      });
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Eğlence"
};

exports.help = {
  name: "söyle",
  description: "Gold üye özel botu konuşturma",
  usage: "söyle"
};