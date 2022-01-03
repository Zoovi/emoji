# Zoovi Emoji

Toolkit of emoji-related features created for chat applications.

## How to run the repo?
1. Install dependencies with `yarn install`.
2. Generate `emoji.json` file using `yarn generate`.
3. Run tests (`yarn test`) and/or performance check (`yarn perf`).

## How to link local repo to my project?
1. Run `yarn build` to create a JavaScript build of the emoji service.
2. Run `yarn link` to allow symlinking of the package.
3. Go to the project you want to use this library in and run ` yarn link @zoovi/emoji`.

### How to use the package?
1. Import the service using `import emoji from '@zoovi/emoji';`
2. Run `await emoji.initialize();` to initialize all service features (download minified emoji.json file).
3. Use any of the service features listed below.

### Features
#### Implemented
- Dynamic import of the emoji data (`emoji.initialize()`).
- Parsing emoji symbols into emoji (`emoji.parseText(':D') -> 😄`).
- Parsing emoji short names into emoji (`emoji.parseText(':smile:') -> 😄`).

#### Planned
- Emoji search feature.
- Skin tone customization.
- Accessing specified emoji data.
