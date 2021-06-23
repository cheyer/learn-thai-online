import { checkAnswer } from "./checkAnswer";
import { containsCommand } from "./commands";
import { isCallback } from "./utils/isCallback";
import { IUpdate } from "./vendor";

export const processRequest = (update: IUpdate) => {
  if (isCallback(update)) {
    checkAnswer(update);
  } else {
    containsCommand(update);
  }
};
