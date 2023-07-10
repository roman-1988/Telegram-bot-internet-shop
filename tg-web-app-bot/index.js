const TelegramBot = require("node-telegram-bot-api")

const token = "5834354543:AAFbJBab2H4dpFg2bx0qvWKXo_i1WeCojjo"

const bot = new TelegramBot(token, { polling: true })

// bot.onText(/\/echo (.+)/, (msg, match) => {

//     const chatId = msg.chat.id
//     const resp = match[1]

//     bot.sendMessage(chatId, resp)
// })

bot.on("message", (msg) => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, "Received your message")
})