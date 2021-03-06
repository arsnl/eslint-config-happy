<div align="center" style="padding: 16px 0;"><img src="media/readme-banner.png" width="600" role="presentation" /></div>

<h3 align="center">ESLint configurations for happier developers</h3>

<p align="center">
    <a href="https://www.npmjs.org/package/eslint-config-happy"><img src="https://img.shields.io/npm/v/eslint-config-happy.svg" alt="npm version" /></a>
    <a href="https://prettier.io/"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="code style: prettier" /></a>
    <a href="https://github.com/arsnl/eslint-config-happy"><img src="https://img.shields.io/badge/eslint_config-happy-b0ff31.svg" alt="eslint config: happy" /></a>
    <a href="https://github.com/arsnl/eslint-config-happy/actions?query=workflow%3Atest+branch%main"><img src="https://github.com/arsnl/eslint-config-happy/workflows/test/badge.svg?branch=main" alt="npm test workflow status" /></a>

</p>

A collection of shareable opinionated ESLint configurations that enforces strict, functional, readable and modern code with developers happiness in mind.

## Highlights

- Play well with [Prettier](#prettier-support) and [TypeScript](#typescript-support).
- Bare minimal ESLint config, but [configurable when needed](#configurations-overrides).
- [Opinionated](#why-its-opinionated) to save you from never ending debates.
- Enforces readable code, because you read more code than you write.
- Embrace functional programming paradigm.
- Saves you time, energy and make you happier!

## Quick Start

**1.** Start by adding Happy and it's peer dependencies to your project.

```
npx install-peerdeps --dev eslint-config-happy
```

> This command will install the Happy configurations with ESLint and Prettier if they are not already in your project.

**2.** If you don't already have one, create a `.eslintrc` file in the root of your project. Then, add [Happy configurations](#configurations) to the "extends" array in your `.eslintrc.*` file.

```json
{
  "extends": ["happy"]
}
```

> Depending of your project, you can add more [Happy configurations](#configurations) to the "extends" array. Due to the opinionated nature of Happy, your "extends" array should only contain [Happy configurations](#configurations).

**3.** Add those scripts to your package.json to lint and/or fix and format your project.

```json
"scripts": {
  "lint": "eslint .",
  "format": "prettier --write --loglevel warn .",
  "fix": "npm run lint -- --fix && npm run format",
},
```

Now you can manually lint your code by running `npm run lint`, format it with `npm run format` and fix all auto-fixable issues with `npm run fix`. You probably want your [editor](#set-your-editor) to do this though.

## Configurations

This package includes the following configurations:

- [`happy`](./configurations/base.js) – The Happy code style. _Must always be present and put at first._
- [`happy/ava`](./configurations/ava.js) – Additional configuration for projects that use [AVA](https://ava.li/).
- [`happy/cypress`](./configurations/cypress.js) – Additional configuration for projects that use [Cypress](https://cypress.io/).
- [`happy/jest`](./configurations/jest.js) – Additional configuration for projects that use [Jest](https://jestjs.io/).
- [`happy/lodash`](./configurations/lodash.js) – Additional configuration for projects that use [Lodash](https://lodash.com/).
- [`happy/ramda`](./configurations/ramda.js) – Additional configuration for projects that use [Ramda](https://ramdajs.com/).
- [`happy/mocha`](./configurations/mocha.js) – Additional configuration for projects that use [Mocha](https://mochajs.org/).
- [`happy/node`](./configurations/node.js) – Additional configuration for projects that use [Node](https://nodejs.org/).
- [`happy/react`](./configurations/react.js) – Additional configuration for projects that use [React](https://reactjs.org/).
- [`happy/typescript`](./configurations/typescript.js) – Additional configuration for projects that use [TypeScript](http://typescriptlang.org/). _Must be put at last._

## Usage

Example of usage for a project that use Cypress, Jest, Ramda, React and Typescript

```json
{
  "extends": [
    "happy",
    "happy/cypress",
    "happy/jest",
    "happy/ramda",
    "happy/react",
    "happy/typescript"
  ]
}
```

## Configurations Overrides

Despite the fact that you can change Prettier and Happy configurations, you must avoid to do it at all cost! By far the biggest reason for adopting Prettier and Happy is to stop all the ongoing debates over styles. If you start overriding the rules, you are going against that philosophy.

That's being said, for some compatibility reasons, you can have the need to change the rules. If it's the case, do it, but try the keep the changes to the strict minimum. Also, feel free to [open an issue](https://github.com/arsnl/eslint-config-happy/issues) so we can see if we missed something on our side.

## Typescript Support

If your project support Typescript, all you have to do is to add the `happy/typescript` configuration at the end of your ESLint "extends" array.

```json
{
  "extends": [
    "happy",
    "happy/cypress",
    "happy/jest",
    "happy/ramda",
    "happy/react",
    "happy/typescript"
  ]
}
```

If your `tsconfig.json` is not in the same directory as `package.json`, you will have to set the path yourself:

```json
{
  "extends": [
    "happy",
    "happy/cypress",
    "happy/jest",
    "happy/ramda",
    "happy/react",
    "happy/typescript"
  ],
  "parserOptions": {
    "project": "some-path/tsconfig.json"
  }
}
```

## Prettier Support

Except having Prettier installed on your project dependencies (which is already installed for your during the [installation](#quick-start)), you don't have anything to do to use Prettier with Happy.

Prettier is very efficiant for formatting a lot of different files formats (JavaScript, JSX, Angular, Vue, Flow, TypeScript, CSS, Less, SCSS, HTML, JSON, GraphQL, Markdown, GFM, MDX, YAML and more to come) while ESLint is efficiant to validate the code-quality and catching bugs on JavaScript and TypeScript files only.

It's a good practice to let Prettier handle formatting and ESLint handle the non-formatting issues.

Happy apply this practice.

Contrary to other sharable ESLInt configuration, Happy do not contain any rule that overwrite the Prettier rules and don't do any formating that is already supported by Prettier.

That mean that you can run Prettier with IDE extensions, on your terminal, on CI runners, on pre-commit hook, anywhere, without having to worry about possible confict with ESLint. Like it's supposed to be.

However, the tradeoff of this approach is that you have to run Prettier and ESLint to get your JavaScript and TypeScript files fully formatted and linted. But, that's not a big tradeoff since you still have to run Prettier to format all the other files supported by it.

## Set your Editor

You probably want your editor to lint, fix and format for you. Here are the instructions for different editors.

### VS Code

1. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) VS Code extensions.

2. Now you need to setup some VS Code settings. At the root of your project, create a folder named `.vscode` and put a `settings.json` file inside of it. Now put the settings below inside of this file.

```js
// .vscode/settings.json

{
  // Format a file on save.
  "editor.formatOnSave": true,
  // Defines a default formatter which takes precedence over all other formatter settings.
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // Code action kinds to be run on save.
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  // Controls auto save of dirty editors.
  //  - onFocusChange: A dirty editor is automatically saved when the editor loses focus.
  "files.autoSave": "onFocusChange",
  // Always show the ESlint status bar item.
  "eslint.alwaysShowStatus": true
}
```

3. To help other developers working on your project to install the correct VS Code extensions, you can also and a `extensions.json` file inside of the `.vscode` folder and put the settings below inside of this file.

```js
// .vscode/extensions.json

{
  // List of extensions which should be recommended for users of this workspace.
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}

```

After attempting to lint your file for the first time, you may need to click on `ESLint` in the bottom right and select `Allow Everywhere` in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's rarelly working until you restart VS Code.

### JetBrains Products (IntelliJ IDEA, WebStorm, PhpStorm, ...)

1. If they are not already installed, install the [ESLint](https://plugins.jetbrains.com/plugin/7494-eslint) and [Prettier](https://plugins.jetbrains.com/plugin/10456-prettier) plugins.

2. On your IDE preferences, search for `ESLint`. Depending of the product and version you are using, it should be under `Languages & Frameworks > JavaScript > Code Quality Tools > ESLint`.

3. On the ESLint preferences, make sure `Automatic ESLint Configuration` is selected and `Run eslint --fix on save` is checked. Don't forget to click on `Apply` to save the changes.

4. On your IDE preferences, search now for `Prettier`. Depending of the product and version you are using, it should be under `Languages & Frameworks > JavaScript > Prettier`.

5. On the Prettier preferences, the default value of `Run for files` will probably be `{**/*,*}.{js,ts,jsx,tsx}`. This value is wrong since Prettier don't just format JavaScript and TypeScript files. Change this value for the following:

```
{**/*,*}.{js,_js,bones,cjs,es,es6,frag,gs,jake,jsb,jscad,jsfl,jsm,jss,mjs,njs,pac,sjs,ssjs,xsjs,xsjslib,wxs,js.flow,jsx,ts,tsx,json,avsc,geojson,gltf,har,ice,JSON-tmLanguage,mcmeta,tfstate,tfstate.backup,topojson,webapp,webmanifest,yy,yyp,jsonc,sublime-build,sublime-commands,sublime-completions,sublime-keymap,sublime-macro,sublime-menu,sublime-mousemap,sublime-project,sublime-settings,sublime-theme,sublime-workspace,sublime_metrics,sublime_session,json5,css,wxss,pcss,postcss,less,scss,graphql,gql,graphqls,md,markdown,mdown,mdwn,mkd,mkdn,mkdown,ronn,workbook,mdx,component.html,html,htm,html.hl,inc,st,xht,xhtml,mjml,vue,yml,mir,reek,rviz,sublime-syntax,syntax,yaml,yaml-tmlanguage,yaml.sed,yml.mysql}
```

> **Note:** Depending on the Prettier version your project is using, this list can be different. To be sure to get the correct list, you can run `npx eslint-config-happy prettier extensions --glob` in the root of your project to get the glob pattern used by your version of Prettier.

6. Then, make sure `On save` is checked. Don't forget to click on `Apply` to save the changes.

Your IDE should now format, lint and fix on save.

## Q&A

#### Why it's opinionated?

As a developer, your time and energy are precious and they better be expensed on real problems resolving than code styling debate or trying to write the perfect configuration that make ESLint, Prettier and TypesSript play well together.

Happy is opinionated, it is not the _ideal_ or _better way_ of programming in JavaScript, it is an idea of how it may be done.

Keep in mind that those configurations aims not to restrict the style of individual developers but set the common ground for solving problems as a team with the JavaScript language.

Opinionated is good! It saves you time and energy and save you from never ending debates.

#### Why not Airbnb?

The [Airbnb ESLint shareable config](https://www.npmjs.com/package/eslint-config-airbnb) is, and still, the reference. That's why Happy is based on it.

However, due to his popularity and very large support, enforcing more modern code and functional programming approach is not something that easy with the Airbnb ESLint shareable config. For example, some rules are not activated because they still have to support old versions of ESLint.

On his side Happy implement most of the rules proposed by the Airbnb ESLint shareable config, but also implement the new ones since the minimal version of ESLint supported is 7.17. Happy also enforce usage of ESNext features and functional approach which is not the case with the Airbnb ESLint shareable config.

#### Why not Standard nor XO?

The [Standard style](https://standardjs.com/) and [XO](https://github.com/xojs/xo) are both really good projects. However, both made the mistake of creating their own linter (based on ESLint and using it under the hood) and not simply use ESLint directly.

Both libraries have a really good users adoption. But still, with the incredible amount of contributors (+800) and projects (4.5m) on ESLint, you have more chance to get support or find plugins that fits your needs with ESLint.

#### I'm not agree with some rule! 😠

That's not a question! 😄

Seriously, you can be in total disagreement with some rule, and that's totally fine! Like Prettier, Happy is not meant to be liked by everyone and that's not the goal. The goal is to saves you time and energy and save you from never ending debates. The goal is also to provide you an easy and clean way to start coding with ESLint, Prettier and TypesScript in no time.

If you still strongly disagree with some rules, need new configuration support (eg: VueJS) or found a bug, you are more than welcome to [open a new issue](https://github.com/arsnl/eslint-config-happy/issues) and [contribute](/CONTRIBUTING.md) to this project.

## Badge

Show the world you're using Happy → [![eslint config: happy](https://img.shields.io/badge/eslint_config-happy-b0ff31.svg)](https://github.com/arsnl/eslint-config-happy)

```md
[![eslint config: happy](https://img.shields.io/badge/eslint_config-happy-b0ff31.svg)](https://github.com/arsnl/eslint-config-happy)
```

## Versioning Policy

This project apply the [Semantic Versioning](https://semver.org/) convention. That means that all breaking changes will bump the major version.

Every new rule addition are recognized as a breaking changes. Therefore, every new rule addition will increase the major version.

## Contributing

Please read our [contribution guide](/CONTRIBUTING.md) for details on our [code of conduct](/CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

## License

Distributed under the MIT License. See the [license](/LICENSE) for more information.
