# Channel Surfer

> [Try it out](https://heroprotagonist.github.io/channel-surfer/)
> Lightweight app used to search discover channels.

## Table of Contents

1. [Background](#background)
1. [Directory Layout](#directory-layout)
1. [Tech Stack](#tech-stack)


## Background

This application allows users to search for Vimeo channels using the [Simple API](https://developer.vimeo.com/apis/simple). The application will take the first search result based on a users query and then grab that channels first 10 videos to be displayed.  Any of these videos can then be watched.

Webpack is used for transpilation, minification, module bundling, and hot reloading of React components. The Webpack files and associated Express server are based on the configuration used by [Wes Bos](https://github.com/wesbos/Learn-Redux). 

[Bootstrap](http://getbootstrap.com/) takes care of the grid system ensuring that the application is responsive. ESLint is configured with the [Airbnb style guide](https://github.com/airbnb/javascript), ensuring that all code conforms to a single standard.


## Directory Layout


```
.
├── /env/                     # Environment variables
├── /node_modules/            # 3rd-party libraries and utilities
├── /server/                  # Express dev. server 
├── /src/                     # Client source code
    ├── /components/          # React component files 
    ├── /redux/               # Redux files
    ├── /styles/              # CSS file          
    ├── index.html            # HTML file containing mount point for React
    ├── index.jsx             # React entry point 
├── .eslintrc                 # ESLint settings
├── .gitignore                # Ignored files from version control
├── package.json              # Dependency list and scripts to run application
└── webpack.js                # Webpack configurations for development
```

## Tech Stack

- React, Redux, Webpack,
- Webpack HMRE, Babel, Eslint, Airbnb Style Guide
- Bootstrap