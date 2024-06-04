# Code Standards

## General Rules

**General**
1. **One** empty line should be added at the end of each document
2. Indent spacing should be **2 spaces**
3. A single space should be added at the start and end of brackets `{}  []  ()` if the next character is **NOT** a bracket
5. Only **single quotes** and **back ticks** are allowed, no double quotes
6. All imports should happen at the start of the file and all exports should happen at the end of the file
7. Use **color** instead of **colour**


**HTML**
1. Order of properties:
	- Methods, e.g. `onClick={ handleClick }`
	- Key, e.g. `key={ index }`
	- Ref, e.g. `ref={ elementRef }`
	- Class, e.g. `class={ styles[ 'box' ] }`
	- Styles, e.g. `style={{ width: '100%' }}`
	- HTML Attributes, e.g. `src={ 'https://someurl.com' }`
	- Data Attributes, e.g. `data-width={ '100%' }`
2. Conditional class names should make use of an **IF**  **ELSE** ternary operator ( `? :` ) rather than the **AND** ternary operator ( `&&` ), e.g. `class={ this.isTrue ? 'box--true' : '' }`
3. Class names should be written in **bracket notation**, e.g. `class={ styles[ 'box' ] }`


**JS / JSX**
1. **Variable** and **Function** names should be written in **lowerCamelCase**, e.g. `const myVariableName = true`
2. Descriptive names should be used for **Variables** and **Functions** e.g. `const menuIsOpen = false`
3.All lines should be ended with a trailing semicolon ( `;` )
4. **Single paramaters** and props should be written on the **same line** as the opening function / component, e.g. `public myFunctionName = ( myParamater: myType ) => {}`
5. **2+ paramaters** should be written on **multiple lines** starting on the next line after the opening of the function / component
6.  Component **attributes** and **props** should be placed inside **curly brackets**, e.g. `src={ 'https://someurl.com' }`
7. Only add function params inside brackets if there are more than 2, e.g. `myArray.map( item => {} )` vs `myArray.map(( item, index ) => {} )`
8. Components should only be closed with a full closing tag if the component has children, otherwise self-closing tags should be used ( `< />` )
9. Only **functional components** should be used
10. Start imports paths inside the current file by with the current path ( `./` )
11. Extract all of the props, where possible, at the start of the component, e.g. `const { myProp } = props`
12. Props, States, and Methods should be documented using JSDoc and the usage of comments are highly advised to describe lines within methods.
13. **IF**  statements should have opening and closing brackets, {}, only when the condition needs to be applied to two or more items **OR** when the amount of characters in the line exceeds 40 ( excluding the actual if statement )
14. All console logs **MUST** be cleared


**TS / TSX**
1. **Variable** and **Function** names should be written in **lowerCamelCase**, e.g. `const myVariableName = true`
2. Descriptive names should be used for **Variables** and **Functions** e.g. `const menuIsOpen = false`
3. All lines should be ended with a trailing semicolon ( `;` )
4. **Single paramaters** and props should be written on the **same line** as the opening function / component, e.g. `public myFunctionName = ( myParamater: myType ) => {}`
5. **2+ paramaters** should be written on **multiple lines** starting on the next line after the opening of the function / component
6. Component **attributes** and **props** should be placed inside **curly brackets**, e.g. `src={ 'https://someurl.com' }`
7. Only add function params inside brackets if there are more than 2, e.g. `myArray.map( item => {} )` vs `myArray.map(( item, index ) => {} )`
8. Components should only be closed with a full closing tag if the component has children, otherwise self-closing tags should be used ( `< />` )
9. Only **functional components** should be used
10. Start imports paths inside the current file by with the current path ( `./` )
11. Extract all of the props, where possible, at the start of the component, e.g. `const { myProp } = props`
12. Props, States, and Methods should be documented using JSDoc and the usage of comments are highly advised to describe lines within methods.
13. **IF** statements should have opening and closing brackets, {}, only when the condition needs to be applied to two or more items **OR** when the amount of characters in the line exceeds 40 ( excluding the actual if statement )
14. All console logs **MUST** be cleared
15. The use of `any` as a type is never accepted, in cases where the type is truly unknown, use `unknown`
16. All props should be passed as a Type and **NOT** an Interface. Interfaces should be defined but set to a type when declared in the component, e.g. `type TMyProps = IMyInterface`
17. All definition should start with either a T for types, E for Enums or an I for interfaces, e.g `TButonProps`, `IButton` and `EButtonVariant`
18. All types and definitions should be imported and exported using `type`, e.g. `import type { TString } from './../path`


**CSS / SCSS**
1. **BEM** naming conventions should be used, e.g. `block`, `block__element `and `block__element--modifier`
2. **!import** **is NOT allowed**
3. **Nesting** is not encouraged, it is a **MUST**, e.g. .`block { &__element {} }` above `.block__element {}`
4. All imports, including **@use** and **@import** should be written at the top of the document
5. **@use** imports **MUST** be named, e.g. `@use './mixins.scss' as mixins`
6. **NO** empty rulesets may be used
7. Comments should be used to differentiate between different sections, imports, mixins, keyframes, styles, etc.
8. Variable names should be written in **kebab-kase**, with a hyphen numbering system, e.g. `$primary-color-100`
9. Single quotes should be used, e.g. `content: ''`
10. Responsive queries should make use of the available responsive minins which are available in the mixins file
11. For more accurate implementation of designs, the `size.rem()` function should be used when working with px sizes
12. All scoped variables, mixins and function should have a suffix of  **-scoped**
13. All **keyframes** should be added to the _animations.scss file
14. Shorthand values are preferred over defining each value individually, e.g. `border: solid size.rem(1) color.get(primary-500)` over `border-style: solid; border-width: size.rem(1); border-color: color.get(primary-500)`


**Imports / Exports**
1. All imports and exports should be done alphabetically and grouped by usage


----------


## Tech Stack ( FE )

**Base**
- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- [SCSS](https://sass-lang.com/)
- [NX Monorepo](https://nx.dev/)
- [Nxext](https://nxext.dev/)
- [Storybook](https://storybook.js.org/)


**Data Fetching**
- Rest APIs
    - [Axios](https://axios-http.com/docs/intro)
- GraphQL API’s
    - [Apollo](https://www.apollographql.com/)

Rest APIs:
```
npm install axios
# or
yarn add axios
```

GraphQL APIs:
```
npm install @apollo/client graphql
# or
yarn add @apollo/client graphql
```


**Animations**
- [Framer Motion](https://www.framer.com/motion/)
- [Lottie React](https://lottiereact.com/) ( Optional )

```
npm install framer-motion lottie-react
# or
yarn add framer-motion lottie-react
```


**3D**
- [ThreeJS](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [React Drei](https://drei.pmnd.rs/?path=/story/performance-adaptive--adaptive-scene-st)

```
npm install three @react-three/fiber @react-three/drei
# or
yarn add three @react-three/fiber @react-three/drei
```


----------


## Project Structure - Components
```
|-- lib
|   |-- .storybook
|       |-- ...auto generated files
|   |-- assets
|       |-- images
|           |-- png
|           |-- jpg
|           |-- webp
|       |-- videos
|           |-- mp4
|       |-- fonts
|           |-- woff
|           |-- woff2
|           |-- ttf
|           |-- otf
|       |-- icons
|           |-- svg
|       |-- lotties
|           |-- json
|       |-- rive
|           |-- riv
|   |-- src
|       |-- components
|             |-- { COMPONENT TYPE }
|                 |-- { COMPONENT NAME }
|                     |-- { COMPONENT NAME }.definitions.ts
|                     |-- { COMPONENT NAME }.module.scss
|                     |-- { COMPONENT NAME }.spec.tsx
|                     |-- { COMPONENT NAME }.stories.tsx
|                     |-- { COMPONENT NAME }.tsx
|       |-- ...auto generated files
|   |-- ...auto generated files
```


## Project Structure - Web
```
|-- app
|   |-- .env
|   |-- .env.local
|   |-- .env.production
|   |-- assets
|       |--- images
|            |--- png
|            |--- jpg
|            |--- webp
|       |--- videos
|            |--- mp4
|       |--- fonts
|            |--- woff
|            |--- woff2
|            |--- ttf
|            |--- otf
|       |--- icons
|            |--- svg
|       |--- lotties
|            |--- json
|       |-- rive
|           |-- riv
|       |--- pages
|            |--- { PAGE NAME }
|                 |--- { PAGE NAME }.tsx
|                 |--- { PAGE NAME }.definitions.ts
|                 |--- { PAGE NAME }.module.scss
|            |--- index.ts
|   |-- hooks
|       |--- { HOOK NAME }.tsx
|   |-- providers
|       |--- { PROVIDER NAME }
|            |--- { PROVIDER NAME }.tsx
|            |--- { PROVIDER NAME }.definitions.ts
|   |-- public
|       |--- favicon.ico
|   |-- pages
|       |--- index.tsx
|       |--- { PAGE NAME }.tsx
|       |--- api
|            |--- api-name.tsx
|   |-- utils
|       |--- utils.ts
|   |-- styles
|       |--- styles.scss
```


----------


## ENV Variables

**.env**
Used to store env variable names

```
SECRET_CODE = SECRET_CODE
```

**.env.local**
Used to store env variables for local development

```
SECRET_CODE = "local-secret"
```

**.env.production**
Used to store env variables for production environment

```
SECRET_CODE = "production-secret"
```


----------


## Assets

**images**
This folder will store images not served from a CMS or CDN.

Only the following media types are allowed:
- .png
- .jpg
- .jpeg
- .webp
- .avif
- .gif

Naming conventions for images are as follows: 
```
company_name-asset_type-file_name.extention
e.g.
acme-image-vertical_farm.jpg
```



**videos**
This folder will store videos not served from a CMS or CDN.

Only the following media types are allowed:
- .mp4

Naming conventions for videos are as follows: 
```
company_name-asset_type-file_name.extention
e.g.
acme-video-vertical_farm.mp4
```



**fonts**
This folder will store font files not served from a CMS or CDN.

Only the following media types are allowed:
- .woff
- .woff2
- .ttf
- .otf

Naming conventions for fonts are as follows: 
```
file_name-weight.extention
e.g.
roboto-semi_bold.ttf
```



**icons**
This folder will store icons not served from a CMS or CDN.

Only the following media types are allowed:
- .svg

Naming conventions for svgs are as follows:
```
company_name-asset_type-file_name.extention
e.g
acme-icon-burger_menu.svg
```



**lotties**
This folder will store local lottie files

Only the following media types are allowed:
- .json

Naming conventions for lotties are as follows: 
```
company_name-asset_type-file_name.extention
e.g.
acme-lottie-celebration.json
```


----------


## Components

**Component Folder ( Simple )**
```
|-- components
|   |-- { TYPE ( base, common, collective, section, layout ) }
|       |-- { NAME }
|           | --- { NAME }.tsx
|           | --- { NAME }.definitions.ts
|           | --- { NAME }.spec.tsx
|           | --- { NAME }.module.scss
```

**Component Folder ( With Children )**
```
|-- components
|   |-- { TYPE ( base, common, collective, section, layout ) }
|       |-- { NAME }
|           | --- { NAME }.tsx
|           | --- { NAME }.definitions.ts
|           | --- { NAME }.spec.tsx
|           | --- { NAME }.module.scss
|           | --- children
|                 | --- { CHILD NAME }
|                       | --- { CHILD NAME }.tsx
|                       | --- { CHILD NAME }.definitions.ts
|                       | --- { CHILD NAME }.spec.tsx
|                       | --- { CHILD NAME }.module.scss
|                 | --- index.ts
```

**Component TSX ( Basic )**
```
// Packages & Modules
import styles from './{ NAME }.module.scss';
import React from 'react';

// Definitions
import type { TName } from './{ NAME }.definitions.ts';

// Component
/**
* NAME Component
* 
* The `NAME` component description...
* Composition...
* 
* @component
* @example
* <NAME />
* 
* @param { PROPS } props - The properties for configuring the NAME component.
* 
* @returns { JSX.Element } - The NAME component is being returned as a JSX element.
*/
const ComponentName = ( props: TName ): JSX.Element => {
// PROPS
  const {
    image,
    paragraph,
    title
  } = props;
  
  // VARIABLES
  const baseClass: string = 'block';
 
  // HTML
  return (
    <div className={ styles[ baseClass ] } >
      {/* Child Component Type ( e.g. Image ) */}
        <div className={ styles[ `${ baseClass }__image` ] }>
          <img
            className={ styles[ `${ baseClass }__image-element` ] }
            alt={ image.alt }
            src={ image.src }
          />
        </div>
      {/* ./Child Component Type ( e.g. Image ) */}

      {/* Child Component Type ( e.g. Text ) */}
      <div className={ styles[ `${ baseClass }__text` ] }>
        <h1 className={ styles[ `${ baseClass }__title` ] }>
          { title }
        </h1>
        <p className={ styles[ `${ baseClass }__paragraph` ] }>
          { paragraph }
        </p>
      </div>
      {/* ./Child Component Type ( e.g. Text ) */}
    </div>
  );
}

export default ComponentName;
```


**Component TSX ( Advanced )**
```
// Packages & Modules
import { ProviderContext } = './../path/to/provider';
import styles from './{ NAME }.module.scss';
import React, {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

// Components
import { NestedComponent } from './../pathToComponent';

// Definitions
import type {
  TString,
  TNumber
} from './../path/to/types';

// Component
/**
* NAME Component
* 
* The `NAME` component description...
* Composition...
* 
* @component
* @example
* <NAME />
* 
* @param { PROPS } props - The properties for configuring the NAME component.
* 
* @returns { JSX.Element } - The NAME component is being returned as a JSX element.
*/
const ComponentName = ( props: Props ): JSX.Element => {
// PROPS
  const { text } = props;

  // PROVIDERS
  const providerContext = useContext< Type >( ProviderContext );
  
  // VARIABLES
  const baseClass: string = 'block';

  // REFS
  const blockRef = useRef< Type >( null );

  // STATES
  const [
    _myState,
    _setMyState
  ] = useState< Type >( true );

  // FUNCTIONS
  /**
  * Some JS Doc here explainig the function usage.
  * 
  * @param { Type } param - Explain the param.
  * 
  * @returns  { void } - Explain what is returned.
  */
  const myCustomFunction = ( param: Type ): void => {
    // I explain what happens here
    setMyState( false );
  }

  /**
  * Some JS Doc here explainig the function usage.
  * 
  * @returns  { void } - Explain what is returned.
  */
  const clickEventHandler = (): void => {
        // I Explain this variable
    let variableOne: Type = 'Hello',
        // I Explain this variable
        variableTwo: Type = 'world';

    // I explain what happens on this line
    console.log( `${ variableOne } ${ variableTwo }` );
  }

  // EFFECTS
  useEffect(() => {
    myCustomFunction();
  }, [])
    
  // HTML
  return (
    <div
      onClick={ clickEventHandler }
      ref={ blockRef }
      className={ styles[ baseClass ] }
    >
      {/* Child Component Type ( e.g. Text ) */}
      {( checkIfPropExists ) && (
        <div className={ styles[ `${ baseClass }__text` ] }>
          <NestedComponent textProp={ text } />
        </div>
      )}
      {/* ./Child Component Type ( e.g. Text ) */}
    </div>
  )
}

export default ComponentName;
```    


**Component TSX ( Rules )**
- Packages & Modules
  - Any library / package or module that needs to be imported, e.g. hooks, css modules, 3rd party libs
- Definitions
  - Typescript declarations, all types, enums and interfaces
- Refs
  - Naming convention for refs will be block name + “Ref” e.g. **logoRef**
- States
  - States should have descriptive names e.g. **_menuIsActive**
  - State functions should start with the word “set” followed by the state name e.g. **_setMenuIsActive**
  - States should start with an underscore ( `_` ) to easily distinguish between variables / props and states with similar names. The underscore indicates that it is private to the component
- JSX / TSX
  - Child components should be opened and closed with descriptive comments
  - Avoid using if else ternary operators, rather use is true and is not true, e.g. **isActive** and **!isActive**
  - Checks should be added to each component that uses props to see if the prop exists
  - Child components should be created within their own folders and must be exported, each JSX / TSX file **MUST** contain only one component



**Component Types ( Example )**
```
type TString = string;

type TNumber = number;

export type {
  TNumber,
  TString
};
```


**Component Types ( Rules )**
- Rules
  - Only component specific props should be added to this file
  - All types and interfaces should be imported and exported using `type`
  - More information can be found under the type rules general section


**Component SCSS ( Example )**
```
// Imports
@use './../path/to/file/name' as name;

// Styles
.block {
  &__element {
    &--modifier {
    }
  }
}
```


**Component SCSS ( Rules )**
All css / scss rules are written in the general rules section


**Importing Components**
An **index.ts** file should be placed within each folder housing components. This file should be used to import and export all of the components found within the relevant folder, see examples below.

Simple example:
```
export * from './ComponentOne/ComponentOne';
export * from './ComponentThree/ComponentThree';
export * from './ComponentTwo/ComponentTwo';
```

Components should be imported and exported in alphabetical order


----------


## Definitions

**Types ( Example )**
```
// IMPORTS
import type { TMyType } from './../path/to/type';

// TYPES
/**
* Type usage description.
*/
type TString = string;

/**
* Type usage description.
*/
type TNumber = number;

/**
* Type usage description.
*/
type TArray = string[];

/**
* Type usage description.
*/
type TUnion = 
  | 'option-1'
  | 'option-2'
  | 'option-3'
  | TMyType;

// EXPORTS
export type {
  TArray,
  TNumber,
  TString,
  TUnion
};
```

**Types ( Rules )**
- General
  - All exports should happen at the end of the document.
  - All types should have some JSDoc describing the usage of the type
  - Union types should be listed below each other for easy readability

**Interfaces ( Example )**
```
// IMPORTS
import type { IMyInterface } from './../path/to/type';

// INTERFACES
/**
* Type usage description.
*/
interface IMyInterface = {
  propertyA: string;
  propertyB: number;
  propertyC: IMyInterfaceChild;
};

/**
* Type usage description.
*/
interface IMyInterfaceChild = {
  propertyA: string[];
  propertyB: number[];
};

// EXPORTS
export type {
  IMyInterface,
  IMyInterfaceChild
};
```

**Interfaces ( Rules )**
- General
  - All exports should happen at the end of the document.
  - All interfaces should have some JSDoc describing the usage of the interface


----------


## Hooks

**Naming Convention**
Hooks should use a **kebab-case** naming convention

```
example-hook-name.tsx
```

**Hook TSX**
```
// Packages & Modules
import React, {
  useEffect,
  useState
} from 'react';

// Defintiions
import type {
  IWindowSize,
  TProps
} from './hook-name.defintions.ts';
import type { TSize } from './../path/to/file';

const useWindowSize = ( props: TProps ): IWindowSize => {
  // STATES
  const [
    _windowSize,
    _setWindowSize
  ] = useState< TSize >({
    width: 0,
    height: 0
  });

  // METHODS
  /**
  * Some JS Doc here explainig the function usage.
  * 
  * @returns  { void } - Explain what is returned.
  */
  const handleResize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    if ( typeof window !== undefined ) {
      window.addEventListener( 'resize', handleResize );

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    return () => {
      if ( typeof window !== undefined ) {
        window.removeEventListener( 'resize', handleResize );
      }
    }
  }, []);

  // VALUE
  return windowSize;
}

export default useWindowSize;
```

**Rules**
Hooks follow the same rules as components


----------


## Providers

**Naming Convention**
Hooks should use a **kebab-case** naming convention

```
example-provider-name.tsx
```

**Provider TSX**
```
// Packages & Modules
import React, {
  useEffect,
  useState
} from 'react';

// Definitions
import type { TThemeContext } from './provider-name.defintions.ts';

// Context
export const ThemeContext = React.createContext< TThemeContext | null >( null );

// Provider
const ThemeProvider = ( props: React.PropsWithChildren ) => {
  // STATES
  const [
    _theme,
    _setTheme
  ] = useState< TThemeContext[ 'theme' ] >( 'light' );

  // METHODS
  /**
  * Some JS Doc here explainig the function usage.
  * 
  * @returns  { void } - Explain what is returned.
  */
  const updateThemeValue = (): void => {
    // Update the current theme in a variable
    let themeValue: TThemeContext[ 'theme' ] = theme === 'light' ? 'dark' : 'light';

    // Update theme state
    setTheme( themeValue );
  }
    
  // Value
  const value: TThemeContext = {
    theme: theme
  };

  // HTML
  return (
    <ThemeContext.Provider value={ value }>
      { props.children }
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
```
    
**Rules**
Providers follow the same rules as components.


----------


## Public

**favicon.ico**
The favicon should always be in **.ico** format. This should be the only file added to the public folder


----------


## Pages

**Naming Convention**
Hooks should use a **kebab-case** naming convention

```
example-page-name.tsx
```

**Page TSX ( NextJS ISR Example )**
```
TODO: This needs to updated when pages are created.
``` 

**Page TSX ( NextJS SSR Example )**
```
TODO: This needs to updated when pages are created.
```
    
**Rules**
- Rendering Method
  - ISR should be the default rendering method.
  - In case ISR cannot be used, SSR should be used
- General
  - Pages should contain only one child component, this component should be a “Page” type component
  - All data fetching functions must be written in an external js / ts file, no data fetching functions should be hardcoded within a page


----------


## Utils

**Helpers (functions)**
Helper functions are functions that are used within 2 or more components and or pages. Helper functions are global and not specific to one element.

**Helpers (storybook)**
Storybook helpers are helpers that helps with writing storybook stories. These can be variables or functions.


----------


## Styles

**CSS properties order**
```
.style {
  // Scoped Variables
  $descriptive-variable-name: any;

  // Mixins
  @include descriptive-mixin-name( mixinProp );
  @include descriptive-mixin-name;

  // Contents
  content: ;

  // Sizing
  width: ;
  max-width: ;
  height: ;
  max-height: ;
  object-size: ;
  
  // Layout
  display: ;
  gap: ;
  grid-auto-flow: ;
  grid-template: ;
  grid-template-areas: ;
  grid-template-rows: ;
  grid-template-columns: ;
  grid-row: ;
  grid-column: ;
  row-gap: ;
  column-gap: ;
  flex-direction: ;
  flex: ;
  align-items: ;
  justify-content: ;

  // Position
  position: ;
  top: ;
  bottom: ;
  right: ;
  left: ;
  z-index: ;

  // Spacing
  margin: ;
  margin-top: ;
  margin-bottom: ;
  margin-right: ;
  margin-left: ;
  padding: ;
  padding-top: ;
  padding-bottom: ;
  padding-right: ;
  padding-left: ;

  // Stylization
  background: ;
  background-color: ;
  background-image: ;
  background-size: ;
  background-position: ;
  border: ;
  border-width: ;
  border-color: ;
  border-top: ;
  border-bottom: ;
  border-right: ;
  border-left: ;
  opacity: ;

  // Text
  line-height: ;
  letter-spacing: ;
  text-align: ;
  text-decoration: ;
  text-transform: ;
  text-overflow: ;
  text-shadow: ;
  white-space: ;

  // Font
  font-family: ;
  font-size: ;
  font-weight: ;
  font-variation-settings: ;

  // Transform
  transform: ;
  transform-origin: ;
  transform-style: ;

  // Transition
  transition: ;
  transition-property: ;
  transition-duration: ;
  transition-timing-functions: ;
  transition-delay: ;
  transition-iteration-count: ;

  // Animation
  animation: ;
  transition-name: ;
  transition-duration: ;
  transition-timing-functions: ;
  transition-delay: ;

  // Cursor
  cursor: ;
  pointer-events: ;

  // Misc
  backface-visibility: ;
  perspective: ;
}
```

**Rules**
Styles are split into a few types, Shared, Theming, UI, Utils, Component. These types each focus on styling specific parts of the system.

**Shared**
Shared styles manages global, shared styles in control of imports and formatting.

**Theming**
Theming styles controls styling for css properties that updates the look of the system, but NOT the layout of system components.

**UI**
UI styles controls the the feeling of the system, animations, transitions, sizes etc. These do NOT manage layouts of system components.

**Utils**
Util styles includes reusable mixins and functions that can be used throughout the styling of the system.

**Component**
Component styles are NEVER global. These styles manages the layout of a component and applies specific global styles on a component.


----------


## Animations

**CSS / SCSS**
The responsibility for animations within css should be shared between variables and mixins. Properties should be stored within variables, while transitions should be stored within mixins.

Example:
```
// _animations_.scss
$bounce: bounce;
@keyframes #{ $bounce } {
	0%, 20%, 50%, 80%, 100% {
		@include mixin.transform( translateY( 0 ) );
	}
	40% {
		@include mixin.transform( translateY( size.rem( -12 ) ) );
	}
	60% {
		@include mixin.transform( translateY( size.rem( -10 ) ) );
	}
}

// _mixins.scss
@mixin animation( $animation ) {
  animation: $animation;
  -webkit-animation: $animation;
  -moz-animation: $animation;
  -o-animation: $animation;
}

// { COMPONENT NAME }.module.scss
@include mixin.animation( anim.$bounce 2s infinite) ;
```

Rules:
1. Timings less than 1s should be written in milliseconds, timings 1s and up should be written in seconds.
2. All transition values, e.g. timing and duration, should be split into separate variables stored within the global variables file


**Framer Motion**
The responsibility for Framer Motion animations should be shared between the global animations helper file and the **component.tsx** file.

Example:
```
// animations.ts
const springAnimation: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30
};

// component.tsx
<motion.div
  className={ styles[ baseClass ] }
  animate={ animation }
  transition={ springAnimation }
></motion.div>
```
    

**Lottie React**
The responsibility for Lottie animations should be shared between an **lottie json** file and the **component.tsx** file.

Example:
```
// component.tsx

// Packages & Modules
import styles from './Button.module.scss'
import React, { useState } from 'react';
import Lottie from 'react-lottie';

// Assets
import lottFile from './../path/to/lottie';

// Definitions
import type { TProps } from './../path/to/props';

const Component = ( props: TProps ): JSX.Element => {
// PROPS
const {} = props;

  // VARIABLES
  const baseClass: string = 'block';
  const lottieSettings: { LOTTIE DEFINITION } = {
    loop: true,
    autoplay: true,
    animationData: spherePulse360
  };

  // STATES
  const [
    _animate,
    _setAnimate
  ] = useState< boolean >( false );

  return (
    <div className={ styles[ baseClass ] } >
      <Lottie options={ lottieSettings } />
    </div>
  );
}

export default Component;
```

Rules
- Lottie settings should be defined before the return statement


----------


## Source Control

**Branching**
Naming conventions:
```
type/owner/{ TASK NAME }-{ DESCRIPTION }
e.g.
feature/lean/abc-123-website-header
```

Maintenance:
Branches should be cleaned once per week by the developer who created the branch, both locally and remotely


**Commits**
Categories:
- chore
- bugfix
- feature

Commit messages:
```
- { CATEGORY }: Short description of changes
```


**Pull Requests**
Size:
Maximum of 250 lines of change

Titles:
These should be explanatory, should describe the changes in a condensed message

```
- { CATEGORY }: Short description of changes
```
