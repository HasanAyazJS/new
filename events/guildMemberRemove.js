module.exports = member => {
  let guild = member.guild;
  member.send('Neden Gittin Sana Çok Isınmıştık?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
