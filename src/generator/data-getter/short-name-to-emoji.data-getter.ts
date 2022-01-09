import axios from 'axios';
import { DataGetter } from './data-getter.types';

type ShortNameToEmojiMap = Record<string, string>;

class ShortNameToEmojiDataGetter implements DataGetter {
  private url = 'https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json';

  async getData() {
    return axios.get<ShortNameToEmojiMap>(this.url).then(({ data }) => data);
  }
}

export const shortNameToEmojiDataGetter = new ShortNameToEmojiDataGetter();
