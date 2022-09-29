import React from 'react'
import ReactDom from 'react-dom/client'
import 'firebase'
import App from './App'
//import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
const root = ReactDom.createRoot(rootElement);

//<Saludo/> --> SCT (Self Clousing Tags)
root.render(
    <><App /></>

);