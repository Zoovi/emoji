import { emojiService } from './emoji.service';

const main = async () => {
  const message1 = 'Hello :smile:';
  const message2 = 'Hello :D';

  console.time('initialize');
  await emojiService.initialize();
  console.timeEnd('initialize');

  console.time('parse text 100 000 times');
  for (let i = 0; i < 100_000; i++) {
    emojiService.parseText(message1);
    emojiService.parseText(message2);
  }
  console.timeEnd('parse text 100 000 times');
};

main();
