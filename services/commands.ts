import { translations } from "../data/translations";
import { askQuestion } from "./askQuestion";
import { sendMessage } from "./telegramClient";
import { IUpdate } from "./vendor";

export enum BOT_COMMANDS {
  HELP = "/help",
  START = "/start",
  VIDEO = "/video",
}

export const containsCommand = async (update: IUpdate) => {
  const chatId = update.message.chat.id;
  const text = update.message.text;

  switch (text) {
    case BOT_COMMANDS.VIDEO:
      return sendMessage({
        chat_id: chatId,
        text: "https://www.youtube.com/watch?v=1Tk-x5KHJFI",
      });
    case BOT_COMMANDS.START:
      return askQuestion(chatId);
    case BOT_COMMANDS.HELP:
    default:
      return sendMessage({
        chat_id: chatId,
        text: translations.defaultMessage,
      });
  }
};
