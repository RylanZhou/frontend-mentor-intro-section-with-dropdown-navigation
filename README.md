# Frontend Mentor - Expenses Chart Component Solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I implemented](#what-i-implemented)

## Overview

### The challenge

Users should be able to:

- [x] View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- [x] View the optimal layout for the content depending on their device's screen size
- [x] See hover states for all interactive elements on the page

### Screenshot

|                            Desktop                            |
| :-----------------------------------------------------------: |
|                     ![](./screenshot.png)                     |
|                          **Mobile**                           |
| <img src="./screenshot-mobile.png" alt="mobile" width="400"/> |

### Links

- Solution URL: [Github](https://github.com/RylanZhou/frontend-mentor-intro-section-with-dropdown-navigation)
- Live Site URL: [Vercel](https://frontend-mentor-intro-section-with-dropdown-navigation-kappa.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Scss
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- TypeScript

### What I implemented

1. Use `container-type: inline-size` to enable the new container query feature in CSS. Child components can then use `cqw` and `cqh` as the unit referring to container's width and height. I use this method to dynamically change the `<h1>` font size according to the screen.

2. Write `mask` elements as early as possible so that it will not block pointer event from penetrating.
