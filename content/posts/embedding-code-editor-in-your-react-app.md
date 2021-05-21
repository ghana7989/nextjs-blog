---
title: 'Embedding Code Editor In Your React App'
date: '2021-4-23'
image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--8sHoAZH---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rui6c0cawneqd1a9g15u.jpg'
excerpt: Ever wanted to insert a beautiful code editor in your react app? Answer is probably YES. So, let's get started.
isFeatured: true
---

# Welcome

Ever wanted to insert a beautiful code editor in your react app? Answer is probably **yes**. So, let's get started.

## Step 1 - Installing dependencies

`npm i react-ace`
or if you are using yarn
`yarn add react-ace`

## Step 2 - Creating a Component

Now, we should create a react component that renders the code editor. Here, I am going to use Functional Components (**recommended**)

```js
import AceEditor from 'react-ace'

function App() {
 return <AceEditor />
}

export default App
```

And there you get a basic editor![1_v9QrT22deOepiZrTRSueKw](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbmot9v9g4dvei7h3rzy.gif)

## Step 3 - Styling And Configuring it

For now I am assuming you need this editor for editing JavaScript code.

```js
import {useState} from 'react'
import AceEditor from 'react-ace'

// import mode-<language> , this imports the style and colors for the selected language.
import 'ace-builds/src-noconflict/mode-javascript'
// there are many themes to import, I liked monokai.
import 'ace-builds/src-noconflict/theme-monokai'
// this is an optional import just improved the interaction.
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'

function App() {
 const [code, setCode] = useState(`function hello() {
  console.log("Hello World!");
}`)

 return (
  <AceEditor
   style={{
    height: '100vh',
    width: '100%',
   }}
   placeholder='Start Coding'
   mode='javascript'
   theme='monokai'
   name='basic-code-editor'
   onChange={currentCode => setCode(currentCode)}
   fontSize={18}
   showPrintMargin={true}
   showGutter={true}
   highlightActiveLine={true}
   value={code}
   setOptions={{
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
    showLineNumbers: true,
    tabSize: 4,
   }}
  />
 )
}

export default App
```

You can explore further here -> [React Ace Docs](https://github.com/securingsincity/react-ace/tree/master#react-ace)

## Conclusion

This is a basic setup, for further modifications you can check the above provided link, you can generate the code interactively [here](https://securingsincity.github.io/react-ace/)

Peace ✌
