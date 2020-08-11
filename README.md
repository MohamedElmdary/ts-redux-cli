# Ts-Redux-CLI

Cli to help in creating files for react redux with typescript project

## install

```
$ npm i -g ts-redux-cli
```

## usage

```
$ ts-redux-cli
```

## commands

-   init
-   create new state directory

## `init` Command

generate `store` folder inside `src` folder and add default template as show case for how the reset of project should go along

```
Project
|__ src
|   |__ store
|   |   |__ todos
|   |   |   |__ types.ts
|   |   |   |__ reducer.ts
|   |   |   |__ index.ts
|   |   |__ counter
|   |       |__ types.ts
|   |       |__ reducer.ts
|   |       |__ index.ts
|   |
|   |__ // ...
|__ // ...
```

## `create new state directory` Command

generate a new `state` folder if `store` folder exists .. will ask you for the state name

```
Project
|__ src
|   |__ store
|   |   |__ newState
|   |   |   |__ types.ts
|   |   |   |__ reducer.ts
|   |   |   |__ index.ts
|   |   |
|   |   |__ // ...
|   |
|   |__ // ...
|__ // ...
```

## Stay in touch

-   Author - [Mohamed Elmdary](https://elmdary-cv.herokuapp.com/)
-   Github - [Github](https://github.com/MohamedElmdary)
