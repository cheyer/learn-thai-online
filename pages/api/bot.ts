import { containsCommand } from "../../services/commands";

export default (req, res) => {
  const update = req.body;

  containsCommand(update);

  res.status(200).json({ text: `Hello Telegram Bot` });
};
