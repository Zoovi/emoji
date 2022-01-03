import type { Emoji } from '../core/emoji.type';

export type DecompressedEmoji = Emoji;

export type CompressedEmoji = [
  emoji: string,
  category: number,
  shortName: string,
  keywords: string[],
  texts?: string[]
];
