<p align="center">
  <a href="" rel="noopener">
 <img src="https://testing.dockpay.com.br/img/logoFullWhite.5fbdab85.svg" alt="Project logo"></a>
</p>
<h3 align="center">dock-components</h3>

<div align="center">

[![Dockcomponents](https://img.shields.io/badge/dockmarket-name-orange.svg)](https://www.dockmarket.com.br)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![DOCUMENATION](https://img.shields.io/badge/documentation-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> Dockcomponents is a shared component library used in Dockmarket and Dockpay projets.
</p>

## 📝 Table of Contents

- [1. Why a separe Library?](#why)
- [2. List of Scripts](#scripts)
- [3. package.json](#how)
- [4. How to create a Component](#create_component)
- [5. Component Documentation](#documentation)
- [6. Storybook](#storybook)
- [7. Testing](#testing)
- [8. Plugin.js and main.js](#plugin_main)
- [9. Storybook Configuration](#storybook_config)
- [10. Test Configuration](#test_config)
- [11. Dockcomponents Configuration](#dock_cofig)

## Why a separe Library <a name = "why"></a>

We had to built two softwares having very similar interfaces so we could use components for both Dockmarket and Dockpay without rewriting code.
This library is an attempt to reduce the time spent developing both plataforms.

Despise having atomic design on the other two projects, I willingly choose to no use in this project for two main reasons:
- to simplify the further develop of this project.
- Almost all components in this library would fall on the `atom` category
# List of Scripts <a name = "scripts"></a>
The use of `yarn` instead of `npm` is highly suggested but npm should also work.

### Install
<pre> <code> yarn install </code> </pre>
### Start <br/>
Alias to `yarn serve`
<pre> <code> yarn start </code> </pre>
### Storybook <br/>
Opens storybook at `localhost:6006`
<pre> <code> yarn storybook </code> </pre>
### Test <br/>
Alias for `yarn jest`
<pre> <code> yarn test </code> </pre>
### Build
Script to build and publish the package, you have to wait the build then write the new version.
<pre> <code> yarn build </code> </pre>
### Publish <br/>
This **do not** build the package, if you forget to built it's going to pubish an older version **yarn build** is preferred instead
<pre> <code> yarn publish </code> </pre>
### Build-dev: <br/>
Script to build and copy the Dist directory to both dockmarket and dockpay (both need to be in the same directory)
<pre> <code> yarn build-dev </code> </pre>
### Build-dev-dockpay:<br/>
Same for above, but just for `dockpay`
<pre> <code> yarn build-dev-dockpay </code> </pre>
### Build-dev-dockmarket:<br/>
Same for above, but just for `dockmarket`
<pre> <code> yarn build-dev-dockmarket </code> </pre>

# package.json <a name = "authors"></a>
### Version
The most valuable information for most part is just the package `version`. Avoid creating unecessary tags, be 100% sure you actually have everything working (lint, tests, build, storybook) <br/>
You should also test changes locally before commiting them to the repostory using `yarn build-dev-dockmarket` or `yarn build-dev-dockpay`.

### EslintConfig
If you have to make any changes to the lint you can find there the `eslintConfig` block.

## scripts
### Essencial scripts for the build process.
**Don't touch these scripts**
- build:umd
- build:es
- build:unpkg
- build

## ⛏️ Built With <a name = "tech_stack"></a>

- [nodejs](https://www.mongodb.com/) - Database
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@Victor Sabino](https://github.com/vsabino) - Creator & Collaborator
- [@Lucas Estrela](https://github.com/lucasestrela) - Collaborator