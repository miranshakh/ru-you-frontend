import { AnyAction } from 'redux'
import { PersistConfig, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ColorState } from './types'
import { POST_COLORS_SUCCESS, REMOVE_COLORS_SUCCESS } from './consts'

const initialState: ColorState = {
    colors: [],
    loading: false,
    count: 0,
    next: null,
    previous: null,
}

const reducer = (state = initialState, action: AnyAction): ColorState => {
    const { payload } = action

    switch (action.type) {
    case POST_COLORS_SUCCESS:
        const newData = state.colors
        const index = state.colors.findIndex((item) => item === payload.updateColor)
        if (index !== -1) {
            newData[index] = payload.color
            return {
                ...state,
                colors: [...newData],
                loading: false,
            }
        }

        return {
            ...state,
            colors: [payload.color, ...newData],
            loading: false,
        }
    case REMOVE_COLORS_SUCCESS:
        return {
            ...state,
            colors: state.colors.filter((item) => item !== payload),
            loading: false,
        }
    default:
        return state
    }
}

const persistConfig: PersistConfig<ColorState> = {
    key: 'colors',
    storage,
    whitelist: ['colors'],
}

export default persistReducer(persistConfig, reducer)
