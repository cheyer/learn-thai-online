import { askQuestion } from "./askQuestion";
import { answerCallbackQuery } from "./telegramClient";
import { IUpdate } from "./vendor";

export const checkAnswer = async (update: IUpdate) => {
  const callbackQuery = update.callback_query;

  answerCallbackQuery({
    callback_query_id: callbackQuery.id,
    text:
      callbackQuery.data === "true"
        ? "This is correct ✅"
        : "Sorry this was not correcto 😢",
  });

  if (callbackQuery.data === "true") {
    await askQuestion(callbackQuery.from.id);
  }
};
