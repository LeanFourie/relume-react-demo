# Relume React Demo
Welcome to the Relume React Demo! This repository serves as a central hub for managing multiple packages related to the Relume React Demo project. It leverages the NX framework to facilitate efficient development, testing, and deployment workflows.

### Table of Contents
1. Introduction
2. Folder Structure
3. Packages
4. Core Technologies
5. Documentation - Incomplete
6. Getting Started
7. Testing - Not yet done
8. Deployment - Not yet done

### Introduction
Relume React Demo serves as a demo project to showcase how Relume can be used within a react environment. It demonstrates a basic implementation of how these components can be built.

### Folder Structure
The folder structure of the Monorepo is organized as follows:

```
relume-demo/
├── libs/
    ├── components/
    ├── hooks/
    ├── providers/
    ├── styles/
    ├── utils/
├── .gitignore
├── README.md
└── ...
```

### Packages
- **components/**: A React component library housing the core components.
- **hooks/**: A React hooks library housing reusable global hooks.
- **providers/**: A React context provider library housing reusable global contect providers.
- **styles/**: A SASS style library housing the application styles.
- **utils/**: A utility library housing global reusable functions, variables and type declarations.

### Core Technologies
- [React](https://react.dev/)
- [Storybook](https://storybook.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [NX](https://nx.dev/)
- [Vite](https://vitejs.dev/)

### Documentation
Documentation for the project can be found here:
- The **code-standards.md** file under the root of the project
- Inside each **.ts** and **.scss** file

### Getting Started
Step 1: Install the dependencies
```
npm install
```

Step 2: Launch Storybook
```
nx serve components:storybook
```

### Testing
No testing has been set up for this project at this point in time.

### Deployment
No deployment processes have been set up for this project at this point in time.
