module.exports = member => {
    let username = member.user.username;
    member.send('Hoşgldin Asker **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
