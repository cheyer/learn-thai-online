import { processRequest } from "../../lib/bot";

export default async (req, res) => {
  await processRequest(req.body);
  return res.status(200).json({ text: `Hello Telegram Bot` });
};
