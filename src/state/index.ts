import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import thunk, { ThunkAction } from 'redux-thunk'
import colorReducer from './colors/reducer'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
    colors: colorReducer,
    user: userReducer,
})

const middlewares = [thunk]

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middlewares),
    ),
)

const persistor = persistStore(store)

export { persistor, store }

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>
