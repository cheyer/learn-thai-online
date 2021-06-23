import { IUpdate } from "../vendor";

export const isCallback = (update: IUpdate) => !!update.callback_query;
