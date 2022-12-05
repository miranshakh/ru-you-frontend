import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './state'
import Palette from './pages/Palette'
import Form from './pages/Form'

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Switch>
                        <Route path="/palette" component={Palette} exact />
                        <Route path="/" component={Form} exact />
                    </Switch>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    )
}
