# README

This is a boilerplate to use typescript in node.js development.
This and nothing else

## Prerequisites

You will need `typescript` and `typings` installed globally:

    sudo npm install -g typescript
    sudo npm install -g typings

## Setup

Before usage, you'll need to install npm packages and typings:

    npm install
    typings install

## Adding a dependency

Every npm dependency will also need typescript definitions; In addition to the
npm install command, you'll need to issue a typings install:

    npm install --save <package-name>
    typings install --save --ambient <package-name>

## Compiling and running

To compile, use `tsc`.
You can watch files by using `tsc -w`

A shortcut has been added to run the application:

    ./app.js
