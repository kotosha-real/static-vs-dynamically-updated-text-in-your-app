import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { IntlProvider } from 'react-intl'
import App from './App'
import messages from '../static/messages.json'

ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <React.StrictMode>
        <IntlProvider locale="en-us" messages={messages}>
            <App />
        </IntlProvider>
    </React.StrictMode>,
)
