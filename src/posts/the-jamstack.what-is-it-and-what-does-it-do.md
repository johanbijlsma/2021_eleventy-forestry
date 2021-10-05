---
title: The Jamstack. What is it, and what does it do?
date: 2021-10-01T00:00:00+02:00
tags:
- jamstack
- frontend
description: An overview of the Jamstack. What is is, what it's for, and how to unleash
  its potential
image: "/images/jamstack_logo_darkbg.svg"

---
A couple of years ago, a new phenomenon appeared in the Front-end world: the Jamstack. For people unknown to this way of developing, it might sound like some sticky sandwiches piled on top of each other. But actually it is a fantastic way to build Front-end applications.

# What is a Jamstack?

The "Jam" part in Jamstack is an acronym that stands for:

* "JavaScript": for the interactivity and the logic of application
* "API's": which is an acronym in itself (Application Programming Interface). API's enable communication with external systems or services
* "Markup": The last part stands for Markup. This is used for templating out the scaffolding of a page. With Jamstack pages are often empty until filled through JavaScript and content from API's

All of this enables a Front-end developer to build sites and application in a relative short time. Which is awesome!

I'll explain by showing a couple of models:

![A model comparing a regular web stack and a Jamstack](https://www.sharevalue.nl/images/sharevalue/blogs/schema_JAMstack.png "A regular web stack in comparison to a Jamstack")

As shown in the model, it clear to see that the jamstack is shorter that a traditional stack. This is mainly caused by moving parts to remote alternatives, and consumed through multiple API calls. So instead of one back-end, you have many systems through SaaS solutions.

## So multiple connections are faster than one traditional architecture?

Yes, there is a difference between load time on rendering and on compiling:

Because all parts are generated separately before being served through a CDN, the render-time will result in a quicker loading site.

## Demo time: JAMdemo

To demonstrate te use of the Jamstack, I made a fun demo with Gatsby (a static-site generator based on React). For the API part i chose Sanity. As a CDN I used Netlify.

![A model describing all the moving parts of my Jamstack demo](https://www.sharevalue.nl/images/sharevalue/blogs/jamstack_onderdelen.png "A model describing all the moving parts of my Jamstack demo")

### The J of JavaScript

Gatsby is a great way to build static sites and applications. Because it is based on React, developers can start easily because of the popularity of React.

### The A of API's

All the content is written and maintained in Sanity; a headless CMS that can be customised to whats needed.

### The M of Markup

The Markup in my demo is set up in Gatsby as well. Here you can build you templates that will be populated with content out of Sanity

## Version control and Continuous Deployment

Of course we use Git for version control. In this case it is a public repo: [https://github.com/johanbijlsma/JAMdemo](https://github.com/johanbijlsma/JAMdemo "https://github.com/johanbijlsma/JAMdemo"). Everytime a commit is pushed, the project is build and deployed by Netlify. This last is called Continuous Deployment.

The Demo can be found here: [https://jams-jams-jams.netlify.com/](https://jams-jams-jams.netlify.com/ "https://jams-jams-jams.netlify.com/")

![](https://www.sharevalue.nl/images/sharevalue/blogs/demo_JAMstack.jpg)

## To conclude

The Jamstack has a lot to offer. Because of the short Time-to-market an by combining external services, it is a great opportunity for development teams with no Back-end capacity in-house. I can say that I really love building sites with the Jamstack methodology, and since I discovered Netlify as a hosting party, I went all in. They are primary way to host my sites an applications.

This blog post was written by myself in Dutch and originally released on my employers website on the 4th of July 2019.