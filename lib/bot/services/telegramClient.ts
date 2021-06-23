import { post } from "./fetch";
import { IAnswerCallbackQueryOptions, IMessageOptions } from "../vendor";

export const sendMessage = async (options: IMessageOptions) =>
  await post("sendMessage", options);

export const answerCallbackQuery = async (
  options: IAnswerCallbackQueryOptions
) => await post("answerCallbackQuery", options);
