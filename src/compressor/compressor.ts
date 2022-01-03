import type { CompressedEmoji, DecompressedEmoji } from './compressor.types';

const categories = [
  'Smileys & Emotion',
  'People & Body',
  'Animals & Nature',
  'Food & Drink',
  'Travel & Places',
  'Activities',
  'Objects',
  'Symbols',
  'Flags',
];

const parseKeywords = (keywords: string[], shortName: string) => keywords.filter((keyword) => keyword !== shortName);

export const compressEmojis = (decompressedEmojis: DecompressedEmoji[]): CompressedEmoji[] =>
  decompressedEmojis.map((emoji) =>
    emoji.texts
      ? [
          emoji.emoji,
          categories.indexOf(emoji.category),
          emoji.shortName,
          parseKeywords(emoji.keywords, emoji.shortName),
          emoji.texts,
        ]
      : [
          emoji.emoji,
          categories.indexOf(emoji.category),
          emoji.shortName,
          parseKeywords(emoji.keywords, emoji.shortName),
        ]
  );

export const decompressEmojis = (compressedEmojis: CompressedEmoji[]): DecompressedEmoji[] =>
  compressedEmojis.map((emoji) => ({
    emoji: emoji[0],
    category: categories[emoji[1]],
    shortName: emoji[2],
    keywords: [emoji[2], ...emoji[3]],
    texts: emoji[4],
  }));
