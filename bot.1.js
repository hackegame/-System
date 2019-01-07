const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`_help`,'https://www.twitch.tv/ksa.7772');
  console.log('CODE BY JOKER');
});
client.on('message', message => {
     if (message.content === "*help") {
message.author.send(".Best Commands" * `
 ".General Commands"
             *ping | سرعة الأتصال
              *id | معلومــات عــن حســابــك
           *say | ي كرر الكلام
               *avatar | صورتك في الدسكورد
".Server Commands"
            *roles | لمعرفت كم رتبه موجوده في اسرفر
              *clear | حذف الرسائل
             *kick | لطرد اي عضو
               *ban | لطرد اي عضو
".Bot Commands",
             *bot | عدد السيرفرات التي تستخدم البوت
".support"
           http://cutt.us/RolBot  | لـ أضافة البوت في سيرفرك
© Made By :yousif ™.

`);
    }
});
 
client.on("message", (message) => {
    if (message.content.startsWith("_kick")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You Dont Have **KICK_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Kicked From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
        }).catch(() => {
            message.channel.send(`:x: I cant kick this member`);
        });
    }
    if (message.content.startsWith("_ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You Dont Have **BAN_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " Banned From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
        }).catch(() => {
            message.channel.send(`:x: I cant ban this member`);
        });
    }
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        message.delete()
    return message.reply(`** يمنع ارسال الانفايتات في هاذا السيرفر : ! **`)
    }
});
    client.on('message', message => {
     if (message.content === "_id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
  .setDescription("معلومات عن الحــساب")
               .setFooter(`RolBot💞.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
       
  message.channel.sendEmbed(embed);
    }
});
 client.on('message', message => {
   
if (message.content === '_avatar') {
 
    message.channel.sendMessage(`` + message.author.avatarURL + `  ,?`);
  }
});
 
client.on("message", message => {
      if (message.content === "_ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
 
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "_lear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
     
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "RolBot??"
        }
      }}).then(msg => {msg.delete(3000)});
                          }
});
 
 
client.on('message', message => {
    if (message.content === "_roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
 
 
 
