import { translations } from "../../data/translations";
import { askQuestion } from "./askQuestion";
import { answerCallbackQuery } from "./services/telegramClient";
import { IUpdate } from "./vendor";

export const checkAnswer = async (update: IUpdate) => {
  const callbackQuery = update.callback_query;

  await answerCallbackQuery({
    callback_query_id: callbackQuery.id,
    text:
      callbackQuery.data === "true"
        ? translations.answerCorrect
        : translations.answerIncorrect,
  });

  if (callbackQuery.data === "true") {
    await askQuestion(callbackQuery.from.id);
  }
};
