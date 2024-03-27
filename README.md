# React JS Portfolio

## Demo (Screenshots)

![Screenshots](./public/Winston-Potter.png)

## Root Components `App.js` File

```javascript
const App = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <WorkedCompany />
      <Experiences />
      <FunFact />
      <About />
      <EducationAndAwards />
      <ClientsFeedback />
      <BlogAndNews />
      <Contact />
      <Footer />
    </>
  );
};
```

## Styling Tools/System

In this portfolio I used `CSS` module system for designing and also `BEM - (Block Element Modifier)` for better understanding class names.

## Dependencies

```json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.1",
    "styled-components": "^6.1.8"
  },
```

- **Styled Components** I used `styled-components` for creating reusable components.

In this portfolio I used only 3 reusable components called `Button.jsx`, `Heading.jsx` and `Navigation.jsx`.

- **`Button.jsx`** using `styled-components`

  ```javascript
  import styled from "styled-components";

  const Button = styled.button`
    padding-inline: 2rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 3.5rem;
    border-radius: 0.32rem;
    box-shadow: 0px 8px 32px 0px rgba(19, 34, 56, 0.08);
    transition: 0.4s ease-out;
    background-color: ${(props) =>
      props.variant === "primary" ? "#1777E5" : "#FFFFFF"};
    color: ${(props) => (props.variant === "primary" ? "#fff" : "#1777E5")};
    border: ${(props) =>
      props.variant !== "primary" && props.variant !== "secondary"
        ? "2px solid #E8F1FC"
        : "none"};

    &:hover {
      background-color: ${(props) =>
        props.variant !== "primary" ? "#1777E5" : "#FFFFFF"};

      color: ${(props) => (props.variant !== "primary" ? "#fff" : "#1777E5")};
    }
  `;

  export default Button;
  ```

- **`Heading.jsx`** using `styled-components`

  ```javascript
  import styled from "styled-components";

  const Heading = styled.h1`
    color: var(--text-clr-1);
    text-align: ${(props) => (props.center ? "center" : "left")};
    font-size: ${(props) => props.size || "2.5rem"};
    font-weight: 600;
    line-height: 3rem;
  `;

  export default Heading;
  ```

- And finally **`Navigation.jsx`**

  ```javascript
  import React from "react";
  import classes from "./navigation.module.css";

  import Logo from "../logo";
  import NavMenu from "../nav-menu";
  import NavLinks from "../nav-links";

  const Navigation = ({ variant }) => {
    return (
      <>
        <div
          className={`${classes.nav} ${
            variant === "footer" ? classes["footer"] : classes["header"]
          }`}
        >
          <nav
            className={`${classes.nav__bar} container ${
              variant === "footer" && classes["nav__bar--footer"]
            }`}
          >
            <Logo variant={variant} />
            <NavMenu variant={variant} />
            <NavLinks variant={variant} />
          </nav>
        </div>
        {variant === "footer" && <hr />}
      </>
    );
  };

  export default Navigation;
  ```
