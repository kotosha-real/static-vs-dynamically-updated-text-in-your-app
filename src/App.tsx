import { useState } from 'react'
import { useIntl } from 'react-intl'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const intl = useIntl()

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>{intl.formatMessage({ id: 'heading' })}</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    {intl.formatMessage({ id: 'count' }, { count })}
                </button>
                <p>{intl.formatMessage({ id: 'help' }, { src: <code>src/App.tsx</code> })}</p>
            </div>
            <p className="read-the-docs">{intl.formatMessage({ id: 'docs' })}</p>
        </>
    )
}

export default App
