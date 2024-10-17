# CSS Modules in Legacy Applications Demo

[![Vercel](https://vercelbadge.vercel.app/api/your-github-username/global-styles-demo-644f)](https://global-styles-demo-644f.vercel.app/)

This project demonstrates how to use CSS Modules in a React application,
particularly in the context of working with legacy stylesheets. It showcases how
CSS Modules can help prevent style conflicts and improve the maintainability of
your styles. 

<img width="330" alt="image" src="https://github.com/user-attachments/assets/2842f138-b85c-48ab-b6a4-b701b95648d5">


## Live Demo

Check out the live demo:
[https://global-styles-demo-644f.vercel.app/](https://global-styles-demo-644f.vercel.app/)

## What This Demo Shows

1. A React component styled with CSS Modules
2. Global styles that might exist in a legacy application
3. How CSS Modules prevent the global styles from interfering with the
   component's styles

## Key Concepts

- **CSS Modules**: A CSS file in which all class names and animation names are
  scoped locally by default. [Learn
more](https://github.com/css-modules/css-modules)
- **Specificity**: How browsers determine which CSS rule is applied when
  multiple rules could style an element. [MDN
explanation](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- **Working with Legacy Styles**: Strategies for integrating modern CSS
  practices with existing codebases. [CSS-Tricks
article](https://css-tricks.com/strategies-for-migrating-to-a-modern-css-workflow/)

## Project Structure

- `src/components/Button/`: Contains a React button component and its CSS Module
- `src/global-styles.css`: Simulates legacy global styles
- `src/App.tsx`: Main application file demonstrating the use of the button
  component alongside elements styled by global CSS

## Running the Demo

1. Install dependencies: `yarn install`
2. Start the development server: `yarn dev`
3. Build for production: `yarn build`

## Further Reading

- [CSS Modules vs.
  CSS-in-JS](https://github.com/stereobooster/css-modules-vs-css-in-js)
- [Motivation for CSS Modules](https://glenmaddern.com/articles/css-modules)
- [Managing CSS in Large Scale
  Projects](https://www.smashingmagazine.com/2022/05/managing-css-large-scale-projects/)

Feel free to explore the code and experiment with the styles to see how CSS
Modules can help manage styling in complex applications!
