import { DataGetter } from './data-getter.types';
import { baseEmojisDataGetter } from './emoji-base.data-getter';
import { emojiToKeywordsDataGetter } from './emoji-to-keywords.data-getter';
import { emojiToTextsDataGetter } from './emoji-to-texts.data-getter';
import { shortNameToEmojiDataGetter } from './short-name-to-emoji.data-getter';

export class MainDataGetter implements DataGetter {
  async getData() {
    const [baseEmojis, emojiToKeywords, shortNameToEmoji, emojiToTexts] = await Promise.all([
      baseEmojisDataGetter.getData(),
      emojiToKeywordsDataGetter.getData(),
      shortNameToEmojiDataGetter.getData(),
      emojiToTextsDataGetter.getData(),
    ]);

    return {
      baseEmojis,
      emojiToKeywords,
      shortNameToEmoji,
      emojiToTexts,
    };
  }
}

export const mainDataGetter = new MainDataGetter();
