const Discord = require("discord.js");

const TOKEN = "هنا التوكين حقك";

var bot = new Discord.Client();

bot.on("ready", function() {
   console.log("Ready");   
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;


       if(message.content ===("باك")){
          message.channel.send('وِلْكُمْ يْا عَسَلْ');
          }
           if(message.content ===("برب")){
          message.channel.send('تِيْت يْا عَسَل');
             }
              if(message.content ===("كبوش")){
                 message.channel.send('أمِرْ يْا عِيونْ كَبوشْ إِنتْ ؟');
                    }
              if(message.content ===("قناة كبوش")){
                 message.channel.send('https://www.youtube.com/channel/UCsgZqsxIIPyPKfaTCHme-qQ');
                                     }
              if(message.content ===("السلام عليكم")){
                 message.channel.send('وعليكم السلام نورت ♥');

                                           }
              if(message.content ===("تكوتا")){
                 message.channel.send('اه اه اه');

                                                    }
              if(message.content ===(".")){
                 message.channel.send('يلبى الي ينقط بس ♥');

              if(message.content ===("كل زق")){
                 message.channel.send('كُلْ زَقْيِن يْا حَيْوَانْ');
              }
              if(message.content ===("كلزق")){
                 message.channel.send('كُلْ زَقْيِن يْا حَيْوَانْ');
              }
              
              
           
         } 

    });

bot.login(TOKEN); 
