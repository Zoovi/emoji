import { decompressEmojis } from '../compressor';
import { CompressedEmoji } from '../compressor/compressor.types';
import type { Emoji } from './emoji.type';

type TextReplacements = Record<NonNullable<Emoji['texts']>[number], Emoji['emoji']>;

type ShortNames = Record<Emoji['shortName'], Emoji['emoji']>;

const EMOJI_TEXT_REGEX = /:\w+:/gm;

const getEmojisFromJson = async (): Promise<Emoji[]> => {
  const emojiJson = await import('../assets/emoji.json');

  return decompressEmojis(emojiJson.default as CompressedEmoji[]);
};

const textReplacementsToEmoji = (str: string, textReplacements: TextReplacements) => {
  for (const emojiText of Object.keys(textReplacements)) {
    if (str.includes(emojiText)) {
      str = str.replace(emojiText, textReplacements[emojiText]);
    }
  }

  return str;
};

const shortNamesToEmoji = (str: string, shortNames: ShortNames) => {
  const matches = str.match(EMOJI_TEXT_REGEX) ?? [];

  for (const match of matches) {
    const emoji = shortNames[match.replaceAll(':', '')];

    if (emoji) {
      str = str.replace(match, emoji);
    }
  }

  return str;
};

const createEmojiService = () => {
  let textReplacements: TextReplacements = {};
  let shortNames: ShortNames = {};

  const initialize = async () => {
    try {
      const emojis = await getEmojisFromJson();

      for (const emoji of emojis) {
        shortNames[emoji.shortName] = emoji.emoji;

        for (const emojiText of emoji.texts ?? []) {
          textReplacements[emojiText] = emoji.emoji;
        }
      }
    } catch (error) {
      console.error('Error when importing emoji assets', error);
    }
  };

  const parseText = (text: string) => {
    let result = textReplacementsToEmoji(text, textReplacements);
    result = shortNamesToEmoji(result, shortNames);

    return result;
  };

  return {
    initialize,
    parseText,
  };
};

export type EmojiService = ReturnType<typeof createEmojiService>;

export const emojiService = createEmojiService();
