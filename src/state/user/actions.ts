import { AxiosError } from 'axios'
import { Dispatch } from 'redux'

import { CREATE_USER_SUCCESS, FETCH_USER_ERROR, FETCH_USER_START } from './consts'
import { createUserApi } from './api'
import { IUser } from '../../types/data'

const fetchUserStart = () => ({
    type: FETCH_USER_START,
})

export const createUserSuccess = (user: IUser) => ({
    type: CREATE_USER_SUCCESS,
    payload: user,
})

const fetchEnd = () => ({
    type: FETCH_USER_ERROR,
})

/**
 * Fetch user
 * @returns
 */
export const createUser = (
    data: IUser,
    onSuccess?: (response: IUser) => void,
    setError?: (value: string) => void,
) => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchUserStart())
        const response = await createUserApi(data)

        if (response) {
            createUserSuccess(response)
            if (onSuccess) {
                onSuccess(response)
            }
        }
        // @ts-ignore
    } catch (e: AxiosError) {
        console.log("User haven't been loaded!", e)
        dispatch(fetchEnd())
        if (setError) {
            setError(e.response.data)
        }
    } finally {
        dispatch(fetchEnd())
    }
}
