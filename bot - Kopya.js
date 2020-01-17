const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const Jimp = require('jimp');
const fs = require('fs');
const moment = require('moment');  
require("moment-duration-format")
require('./util/eventLoader')(client);
const db = require("quick.db");
const request = require("request");
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Bot Hayata Döndürüldü. 7/24!`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken,
client.queue = new Map()
const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Verildi `)
.setColor("GREEN")
    .setFooter("MustafaKemalAtatürk", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: :white_check_mark: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)

});
client.on('guildMemberAdd', async member => {
  let sayi = await db.fetch(`sayac_${member.guild.id}`)
  let kanal = await db.fetch(`sayacK_${member.guild.id}`)
  
  if (!sayi) return
  if (!kanal) return
  
  client.channels.get(kanal).send(`:inbox_tray: ${member} Sunucuya katıldı! **${sayi}** kişi olmamıza **${sayi - member.guild.members.size}** üye kaldı!`)
})
client.on('guildMemberRemove', async member => {
  let sayi = await db.fetch(`sayac_${member.guild.id}`)
  let kanal = await db.fetch(`sayacK_${member.guild.id}`)
  
  if (!sayi) return
  if (!kanal) return
  
  client.channels.get(kanal).send(`:outbox_tray: ${member} Sunucudan ayrıldı! **${sayi}** kişi olmamıza **${sayi - member.guild.members.size}** üye kaldı!`)
})
client.on('guildMemberAdd', async member => {
  let tag = await db.fetch(`tag_${member.guild.id}`)
  
  if (!tag) return
  
  member.setNickname(tag.replace('{uye}', member.user.username))
})
const DBL = require("dblapi.js");
const dbl = new DBL('DBL TOKEN', client);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
client.on('guildMemberAdd ', member =>{
member.guild.channels.get('626095277111246848,626095297994686464').send(`
Hoş geldin! ${member} seninle {member.guild.memberCount} kişiyiz!
Sunucumuz Botlarına Oy Vererek Bize Detsek Çıkabilirsin Botlara Oy Vemek İçin !oy Yazman Yeterli
`)
})
client.on("message", async msg => {


  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm') {
          try {

                  return msg.reply('**Aleyküm Selam, Hoşgeldin :)** ')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
    
    }
    if (!i) return;

    });
  client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
              const bg = await Jimp.read("https://i.postimg.cc/LXrHDVJC/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment.duration(kurulus).format("D")   
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/603261090536882207/625300619959336960/images_1.jpeg');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   


  const kullanıcıpp = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
	ctx.lineWidth = 4;
  ctx.fill()
	ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
	ctx.clip();
  ctx.drawImage(kullanıcıpp, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'ZeRo BoT-güvenlik.png');
    chan.send(attachment)
});
client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 600000 //süresini dilediğiniz gibi kısaltabilirsiniz.
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`gold_${msg.author.id}`)
          if (i == 'gold') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
  var embed = new Discord.RichEmbed()
  .setAuthor(`OwO Gold Üye ${msg.author.username}`,`${msg.author.avatarURL || msg.author.displayAvatarURL}`)
  .setDescription(`:gem: Gold Üye Belirdi = <@${msg.author.id}>`)
  .setColor("BLUE")
   msg.channel.send(embed)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});
client.on('guildDelete', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("RED")
.setTitle("BOT ATILDI!")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu Sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('631096128934379540').send(rrrsembed);
  
});


client.on('guildCreate', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("GREEN")
.setTitle("BOT EKLENDİ!")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('631096128934379540').send(rrrsembed);
  
});
client.on("message",message => {
  if(!message.author.bot) return;
  db.fetch(`usohbet_${message.channel.id}`).then(usdurum => {
    if(!usdurum || usdurum === 'pasif') return;
    else {
      message.delete(5000)
    }
})})
client.on("guildMemberAdd", async member => {
  const fs = require("fs");
  let gkanal = await db.fetch(`girisC_${member.guild.id}`);
  const gözelkanal = member.guild.channels.get(gkanal);
  if (!gözelkanal) return;
  let username = member.user.username;
  if (gözelkanal === undefined || gözelkanal === null) return;
  if (gözelkanal.type === "text") {
    const bg = await Jimp.read(
      "https://cdn.discordapp.com/attachments/611132697674383368/624908046606270464/rgc_v2.png"
    );
    const userimg = await Jimp.read(member.user.avatarURL);
    var font;
    if (member.user.tag.length < 10)
      font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    else if (member.user.tag.length > 0)
      font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    await bg.print(font, 300, 300, member.user.tag);
    await userimg.resize(187, 169); ////boyut
    await bg.composite(userimg, 317, 15).write("./img/" + member.id + ".png"); ///sağa sola, yukarı aşş

    setTimeout(function() {
      gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
      gözelkanal.send(
        `\`${member.user.tag}\`İsimli Kullanıcı Sunucuya Giriş Yaptı. Hoşgeldin İyi Eğlenceler`
      );
    }, 1000);
    setTimeout(function() {}, 10000);
  }
});

client.on("guildMemberRemove", async member => {
  const fs = require("fs");
  let gkanal = await db.fetch(`girisC_${member.guild.id}`);
  const gözelkanal = member.guild.channels.get(gkanal);
  if (!gözelkanal) return;
  let username = member.user.username;
  if (gözelkanal === undefined || gözelkanal === null) return;
  if (gözelkanal.type === "text") {
    const bg = await Jimp.read(
      "https://cdn.discordapp.com/attachments/611132697674383368/624908046606270464/rgc_v2.png"
    );
    const userimg = await Jimp.read(member.user.avatarURL);
    var font;
    if (member.user.tag.length < 10)
      font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    else if (member.user.tag.length > 0)
      font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    await bg.print(font, 300, 300, member.user.tag);
    await userimg.resize(189, 173); ////boyut
    await bg.composite(userimg, 317, 15).write("./img/" + member.id + ".png"); ///sağa sola, yukarı aşşa
    setTimeout(function() {
      gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
      gözelkanal.send(
        `\`${member.user.tag}\`İsimli Kullanıcı Sunucudan Çıkış Yaptı. Seni Özliyicez :(`
      );
    }, 1000);
    setTimeout(function() {}, 10000);
  }
});
client.on(`guildMemberAdd`, async member => {
  const e = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setImage(`https://media.giphy.com/media/mEnjcZjPZ5RcY4gjK4/giphy.gif`)
    .addField(`Sunucumuza geldiğin için teşekkür ederim!`, `MustafaKemalAtatürk iyi eğlenceler diler`)
    .setFooter(`Bu Sunucu 7/24 MustafaKemalAtatürk tarafından korunuyor.`)
  member.send(e);
});
 function cpanel1() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`+50 Sunucu !`);
            cpanel2();
        }, 10000);
      });
}

  function cpanel2() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`+82 Komut !`);
            cpanel3();
        }, 10000);
      });
  }
  function cpanel3() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`mkasite.glitch.me/Anasayfa.html`);
            cpanel1();
        }, 10000); //Hızı düşürmeyin
      });
  }

  function cpanel4() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`ᴄ ᴏ η ɗ#4185`);
            cpanel3();
        }, 10000);
      });
  }

  function cpanel5() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`Sponsor'lar`);
            cpanel3();
        }, 10000);
      });
  }

  function cpanel6() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`Kenshin BOT`);
            cpanel3();
        }, 10000);
      });
  }

  function cpanel7() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`Zehir BOT`);
            cpanel3();
        }, 10000);
      });
  }
 function cpanel8() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`Cond'Un Zaafı`);
            cpanel3();
        }, 10000);
      });
  }
 function cpanel9() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`Çikolatalı Süt`);
            cpanel3();
        }, 10000);
      });
  }
 function cpanel10() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`Sevgilisi Yol`);
            cpanel3();
        }, 10000);
      });
  }
function cpanel11() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`631134891278467073`).setName(`İg : eraykaya4884`);
            cpanel3();
        }, 10000);
      });
  }
client.on("message", msg => {
  
  
  db.fetch(`kufur_${msg.guild.id}`).then(i => {
    if (i == 'acik') {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();

                  return msg.reply('Küfür etmemelisin! ⚠').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  })
    });
client.login(ayarlar.token);"NjE5OTQ0OTIxOTQzNjM4MDI3.XZS6OA.Z_TEM_LhEQeE2ny6ytqQxahfm-Q"