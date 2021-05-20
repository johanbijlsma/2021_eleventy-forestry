---
title: Using animations and transitions to bring your website to life
date: 2021-03-16T00:00:00.000+01:00
tags:
- Greensock
- CSS
- animation
description: ''
image: "/images/animation.jpg"

---
<p class="lead">
A couple off weeks ago, I organized a session for my colleagues at ShareValue to enlighten them with the ins & outs of transitions and animations.</p>

## To get started

Everyone knows PowerPoint... and everyone knows the difference between a good, professional presentation and one that just does to much (a.k.a. "Death by PowerPoint"). With the latter, the presentation does nothing more than overload the viewers with texts, images and animations, that will only distract them instead off compelling them.

![](https://www.sharevalue.nl/images/sharevalue/blogs/great_power.png)

The reason I mention these examples? Animations used right can help you tell a story.

### Animations & Transitions

But what do I mean with Animations & Transitions? Is there a difference?

* Animation: A change in attributes of an element over time
* Transition: a change between 2 visual styles (for instance: a transition on hovering a button)

There are several ways to create animations and transitions. I will now discuss the main two options.

#### CSS

CSS offers a lot off ways to create animations and transitions. The latter, in it's simplest form looks something like this:

     /* property name | duration | timing function | delay */
     transition: all 1s linear 0,5s;

Now imagine a button with an orange background-color, and a white background-color on hover. When the line of CSS above gets added to the hover state of that button, the background-color will transition between orange and white in a linear fashion, starting after a 0,5 second delay. The transition itself will take 1 second. The result will look something like this: 