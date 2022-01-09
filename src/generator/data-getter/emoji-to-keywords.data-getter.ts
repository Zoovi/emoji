import axios from 'axios';
import { DataGetter } from './data-getter.types';

type EmojiToKeywordsMap = Record<string, string[]>;

class EmojiToKeywordsDataGetter implements DataGetter {
  private url = 'https://raw.githubusercontent.com/muan/emojilib/main/dist/emoji-en-US.json';

  async getData() {
    return axios.get<EmojiToKeywordsMap>(this.url).then(({ data }) => data);
  }
}

export const emojiToKeywordsDataGetter = new EmojiToKeywordsDataGetter();
