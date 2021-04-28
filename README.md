# NextJS Boilterplate with TS and StyledComponents

## Tech Stack

1. [NextJS](https://nextjs.org/) v^10.1.3
2. [ReactJs](https://reactjs.org/) v16.8.6
3. [Typescript](https://www.typescriptlang.org/) v3.8.2
4. [StyledComponents](https://styled-components.com/) v5.0.1
5. [Yarn Package Manager](https://yarnpkg.com/)

## Development

```bash
yarn dev
```

## Pre-push Rules

On every push to github, yarn will automatically run the below pre-push hooks. If these checks pass,
your code should be good to be raised as a PR.

```bash
 yarn lint && yarn tsc
```

## Production

```bash
yarn start
```
