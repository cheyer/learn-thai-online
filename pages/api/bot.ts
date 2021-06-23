import { processRequest } from "../../lib/bot";

export default (req, res) => {
  processRequest(req.body);
  res.status(200).json({ text: `Hello Telegram Bot` });
};
