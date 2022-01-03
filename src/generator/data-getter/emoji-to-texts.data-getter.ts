import { DataGetter } from './data-getter.types';

type EmojiToTextsMap = Record<string, string[]>;

const emojiToTextsMap: EmojiToTextsMap = {
  '🙂': [':)'],
  '🙃': ['(:'],
  '😆': [':>'],
  '😌': [':]'],
  '😎': ['8)'],
  '😃': ['=)'],
  '😄': [':D', ':-D'],
  '🙁': [':(', ':-('],
  '😕': [':/'],
  '😵‍💫': ['%)'],
  '😺': [':3'],
  '😸': ['x3'],
  '😼': ['>:3'],
  '😢': [":'("],
  '🥲': [":')"],
  '😛': [':P', ':p'],
  '😜': [';P', ';p'],
  '😇': ['O:)', 'o:)'],
  '😈': ['3:)', '}:)', '>:)'],
  '👿': ['3:(', '}:(', '>:('],
  '😮': [':O', ':o'],
  '😣': ['>.<', '>_<'],
  '😉': [';)'],
  '😐': [':|'],
  '😘': [':x', ':*'],
  '🤑': ['$P'],
  '😖': [':$'],
  '😬': [':E'],
  '🤐': [':#', ':X', ':x', ':&'],
  '😪': ['|-O'],
  '❤️': ['<3'],
  '😑': ['-_-'],
  '😊': ['^_^'],
  '😳': ['o.O', 'O.O', 'o.o', 'O.o'],
  '😵': ['X_X', 'x_x', 'x_X', 'X_x', '+_+'],
  '😔': ['v.v', '._.'],
  '🍻': ['o/'],
  '☠️': ['8-X', '8-x'],
};

class EmojiToTextsDataGetter implements DataGetter {
  async getData() {
    return Promise.resolve(emojiToTextsMap);
  }
}

export const emojiToTextsDataGetter = new EmojiToTextsDataGetter();
