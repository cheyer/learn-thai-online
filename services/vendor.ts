export interface IUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  can_join_groups?: boolean;
  can_read_all_group_messages?: boolean;
  supports_inline_queries?: boolean;
}

export interface IChat {
  id: number;
  first_name: string;
  username: string;
  type: string;
}

export interface IMessage {
  message_id: number;
  from: IUser;
  chat: IChat;
  date: number;
  text: string;
}

export interface ICallbackQuery {
  id: string;
  from: IUser;
  message?: IMessage;
  inline_message_id?: string;
  chat_instance: string;
  data?: string;
  game_short_name?: string;
}

export interface IInlineKeyboardMarkup {
  inline_keyboard: IInlineKeyboardButton[][];
}

export interface IInlineKeyboardButton {
  callback_data?: string;
  text: string;
  url?: string;
}

export interface IUpdate {
  update_id: number;
  message?: IMessage;
  callback_query?: ICallbackQuery;
}

export interface IMessageOptions {
  chat_id: number | string;
  text: string;
  parse_mode?: string;
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?: IInlineKeyboardMarkup;
}

export interface IInlineKeyboardButtons {
  text: string;
  callback_data: string;
}

// https://core.telegram.org/bots/api#answercallbackquery
export interface IAnswerCallbackQueryOptions {
  callback_query_id: string;
  text?: string;
  show_alert?: boolean;
  url?: string;
  cache_time?: number;
}
