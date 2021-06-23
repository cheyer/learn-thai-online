import { sendMessage } from "../../services/telegramClient";

export default (req, res) => {
  const update = req.body;
  const chatId = update.message.chat.id;

  sendMessage({
    chat_id: chatId,
    text: "Welcome to the Thai Alphabet Learn Bot. To start the game type or click on /start. To see a video and learn the consonants and their pronounciation type or click on /video. For help type or click on /help",
  });

  res.status(200).json({ text: `Hello Telegram Bot` });
};
