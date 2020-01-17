const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTk0NDkyMTk0MzYzODAyNyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTcwMTEwNDQ2fQ.qvP8W0C_gadAAhJ5YzF75rLRRv0B0HLIH2TAuBbKgo4', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  var cevaplar = ['Boks Makinesi Sonucu : **Boks makinesi kırıldı :D=3000** !', 
                 'Boks Makinesi Sonucu : **Çok yavaş vurdun bir daha dene :smile: 100** !', 
                 'Boks Makinesi Sonucu : **Eh,yani 900** !', 
                 'Boks Makinesi Sonucu : **1000** !',
                 'Boks Makinesi Sonucu : **Acayip yavaş vurdun :nauseated_face: =50** !', 
                 'Boks Makinesi Sonucu : **Çok iyi! :boxing_glove: =2000** !', 
                 'Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! :muscle: =700** !',
                 'Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! :muscle: = 550** !', 
                 'Boks Makinesi Sonucu : **Niye 1000 değil :D=999** !', 
                 'Boks Makinesi Sonucu : **Orta! :crown:=1250** !', 
                 'Boks Makinesi Sonucu : **Yine iyisin :white_check_mark: =1150** !', 
                 'Boks Makinesi Sonucu : **Fena değil :smile: =1200** !',
                ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 const ping = new Discord.RichEmbed()
 .setColor(2828)
 .setDescription("🥊 " + cevap)
 return  message.channel.sendEmbed(ping)
      } else {
        message.channel.send("`Bu komutu kullanabilmek için 12 saatte bir https://top.gg/bot/619944921943638027/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.``")
      }
  })
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['boks-makinası'],
   permLevel: 0,
   kategori: "Eğlence"
 };

 exports.help = {
   name: 'boks',
   description: 'Boks makinesine vurur.',
   usage: 'boks'
};