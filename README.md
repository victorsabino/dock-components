# Dockcomponents
![picture](https://publicdock.s3.amazonaws.com/DockComponents.svg)  

[![Dockcomponents](https://img.shields.io/badge/dockmarket-name-orange.svg)](https://www.dockmarket.com.br)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![DOCUMENATION](https://img.shields.io/badge/documentation-blue.svg)](LICENSE.md)

Dockcomponents is a shared component library used in Dockmarket and Dockpay projets.

## Table of Contents

- [1. Why a separed Library?](#why)
- [2. List of Scripts](#scripts)
- [3. package.json](#how)
- [4. How to create a Component](#create_component)
- [5. Component Documentation](#documentation)
- [6. Storybook](#storybook)
- [7. Testing](#testing)
- [8. Plugin.js and main.js](#plugin_main)
- [9. Storybook Configuration](#storybook_config)
- [10. Test Configuration](#test_config)

# Why a separed Library

We had to built two softwares having very similar interfaces so we could use components for both Dockmarket and Dockpay without rewriting code.
This library is an attempt to reduce the time spent developing both plataforms.

Despise having atomic design on the other two projects, I willingly choose to no use in this project for two main reasons:  
- to simplify the further develop of this project.  
- Almost all components in this library would fall on the `atom` category  
  
# List of Scripts
The use of `yarn` instead of `npm` is highly suggested but npm should also work.

### Install
``` yarn install ```  
### Start
Alias to `yarn serve`  
``` yarn start ```
### Storybook  
Opens storybook at `localhost:6006`    
``` yarn storybook ```
### Test  
Alias for `yarn jest`  
``` yarn test ```
### Build
Script to build and publish the package, you have to wait the build then write the new version.  
``` yarn build ```
### Publish  
This **do not** build the package, if you forget to built it's going to pubish an older version **yarn build** is preferred instead  
``` yarn publish ```
### Build-dev:  
Script to build and copy the Dist directory to both dockmarket and dockpay (both need to be in the same directory)  
``` yarn build-dev ```
### Build-dev-dockpay  
Same for above, but just for `dockpay`  
``` yarn build-dev-dockpay ```
### Build-dev-dockmarket  
Same for above, but just for `dockmarket`  
``` yarn build-dev-dockmarket ```

# package.json
### Version
The most valuable information for most part is just the package `version`. Avoid creating unecessary tags, be 100% sure you actually have everything working (lint, tests, build, storybook)  
You should also test changes locally before commiting them to the repostory using `yarn build-dev-dockmarket` or `yarn build-dev-dockpay`.

### EslintConfig
If you have to make any changes to the lint you can find there the `eslintConfig` block.

### Scripts
### Essencial scripts for the build process.
**Don't touch these scripts**  
- build:umd  
- build:es  
- build:unpkg  
- build  
  

## How to create a Component
#### Every component
- Must have a story componentName.stories.js
- Must have a test componentName.spec.js
- Must be export at main.js
- Must be instanced at plugin.js

# Storybook
Storybook was introduced so dock-components can have a 'face' and can be coded as a stand alone application.  
Running `yarn storybook` or `yarn build` storybook is going to scan for .stories.js file extensions, the path/extension can be configured at `.storybook/main.js`

*Note to self: We need to host storybook in dev envirements*

# Component Documentation   
You can find the Documentation for a specific component at the storybook using the Story documentation plugin, you can acess at `localhost:6006` running `yarn storybook`  
  

# Testing
We use [Vue Testing Library](https://github.com/testing-library/vue-testing-library) and [Jest](https://jestjs.io/) as our main test base.  
If you need a good test exemple check components/Button/Button.spec.js

# Plugin.js and main.js
These files are this library basic configuration. 
`main.js` is just there to export the components so they're visible to the user (dockpay, dockmarket)  
`plugin.js` injects everything that you need to inject (it's basically like the main.js in vue) and applies to every component before exporting.  
**if your new component isn't showing when you're trying to import it's probably related to a misconfiguration in one of these files**
  
# Storybook Configuration
Storybook congfig can be found at `.storybook/config.js` and `.storybook/main.js`  
Config.js loads the decorators and plugins and main.js has the scan path for the stories and also loads [addons](https://www.learnstorybook.com/intro-to-storybook/vue/en/using-addons/)  

# Test Configuration
The test configuration can be found at jest.config.js and uses `vue-jest` to load vue files.  
The configuration only reads from jest.config.js, don't put any jest configuration in package.json like many exemples on the web


## ?????? Authors

- [@Victor Sabino](https://github.com/victorsabino) - Creator & Collaborator
- [@Lucas Estrela](https://github.com/lucasestreladeoliveira) - Collaborator
- [@Fernando Valente](https://github.com//fernandovalente) - Greatest Tech Lead to Ever Live