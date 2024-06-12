# ns-UI-components

UI components to create and use in all React UI projects

## What do I need?

Before cloning this repo, I recommend installing the following software:

- [Node](https://nodejs.org/en/download/) >=18 to install packages

## Setup

After cloning the repo, install the node packages in the project's root file.

```sh
git clone https://github.com/naptune-sailor/ns-UI-components.git
cd reactive-bulma
npm install
```

## How to run it

To initiate on `Storybook mode` (see alternatives and interact with any component)

```sh
npm start
```

To compile the project with your changes

```sh
npm run build
```

## Folder structure

Once you have cloned the repo, it will show you the following folders:

- `.github:` [Github Actions](https://github.com/features/actions/) files used to run post-merge.commits like unit test coverage collection.
- `.husky:` Dedicated to [Husky](https://typicode.github.io/husky/) git-hook files.
- `.storybook:` Dedicated to [Storybook](https://storybook.js.org/) configuration.
- `src:`
  - `components:` Location of all used components, using [Atomic Design hierarchy structure](https://atomicdesign.bradfrost.com/chapter-2/) (`atoms` -> `molecules` -> `organisms`).

## Versioning

After intestigating [semantic-release documentation](https://semantic-release.gitbook.io/semantic-release/) (reffer to [#3](https://github.com/NicolasOmar/reactive-bulma/issues/3)) and having a problematic implementation, I decided to change version meaning for this project with the following:

- Major versions (`1.0.0`, `2.0.0` and beyond) will reffer to milestones/version achievement.
- Minor versions (`1.1.0`, `1.2.0` and so on) will reffer to branch/story completition.
- Patch versions (`1.0.1`, `1.0.2` and so on) will reffer to bugfixes only.

To know more about actual roadmap, please go to section `Find out more` -> `Roadmap`.

## Branches and Environments

I will maintain only one deployable site based on [Storybook](https://storybook.js.org/) with automated [Netlify](https://netlify.com/) deployments with each push to `main` branch. The mentioned site is on section `Find out more` -> `Storybook site`.

## Find out more

| [Roadmap](https://docs.google.com/document/d/1kWX-dDTD-cQUeB_Vbu0K6xRvtHaSA38h76yQnhiCe9U) | [Project Status](https://github.com/users/NicolasOmar/projects/3) | [Storybook site](https://my-pets-storybook.netlify.app/)   | [Npm Package](https://www.npmjs.com/package/reactive-bulma) |
| :----------------------------------------------------------------------------------------- | :---------------------------------------------------------------- | :--------------------------------------------------------- | :---------------------------------------------------------- |
| Document with entire list of stories, splitted by versions                                 | Project board for project status tracking                         | Site dedicated to show and test all the created components | Public package site in npm                                  |

## License

**MIT**
