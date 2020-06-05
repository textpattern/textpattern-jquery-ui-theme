# Textpattern jQuery UI theme

[![Build Status](https://travis-ci.org/textpattern/textpattern-jquery-ui-theme.svg?branch=master)](https://travis-ci.org/textpattern/textpattern-jquery-ui-theme)
[![Known Vulnerabilities](https://snyk.io/test/github/textpattern/textpattern-jquery-ui-theme/badge.svg?targetFile=package.json)](https://snyk.io/test/github/textpattern/textpattern-jquery-ui-theme?targetFile=package.json)

The jQuery UI theme used within the [Textpattern CMS](https://textpattern.com/) admin-side.

## Supported web browsers

* Internet Explorer 11.
* Chrome, Edge, Firefox, Safari and Opera the last two recent stable releases.

## Installation

The package can be included in your project via NPM, like so:

```ShellSession
$ npm install textpattern-jquery-ui-theme --save-dev
```

## Requirements

Building this repository requires:

* [Node.js](https://nodejs.org/)

## Build setup

### Installing required tools

The project uses [Webpack](https://webpack.github.io/) to run tasks and [Sass](http://sass-lang.com/) for CSS pre-processing. First make sure you have a recent version of [Node.js](https://nodejs.org/) installed. You can install Node.js using the [installer](https://nodejs.org/en/download/) or [package manager](https://nodejs.org/en/download/package-manager/).

### Installing dependencies

After you have Node.js taken care of, you can install the project's dependencies. Navigate to the project's directory, and run the dependency manager:

```ShellSession
$ cd textpattern-jquery-ui-theme
$ npm install
```

**npm** installs Webpack and any necessary JavaScript packages.

## Building

This repository hosts sources and needs to be built before it can be used. After you have installed all dependencies, you will be able to run the build:

```ShellSession
$ npm run build
```

## Pre-built version

We provide a pre-built version of the theme files within the `dist` directory in case you don't want to build it yourself.

## License

Licensed under the [GPLv2 license](https://github.com/textpattern/textpattern-jquery-ui-theme/blob/master/LICENSE).
