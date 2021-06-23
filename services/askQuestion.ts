import consonants from "../data/consonants";
import { sendMessage } from "./telegramClient";
import { IInlineKeyboardButtons } from "./vendor";

const getRandomInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
const shuffleArray = (a: Array<any>) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const generateQuestion = () => {
  const randomIndex = getRandomInt(consonants.length);

  const text = `What is '${consonants[randomIndex].symbol}'?`;
  const correctButton = {
    callback_data: "true",
    text: consonants[randomIndex].meaning,
  };

  const restConsonants = [
    ...consonants.slice(0, randomIndex),
    ...consonants.slice(randomIndex + 1),
  ];

  const buttons: IInlineKeyboardButtons[][] = [
    [correctButton],
    [{ text: restConsonants[0].meaning, callback_data: "false" }],
    [{ text: restConsonants[1].meaning, callback_data: "false" }],
    [{ text: restConsonants[2].meaning, callback_data: "false" }],
  ];
  return { text, buttons: shuffleArray(buttons) };
};

export const askQuestion = async (chatId: number) => {
  const { text, buttons } = generateQuestion();

  return sendMessage({
    chat_id: chatId,
    reply_markup: {
      inline_keyboard: buttons,
    },
    text,
  });
};
