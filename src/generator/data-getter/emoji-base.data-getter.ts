import axios from 'axios';
import { DataGetter } from './data-getter.types';

// Source: https://github.com/iamcal/emoji-data#using-the-data
interface EmojiBase {
  /**
   * The offical Unicode name, in SHOUTY UPPERCASE.
   */
  name: string;

  /**
   * The Unicode codepoint, as 4-5 hex digits. Where an emoji needs 2 or more codepoints,
   * they are specified like 1F1EA-1F1F8. For emoji that need to specifiy a variation
   * selector (-FE0F), that is included here.
   */
  unified: string;

  /**
   * For emoji that also have usage without a variation selector, that version is
   * included here (otherwise is null).
   */
  non_qualified: string | null;

  /**
   * The commonly-agreed upon short name for the image, as supported in campfire,
   * github etc via the :colon-syntax:
   */
  short_name: string;

  /**
   * An ASCII version of the emoji (e.g. :)), or null where none exists.
   */
  text: string | null;

  /**
   * Category group name.
   */
  category: string;

  /**
   * Sub-category group name.
   */
  subcategory: string;

  /**
   * Global sorting index for all emoji, based on Unicode CLDR ordering.
   */
  sort_order: number;

  /**
   * For emoji with multiple skin tone variations, a list of alternative glyphs,
   * keyed by the skin tone. For emoji that support multiple skin tones within
   * a single emoji, each skin tone is separated by a dash character.
   */
  skin_variations?: string;
}

class BaseEmojisDataGetter implements DataGetter {
  private url = 'https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json';

  async getData() {
    return axios.get<EmojiBase[]>(this.url).then(({ data }) => data);
  }
}

export const baseEmojisDataGetter = new BaseEmojisDataGetter();
