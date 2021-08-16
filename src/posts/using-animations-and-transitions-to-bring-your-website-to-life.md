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
<p class="lead"> In September 2020, I organized a session for my colleagues at ShareValue to enlighten them with the ins & outs of transitions and animations.</p>

## To get started

Everyone knows PowerPoint... and everyone knows the difference between a good, professional presentation and one that just does to much (a.k.a. "Death by PowerPoint"). With the latter, the presentation does nothing more than overload the viewers with texts, images and animations, that will only distract them instead off compelling them.

![](https://www.sharevalue.nl/images/sharevalue/blogs/great_power.png)

The reason I mention these examples? Animations used right can help you tell a story.

### Animations & Transitions

But what do I mean with Animations & Transitions? Is there a difference?

* Animation: A change in attributes of an element over time
* Transition: a change between 2 visual styles (for instance: a transition on hovering a button)

There are several ways to create animations and transitions. I will now discuss the main two options.

#### Using CSS

CSS offers a lot off ways to create animations and transitions. The latter, in it's simplest form looks something like this:

     /* property name | duration | timing function | delay */
     transition: all 1s linear 0,5s;

Now imagine a button with an orange background-color, and a white background-color on hover. When the line of CSS above gets added to the hover state of that button, the background-color will transition between orange and white in a linear fashion, starting after a 0,5 second delay. The transition itself will take 1 second.

The result will look something like this:

![](https://www.sharevalue.nl/images/sharevalue/blogs/hover-transition.gif)

Animations work in a different way: The animations are defined in a separate block in the CSS with the `@keyframes`syntax.  Within a `@keyframes` block you declare  the changes from the beginning to the end of the animation.

    @keyframes move {
    	from {
    		transform: translate3d(0, 0, 0);
    	} to {
    		transform: translate3d(90vw, 0, 0);
    	}
    }

In this `@keyframes` block with the name "move", I want to animate an element from 0 to 90% of the viewport-width. But right now nothing will happen. That's because the animation needs to be added to an element.

    animation: move 3000ms 200ms ease-out alternate infinite;

In the example above we say that the element has an animation with name "move", with a duration of 3 seconds, and will start after a delay of 200 milliseconds . `alternate` is a "play direction" attribute that tells that animation to run both forwards and backwards and `infinite` that this animation will never stop.

![](https://www.sharevalue.nl/images/sharevalue/blogs/keyframe-animation.gif)

#### Using JavaScript

Besides CSS, it is also possible to create animations using JavaScript. To do so, you must select an element, and use the Web Animation API. You can do that by calling `.animate()`

    let ball = document.querySelector(”.ball”);
    ball.animate([
    		{ transform: "translate(0, 0)", offset: 0 },
    		{ transform: "translate(90vw, 0)", offset: 1 }
    	],{
    	duration: 2000,
    	direction: "alternate",
    	iterations: Infinity
    	}
    );

This results in basically the same animation as the example we saw with CSS. We select a div with the class of "ball", and we move it horizontally, again from 0% to 90% of the viewport-width. This animation also takes 2 seconds, the play direction is also toggling between forwards and backwards (`alternate`), and the amount of iterations is set to `infinity`.

![](https://www.sharevalue.nl/images/sharevalue/blogs/js-animation.gif)

## But when to chose what technique?

A quick overview:

* **Easy to use (implementation, syntax)**
  * CSS: yes
  * JavaScript: yes

    _Both CSS and JavaScript are easy to implement with a relative easy syntax_
* **Support transitions and animations**
  * CSS: yes
  * JavaScript: no

    _JavaScript has no build in transitions, like CSS does. Of course you could combine 2 JavaScript animations to achieve the same result_
* **Memory and GPU friendly**
  * CSS: yes
  * JavaScript: it's complicated

    _CSS animations consume generally less memory and GPU usage. With JavaScript you could animate untill the browser crashes. Also, JavaScript animations go over the main thread, which could possibly block other events or data fetching_
* **Time based animations**
  * CSS: yes
  * JavaScript: yes

    _CSS animations are always time based. Although this is also an option with JavaScript animations, it is also possible to create animations based on events, like input or state changes_
* **Animations based on dynamic content or state changes**
  * CSS: no
  * JavaScript: yes

    _Animations based on user input, or based on state are only possible with JavaScript. The combination is also possible: starting a CSS animation by adding a class to an element for instance_
* **Complex animations**
  * CSS: not practical, but it's possible
  * JavaScript: yes

    _Complex animations are possible with both CSS and JavaScript. But using CSS complex animations can be quite laborious. In that area JavaScript offers a lot of methods for calculations and automation. Especially by using libraries like Greensock_.
