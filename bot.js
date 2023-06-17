const TelegramBot = require('node-telegram-bot-api');

//Telegram bot API tokenini kiritish

const token = '6211847310:AAFugEYslKqB7aKyBfZFhVf0n2x-kKOXPS4';

const bot = new TelegramBot(token, {polling: true});

// Guruhga qo'shilgan yangi foydalanuvchilarni tekshirib chiqish

bot.on('new_chat_members', (msg) => {

    const chatId = msg.chat.id;

    const user = msg.from;

    // Qoidalar matnini yozish

    const qoidalar = "Salom " + user.first_name + "! \nGuruhga xush kelibsiz. \n\nQoidalar:\n1. ... \n2. ... \n\nGuruh qoidalarini tasdiqlash uchun /tasdiqlash buyrug'ini bosing.";

    // Foydalanuvchiga qoidalar matnini yuborish

    bot.sendMessage(chatId, qoidalar);

});

// Foydalanuvchini tasdiqlash

bot.onText(/\/tasdiqlash/, (msg) => {

    const chatId = msg.chat.id;

    // Foydalanuvchini tasdiqlangan degani bildirish

    bot.sendMessage(chatId, 'Siz guruh qoidalarini tasdiqladingiz. Hush kelibsiz!');

});
