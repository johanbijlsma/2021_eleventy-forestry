---
title: Explaining modern Front-end lingo
date: 2020-07-07T00:00:00+02:00
tags:
- JavaScript
- CSS
- front-end
description: A brief overview of the most-used Front-end terms and names
image: "/images/ferenc-almasi-fhAfLtHToCs-unsplash.jpg"

---
In a nutshell, front-end development is basically building websites and components that have a direct correlation with the end-user. In other words: The things that a front-end developer builds, is the thing an end user will see on his or her device.

## What is Front-End?

Ever since front-end existed, it has undergone a lot of changes. Frameworks, libraries and Tools have come and passed, but the basis remains the same:

* HTML (for content and scaffolding of the page)
* CSS (for presentation)
* JavaScript (for interaction, and for connecting to API's or a back-end)

One thing that has definitely changed, is that Front-end code is being written, and the steps a develops should take before code will end up on a web server. Ten years ago, you would be able to build your entire site in notepad, save it as a .html file, and upload it through FTP to a web server. That was all that was necessary to put something online. In theory you could still do this, but in modern days that's not common anymore.

## Modern Front-End

Today, most front-end developers are using tools, frameworks and other utilities to live easier. Basicly this means that  a developer writes less code than they used to do, by using tools and abstractions. 

For instance JavaScript gets replaced by TypeScript, JSX or babel. CSS by SCCS, Less or Stylus, and HTML by templating languages like Markdown, PUG or HAML. Or these choices were already made by a framework. But whatever happens, at the end everything gets resolved HTML, CSS and JavaScript files through a build step. This is necessary since a browser does not understand TypeScript, markdown, or SCSS files.

## Terms & Lingo in Front-End

With all the abstractions and tools, there are many buzz words, terms and name thrown about, that can be hard to understand for a new developer. For that reason I made a list of common words and terms, and explain it in a few sentences

* **A11y (Accessibility)**

Accessibility is a container term for technology that should be usable by anyone: No matter if a person has 20-20 vision, visually impaired, or even blind. But it goes further than visual handicaps alone. There is a set of Guideline called the Web Content Accessibility Guidelines, or WCAG for short, with 3 levels of compliance. The newest version is WCAG2.1.

* **Angular**

An open source framework developed by Google. In 2020 version 9 was released. The first version, angular.js was released in 2010, but was replaced in 2014 by Angular 2 in 2014. This was a complete rewrite of the framework and was not backward compatible with the first version.

* **Babel.js**

A JavaScript library that enables developers to write modern JavaScript (ES5 or newer) for browsers that don't support it. the JavaScript gets recompiled with fallbacks for browsers like Internet Explorer 11.

* **Bundler**

Well known Bindles are Webpack, Parcel and Rollup. A bundler is a library that is configurable to walk through a series of steps like combining files, compiling files and creating deploy builds. The latter is a folder with a version of the application in a package that is as small as possible. Usually such a folder is called either "dist", "generated" or "build".

* **CI/CD**

Continuous Integration / Continuous Deployment are terms used for techniques and infrastructures to automatically test and deploy code to different environments such as Test, Acceptation or Production. Most of the time there are hooks and triggers set up, that make it possible that automated test will run when a Pull Request is approved to a branch on the GIT server. When all necessary tests pass, the code will be deployed to the specific environment 

* **CLI**

An abbreviation for Command Line Interface. the term is used for all things that are executed through the terminal, Command Prompt or Powershell. Within front-end is used a lot for GIT, NPM, Webpack, Anguilar-cli, Vue-cli and create-react-app. 

* **CSS**

Cascading Style Sheets is the technique for declaring the presentation of elements on a page. It's is created by Håkon Wium Lie and Bert Bos in 1996. The newest iteration is CSS3, although this is not an official standard.

* **ECMAScript (ES5, ES6, etc.)**

The official standard of JavaScript is ECMAScript. ECMA (European Computer Manufacturers Association) is an organization around standardization. Every year there are new things added to the specification. These iterations were than named after the year of implementation (ES2016, ES2017, etc). However, most of the times people are referring to ES6 (which is ES2015), ES7 and so on. The versions that are mentioned the most are ES5 and ES6, since they had the most changes, and are basically the divider between "classic JavaScript" and "modern JavaScript".

* **GIT**

A version Control system developed by Linus Torwald that keeps track of changes within folders of a project. Local changes are commited and pushed to a GIT server like GitHub, TFS or Azure Devops.

* **HTML**

Hyper Text Markup Language is a text based language that declares the structure of a web page. The last iteration is from 2014 and is called HTML5, a big improvement that introduces many new API's and semantic elements.

* **JAMstack**

A method for building sites and applications with JavaScript, API's and Markup. The latter gets created by using a Static Site Generator such as HuGo, Jekyll, 11ty or Gatsby. For the API part, most developers use a headless CMS like Sanity, Story Blocks, Forestry. Or a classic CMS that also can be used through an API, like Wordpress.

* **JavaScript**

A scripting language that can be used in a browser directly. Originally written by Brendan Eich in only 10 days back in 1995. Newer versions of JavaScript are called ECMAScript.

* **JSX**

JSX is the templating language used by React and stands for JavaScript Extended. It combines all 3 three core Front-end languages in one file with a style block, a script block and a template block.

* **Node.js**

Node.js started as an adapted version of Chrome's V8 JavaScript engine. It's enables developers to run a JavaScript instance on a server, so it can be used as a back-end api or service 

* **React**

One of the most popular JavaScript frameworks, developed by Facebook. Uses JSX as a templating language. 

* **Sass**

"Syntactically Awesome Style Sheets" or Sass for short, is a CSS Preprocessor that enables you to do things with your styling files that can't be done with CSS files. For example: Nesting withing selectors, functions, mixins and variables. That last one is now also available in regular CSS, called "CSS custom-properties".

* **Svelte**

Svelte is the new kid on the block, with a focus on creating a small package for the end user, combined  with a good Developer Experience. One remarkable thing about Svelte, is that it disappears completely. After a deploy build, the only files that are served are an index.html, a bundle.css and a bundle.js.

* **TypeScript**

A strongly typed version of JavaScript. With "typed" they mean that every variable has a specific type; for instance a string, number, boolean, etc. This is helpful while developing, because your IDE or Text editor will alert you if you combine types. The first major framework that adopted TypeScript was Angular. 

* **Vanilla JavaScript**

A term to refer to plain JavaScript, without frameworks. The name is link to the most basic Ice cream flavor: Vanilla.

* **Vue.JS**

Vue.JS is one of the most used JavaScript Frameworks, and the only one that is not connected to a big corporation. It was launched in 2014 by Evan You, and has only grown since. In 2020 it released the newest version: Vue3.

## Conclusion

Of course this list could never be a complete overview, but at least it's a start. Techniques I often use are React, Vue, Sass and GIT. Which means I also use Webpack, CLI, etc. And since I love the JAMstack I also look for ways to implement tools like Gatsby, 11ty and Forestry. And I ❤️ CI/CD and hosting on Netlify 🚀.

This blog was originally posted in Dutch on my employers website on 07-07-2020 and was also written by myself.