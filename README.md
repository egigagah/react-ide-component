# React IDE Component

React IDE Component is lighweight IDE component for react that has been included with typewritting effect for animation.

[![npm type definitions](https://camo.githubusercontent.com/a659694184d9b46a3b77a8eae552bfaecde74562a1d4eae97068abce2870996b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f74797065732f72656163742d67736170)](https://www.npmjs.com/package/devices-medias-component)

## Dependecies

This components use:
- [GSAP](https://www.npmjs.com/package/gsap) for animation that have impressive performance
- [highlight.js](https://www.npmjs.com/package/highlight.js) for rich syntax highlighter and detect the language
- [html-react-parser](https://www.npmjs.com/package/html-react-parser) for parsing HTML into React elements

# Installation

If you're using `npm`, in the command prompt run:

```sh
npm install devices-medias-component --save
```

If you're using `yarn`, run:

```sh
yarn add devices-medias-component
```

# Usage

Import the module
```sh
import IdeComponent from 'devices-medias-component'
```

Prepare datas to send it as props, this example use [React Icons](https://www.npmjs.com/package/react-icons) as icon. you can use your own svg / image icon here
```sh
const ideData = [
  {
    id: 'ts',
    icon: <FaReact size='100%' />
    filename: 'index.tsx',
    content: 'console.log("test")',
    lang: 'typescript'
  },
]
```
## Datas Type
type for datas object
| Property        | Type                        | Required           | Default           | Description                                              |
| :-------------- | :-------------------------- | :---------------- | :---------------- | :------------------------------------------------------- |
| `id`         | `string`                    | true              | `null`              | tab's ids that you can use for your own needs                       |
| `icon`         | `JSX.Element`                    | true              | `null`              | you can use your own svg, png as icon logo that representation tile extention / code language                       |
| `filename`         | `string`                    | true              | `null`              | filename and extention file that will shown as tab's label  `example: 'index.js'`                    |
| `content`         | `string`                    | true              | `null`              | it will be use as code text, enter/break line inside string didnt not work here. if you want to break line code content use `<br>` instead.                       |
| `lang`         | `string`                    | true              | `null`              | language name. example `javascript, php, java, python, etc` you can serach list language available from [highlight.js languages list](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md)                       |

Then insert component and datas like this
```sh
<IdeComponent datas={ideData} />
```

Might be your full code look like this
```sh
import React from "react";
import IdeComponent from 'devices-medias-component'
import { FaReact } from 'react-icons/fa';

const ideData = [
  {
    id: 'ts',
    icon: <FaReact size='100%' />
    filename: 'index.tsx',
    content: 'console.log("test")',
    lang: 'typescript'
  },
  {
    id: 'js',
    icon: <FaReact size='100%' />
    filename: 'index.jsx',
    content: 'console.log("test")',
    lang: 'javascript'
  },
]


function App() {
  return (
    <div>
      <IdeComponent datas={ideData} />
    </div>
  )
}
```

# Props
| Property        | Type                        | Required           | Default           | Description                                              |
| :-------------- | :-------------------------- | :---------------- | :---------------- | :------------------------------------------------------- |
| `datas`         | `TabDataType[]`                    | true              | `null`              | Array of object that representating tab ide, icon, filename, code, and language                       |
