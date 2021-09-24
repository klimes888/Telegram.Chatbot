
const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config();

const token = process.env.TOKEN

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1]; 

  console.log(chatId, resp)

    bot.sendMessage(chatId, resp);
});


bot.onText(/\/image/, (msg) => {

  bot.sendPhoto(msg.chat.id,"https://i.ytimg.com/vi/sXnCG0ERp_U/maxresdefault.jpg", {caption : "Here we go ! \nThis is just a caption "} );

  });

  bot.onText(/\/keyboard/, (msg) => {

    bot.sendMessage(msg.chat.id, "뭐가 궁금함?", {
    "reply_markup": {
        "keyboard": [["1.넌 누구?", "2.무슨 기능"],   ["Keyboard"], ["I'm robot"]]
        }
    });
  });


// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;

//     bot.sendMessage(chatId, 'Hi! Have a nice day!');
// });