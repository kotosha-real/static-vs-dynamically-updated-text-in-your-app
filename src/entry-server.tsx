import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { IntlProvider } from 'react-intl'
import App from './App'
import messages from '../static/messages.json'

export function render() {
    const html = ReactDOMServer.renderToString(
        <React.StrictMode>
            <IntlProvider locale="en-us" messages={messages}>
                <App />
            </IntlProvider>
        </React.StrictMode>,
    )
    return { html }
}
