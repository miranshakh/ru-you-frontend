import { AnyAction } from 'redux'
import { PersistConfig, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { UserState } from './types'
import { FETCH_USER_ERROR, FETCH_USER_START, CREATE_USER_SUCCESS } from './consts'

const initialState: UserState = {
    loading: false,
}

const reducer = (state = initialState, action: AnyAction): UserState => {
    const { payload } = action

    switch (action.type) {
    case FETCH_USER_START:
        return { ...state, loading: true }
    case CREATE_USER_SUCCESS:
        return {
            ...state,
            user: payload,
            loading: false,
        }
    case FETCH_USER_ERROR:
        return { ...state, loading: false }
    default:
        return state
    }
}

const persistConfig: PersistConfig<UserState> = {
    key: 'user',
    storage,
    whitelist: ['user'],
}

export default persistReducer(persistConfig, reducer)
