const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix; "np/"

module.exports = client => {
console.log('>> Oynuyor Kısmı Başarıyla Güncellendi. <<');
console.log('>> Bot Hazır Giriş Yapıldı! <<');
  client.user.setStatus("online");
   var oyun = [
    "MustafaKemalAtatürk ",
    "#YENİDEN AKTİFİZ",
    "7/24 Türkish Bots",
    "Efsane Yeniden Burada",
    "Oy Vermeyi Unutmayın!",
    "Kurucu :Emre",
""+ client.guilds.size + " Sunucu " + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()  + " Kullanıcı Beni Kullanıyor."


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/eraykaya4884");
        }, 2 * 7000);
}
