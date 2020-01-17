const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
 const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTk0NDkyMTk0MzYzODAyNyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTcwMTEwNDQ2fQ.qvP8W0C_gadAAhJ5YzF75rLRRv0B0HLIH2TAuBbKgo4', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  var Random = [
'**Başarı tüm ulusun azim ve inancıyla çabasını birleştirmesi sonucu kazanabilir.**',
'**Bir milletin medeniyetini ölçmek istiyor musunuz? Kadınlarına nasıl muamele edildiğine bakınız.**',
'**Beni görmek demek, mutlaka yüzümü görmek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu kafidir.**',
'**Cumhuriyet rejimi demek, demokrasi sistemi ile devlet şekli demektir. Biz Cumhuriyeti kurduk, o on yaşını doldururken demokrasinin bütün icaplarını sırası geldikçe uygulamaya koymalıdır.**',
'**Taş kırılır, tunç erir ama Türklük ebedidir.**',
'**En büyük savaş, cahilliğe karşı yapılan savaştır.**',
'**Vatana ihanetin nedeni olmaz. Er yada geç bedeli olur.**',
'**Gençliği yetiştiriniz. Onlara ilim ve irfanın müspet fikirlerini veriniz. Geleceğin aydınlığına onlarla kavuşacaksınız.**',
'**Bir ulus, sımsıkı birbirine bağlı olmayı bildikçe yeryüzünde onu dağıtabilecek bir güç düşünülemez.**',
'**Eğer bir gün benim sözlerim bilimle ters düşerse bilimi seçin.*',
'**Ben, manevi miras olarak hiçbir nass-ı katı, hiçbir dogma, hiçbir donmuş ve kalıplaşmış kural bırakmıyorum. Benim manevi mirasım, bilim ve akıldır. Benden sonra beni benimsemek isteyenler, bu temel mihver üzerinde akıl ve ilmin rehberliğini kabul ederlerse manevî mirasçılarım olurlar. **',
'**Biz cahil dediğimiz zaman, mektepte okumamış olanları kastetmiyoruz. Kastettiğimiz ilim, hakikati bilmektir. Yoksa okumuş olanlardan en büyük cahiller çıktığı gibi, hiç okumak bilmeyenlerden de hakikati gören gerçek alimler çıkabilir.**',
'**Birtakım kuş beyinli kimselere kendinizi beğendirmek hevesine düşmeyiniz; bunun hiçbir kıymeti ve önemi yoktur.**',
'**Bir milletin ahlak değeri, o milletin yükselmesini sağlar. Bir millet, zenginliğiyle değil, ahlak değeriyle ölçülür.**',
'**Bir millette, özellikle bir milletin iş başında bulunan yöneticilerinde özel istek ve çıkar duygusu, vatanın yüce görevlerinin gerektirdiği duygulardan üstün olursa, memleketin yıkılıp kaybolması kaçınılmaz bir sondur.**',
'**Ey yükselen yeni nesil! Gelecek sizindir. Cumhuriyeti biz kurduk, onu sonsuza kadar yaşatacak olan sizlersiniz.**',
'**Ey Türk Gençliği! Birinci vazifen Türk istiklal ve cumhuriyetini ilelebet muhafaza ve müdafaa etmektir.**',
'**Türk gençliği amaca, bizim yüksek ülkümüze, durmadan, yorulmadan yürüyecektir.**',
'**Bir milletin kültür düzeyi üç safhada; devlet, düşünce ve ekonomideki çalışma ve başarılarının özüyle ölçülür.**',
'**Bir millet savaş alanlarında ne kadar zafer elde ederse etsin-, o zaferin sürekli sonuçlar vermesi ancak kültür ordusu ile mümkündür.**',
'**Asıl uğraşmaya mecbur olduğumuz şey, yüksek kültürde ve fazilette dünya birinciliğini tutmaktır.**',
'**Kültür zeminle orantılıdır. O zemin milletin seciyesidir.**',
'**Kültür, okumak, anlamak, görebilmek, görebildiğinden anlam çıkarmak, ders almak, düşünmek ve zekayı geliştirmektir.**',
'**Biz TürkIer, bütün tarihimiz boyunca hürriyet ve istikIaIe timsaI oImuş bir miIIetiz.**',
'**Medeni oImayan insanIar, medeni oIanIarın ayakIarı aItında kaImaya mahkumdurIar**',
'**Ben icap ettiği zaman en büyük hediyem oImak üzere, Türk MiIIetine canımı vereceğim.**',
'**AsıI önemIi oIan ve memIeketi temeIinden yıkan, haIkını esir eden, içerdeki cephenin suskunIuğudur.**',
'**MiIIetimiz her güçIük ve zorIuk karşısında, durmadan iIerIemekte ve yükseImektedir. Büyük Türk MiIIetinin bu yoIdaki hızını, her vasıtayIa arttırmaya çaIışmak, bizim hepimizin en kutIu vazifemizdir.**',
'**Medeniyetin emir ve taIep ettiğini yapmak insan oImak için yeterIidir.**',
'**Hiçbir şeye ihtiyacımız yok, yaInız bir şeye ihtiyacımız vardır; çaIışkan oImak!**',
'**Öğretmen bir kandiIe benzer, kendini tüketerek başkaIarına ışık verir.**',
'**Türkiye Cumhuriyeti’ni kuran Türkiye haIkına Türk miIIeti denir.**',
'**OrduIarımızın kazandığı zafer, sizin ve sizin orduIarınızın zaferi için yaInız zemin hazırIadı.**',
'**Gerçek zaferi siz kazanacak ve devam edeceksiniz ve mutIaka başarıIı oIacaksınız.**',
'**Herkes uIusaI görevini ve sorumIuIuğunu biImeIi, memIeket meseIeIeri üzerinde o düşünceyIe, düşünüp çaIışmayı görev edinmeIidir.**',
'**BiIeIim ki miIIi benIiğini biImeyen miIIetIer başka miIIetIere yem oIurIar. Bütün ümidim gençIiktedir.**',


];
var mkasozuver = Math.floor(Math.random()*Random.length);
const mkasozu= new Discord.RichEmbed()
.setDescription(`${Random[mkasozuver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(mkasozu)
      } else {
        message.channel.send("`Bu komutu kullanabilmek için 12 saatte bir https://top.gg/bot/619944921943638027/vote sitesinden bota oy vermeniz gerekmektedir. Onaylanması birkaç dakika sürebilir, lütfen bekleyin.``")
      }
  })
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0,
kategori: "Kullanıcı"
};

exports.help = {
name: 'mkasözü',
description: 'Bot Tarafından Rasgele Mka Sözü Gönderilir.',
usage: 'mkasözü'
};