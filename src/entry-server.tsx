import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { IntlProvider } from 'react-intl'
import App from './App'

export function render(_url: string, _ssrManifest: unknown, appData: { messages: Record<string, any> }) {
    const head = `<script>
    window.__data__ = window.__data__ || {}
    window.__data__.messages = ${JSON.stringify(appData.messages)}
</script>`

    const html = ReactDOMServer.renderToString(
        <React.StrictMode>
            <IntlProvider locale="en-us" messages={appData.messages}>
                <App />
            </IntlProvider>
        </React.StrictMode>,
    )
    return { head, html }
}
