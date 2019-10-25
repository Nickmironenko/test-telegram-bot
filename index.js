const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

console.log ('Бот успешно запустился');

const token = '979140890:AAGO-VcaWkhDY_WCCssQDjdfhgHwjf3ZHLyi_4';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg, match) => {

  const chatId = msg.chat.id;

  console.log (msg);

  bot.sendMessage (chatId, 'Здарова, ' + msg.from.first_name + '👋! Здесь будет тест комманд. Удачи.');

});

bot.onText(/\/hello (.+)/, (msg) => {

  const chatId = msg.chat.id;
  console.log (msg);
  bot.on("polling_error", (err) => console.log(err));
if (msg.text == "/hello test") { 
  bot.sendMessage (chatId, "done");
} else if (msg.text) {
  bot.sendMessage (chatId, "???");
}
});

bot.onText(/\/info/, (msg, match) => {

  const chatId = msg.chat.id;

  console.log (msg);

  bot.sendMessage (chatId, "Твое имя " + msg.from.first_name +  "\n Id сообщения: " + msg.message_id + "\n Твой id: " + msg.from.id + "\n Твой юзверь: " + msg.from.username + "\n Время у тебя: " + msg.date);

});

bot.onText(/\/pic (.+)/, (msg) => {

  const chatId = msg.chat.id;
  const photo = 'done.jpg'
  console.log (msg);
  bot.on("polling_error", (err) => console.log(err));
if (msg.text == "/pic test") { 
  bot.sendPhoto (chatId, photo);
} else if (msg.text) {
  bot.sendMessage (chatId, "???");
}
});
