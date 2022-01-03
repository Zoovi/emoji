import type { EmojiService } from './emoji.service';

describe('EmojiService', () => {
  let emojiService: EmojiService;

  beforeEach(async () => {
    const module = await import('./emoji.service');
    emojiService = module.emojiService;

    jest.resetModules();
    jest.restoreAllMocks();
  });

  it("When parser isn't initialized returns non-parsed message", () => {
    const message = 'Hello :D';

    expect(emojiService.parseText(message)).toEqual(message);
  });

  it('When parser is initialized returns message with parsed emoji texts', async () => {
    const message = 'Hello :D';

    await emojiService.initialize();

    expect(emojiService.parseText(message)).toBe('Hello 😄');
  });

  it('When parser is initialized returns message with parsed emoji names', async () => {
    const message = 'Hello :smile:';

    await emojiService.initialize();

    expect(emojiService.parseText(message)).toBe('Hello 😄');
  });

  it('When dynamic import fails logs error into the console and returns non-parsed messages', async () => {
    const importError = new Error('Import failed');
    jest.doMock('../assets/emoji.json', () => {
      throw importError;
    });
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
    const message = 'Hello :D';

    await emojiService.initialize();

    expect(emojiService.parseText(message)).toEqual(message);
    expect(consoleErrorMock).toHaveBeenCalledWith('Error when importing emoji assets', importError);
  });
});
