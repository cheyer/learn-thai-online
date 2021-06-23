import { post } from "./fetch";
import { IMessageOptions } from "./vendor";

export const sendMessage = async (options: IMessageOptions) =>
  await post("sendMessage", options);
