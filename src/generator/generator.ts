import fs from 'fs/promises';
import path from 'path';

import { compressEmojis } from '../compressor';
import type { Emoji } from '../core/emoji.type';
import { mainDataGetter } from './data-getter';

const getEmojis = async (): Promise<Emoji[]> => {
  const { baseEmojis, emojiToKeywords, shortNameToEmoji, emojiToTexts } = await mainDataGetter.getData();

  return baseEmojis
    .sort((a, b) => a.sort_order - b.sort_order)
    .flatMap((baseEmoji) => {
      const emoji = shortNameToEmoji[baseEmoji.short_name];
      const keywords = emojiToKeywords[emoji];

      if (!emoji || !keywords) {
        return [];
      }

      const emojiObject: Emoji = {
        emoji,
        keywords,
        category: baseEmoji.category,
        shortName: baseEmoji.short_name,
        texts: emojiToTexts[emoji],
      };

      return [emojiObject];
    });
};

export const generateEmojiJson = async () => {
  const emojis = await getEmojis();
  const compressedEmojis = compressEmojis(emojis);

  await fs.writeFile(path.resolve(__dirname, '..', 'assets', 'emoji.json'), JSON.stringify(compressedEmojis), {
    encoding: 'utf-8',
  });
};
