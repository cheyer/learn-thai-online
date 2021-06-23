import { checkAnswer } from "./checkAnswer";
import { containsCommand } from "./commands";
import { isCallback } from "./utils/isCallback";
import { IUpdate } from "./vendor";

export const processRequest = async (update: IUpdate) => {
  if (isCallback(update)) {
    await checkAnswer(update);
  } else {
    await containsCommand(update);
  }
};
