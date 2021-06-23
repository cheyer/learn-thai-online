import { checkAnswer } from "../../services/checkAnswer";
import { containsCommand } from "../../services/commands";
import { IUpdate } from "../../services/vendor";

const isCallback = (update: IUpdate) => !!update.callback_query;

export default (req, res) => {
  const update = req.body;

  if (isCallback(update)) {
    checkAnswer(update);
  } else {
    containsCommand(update);
  }

  res.status(200).json({ text: `Hello Telegram Bot` });
};
