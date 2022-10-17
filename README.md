# JTDev Component Library
<a href="https://jtdev.netlify.app/" target="_blank" rel="noreferrer"> <img src="https://jtdev-asset-server.herokuapp.com/assets/images/JTDEV-MDHead.png" alt="JTDEV" width="100%" height="auto"/> </a>
This application was created to act as a library of customizable and reusable components. As I build applications and find interesting components I will continue to add them to this project. As more components are added this will speed up development of unique looking apps as I will be able to simply drop these components into an application and use React context or a theme engine to quickly change the look of all components at once.

<!-- Application gif -->
<a href="https://jtdev-asset-server.herokuapp.com/ComponentLibrary/gifs/ComponentLibrarySq.gif" target="_blank" rel="noreferrer"> <img src="https://jtdev-asset-server.herokuapp.com/ComponentLibrary/gifs/ComponentLibrarySq.gif" alt="Component library preview gif" width="100%" height="auto" /> </a> 

## How It's Made:
**Tech used:** <!--JavaSCript =>--><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <!-- Node.js =>--><a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <!-- React =>--><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="reactjs" width="40" height="40"/> </a><!-- NPM --><a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40"></a>
This is a react component library meant to provide highly customizable and responsive react components that I may use within other apps as needed. I will continue to update this with interesting or useful components I find or create as I develop React applications. This application is currently in the process of being converted to an NPM package for easier installation, use, and update of components.

## How to install/use:
<!-- TODO: Update to npm instructions whenever -->
1. Clone/Fork the repository
2. Use `$npm install` to install all dependencies and `$npm start` to view
3. Copy desired component files into whatever project you need them in
4. Call and theme components in your application using examples provided in App.js or leave default styles. See examples when using as some components have some required props in order to function properly.

## Optimizations
- Use theme provider to supply custom values as an alternative to a settings object. This should reduce code duplication when using multiple components in an app and make plug/play easier for applications already using Theme Provider.
- Update to an npm package. This would allow it to be installed and called in other projects more easily instead of having to copy/paste the component directory. See links for more details:  - https://medium.com/@dave.draper20/exporting-react-components-in-npm-e077606073bb
- https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7
- https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/multiple-exports

## Lessons Learned
- Many CSS tips and tricks within each component such as animations, sizing, and responsiveness.
- While I still prefer to use css modules where I can in order to separate my css from my javascript, I am now much more comfortable using `styled-components` where needed in order to dynamically set css values using javascript.

## Resources
- <a href="https://www.youtube.com/kepowob">Kevin Powell</a> and <a href="https://www.youtube.com/c/OnlineTutorials4Designers">Online Tutorials</a> have been awesome resources for design and information.

## Other Examples:
Take a look at other examples from my <a href="https://jtdev.netlify.app/">portfolio</a>

**Blog Site W/ Categories and Authentification:** https://github.com/jnhthomp/alpha-blog2

**Stock Based Social Network:** https://github.com/jnhthomp/finance-tracker

**Restaurant Web-Based Ordering System:** https://github.com/jnhthomp/practice-food-order-app