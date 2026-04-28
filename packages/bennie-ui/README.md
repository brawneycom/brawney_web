# Bennie-ui

**Bennie-UI is still in active development**

Bennie-UI is a library built with the idea of having a react components with properties that map to tailwind CSS classes.
We wanted to be able to create react components with tailwind and helping to improve readibility/usability/extensibility, and with Bennie-UI you can abstract your styling classes from your react code.

Example.

```
<div className="text-sm text-red-400 px-2 py-4 m-2 md:m-4 bg-blue-300 dark:text-orange-200 dark:bg-cyan-200">Hello Bennie-UI</div>
```

Same Example using Bennie-UI

```
  // MyComponent.styles.ts
  import { ComponentProperties } from "@bennie-ui/types";

  export const Styles: ComponentProperties = {
      size: 'sm',
      padding: { x: '2', y: '4' },
      margin: { all: '2' },
      colors: {
        text: { color: 'red' },
        background: { color: 'blue' }
      },
      dark: {
        colors: {
          text: { color: 'orange', weight: '200' },
          background: { color: 'blue', weight: '200' }
        }
      }
    }


  import {Styles} from './MyComponent.styles'

  const MyComponent = () => {
        return <Section {...Styles}>
      Hello Bennie-UI
    </Section>
  }
```

Another Real Example

![image](docs/assets/MainMenu%20Example.png)

To review the available components/attributes [Visit our storybook](https://storybook.bennie-ui.com/)

## Benefits

The main advantage is that we are using the same wrappers, properties and 'builders', to extend this functionality to all our components, so once you are familiar with the properties, you can programatically set/rehuse responsive/theming to all our components and create your own.

## Development

To Install dependencies

```bash
bun i
```

To run:

```bash
bun dev
```

## How to add Bennie-ui to your project.

If you have an existing bun project you can add a gitsubmodule

```
  git submodule add https://github.com/bennie-ui/bennie-ui.git
```

and add the modules you wish to add to your project workspaces

```
 "workspaces": [
    "packages/bennie-ui/libraries/*",
    "packages/bennie-ui/components/primitives/*",
    "packages/bennie-ui/components/composites/*",
    "packages/bennie-ui/components/composites/forms/*",
    "packages/bennie-ui/components/composites/feedback/*"
  ],
```

and run `bun i` link the bennie-ui packages to your project node_modules
