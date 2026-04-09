# site

My personal website.

### Running Locally:

Use **Node.js** by matching the version in [`.nvmrc`](.nvmrc) at the repo root. That value should track the latest **Current** (stable, non-LTS) release from [nodejs.org](https://nodejs.org/)—edit `.nvmrc` when you bump Node. With [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install   # installs the version listed in .nvmrc
nvm use       # selects it in this shell
```

You’ll also need [Bun](https://bun.sh/) installed. Then run `bun run start:dev` to start the project locally.

Use `bun run lint` to run [Biome](https://biomejs.dev/) (format check + lint) on the project. Use `bun run format` to apply Biome's formatter. The same checks run on pre-push; your editor can surface issues per file with the Biome extension.
