import { AxiosError } from 'axios'
import { Dispatch } from 'redux'
import { POST_COLORS_SUCCESS, REMOVE_COLORS_SUCCESS } from './consts'

export const fetchColorSuccess = (color: string, updateColor?: string) => ({
    type: POST_COLORS_SUCCESS,
    payload: { color, updateColor },
})

export const removeColorSuccess = (color: string) => ({
    type: REMOVE_COLORS_SUCCESS,
    payload: color,
})

export const createColor = (color: string, updateColor?: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchColorSuccess(color, updateColor))
        // @ts-ignore
    } catch (e: AxiosError) {
        console.log('templates haven\'t been loaded!', e)
    }
}

export const removeColor = (item: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(removeColorSuccess(item))
        // @ts-ignore
    } catch (e: AxiosError) {
        console.log('templates haven\'t been loaded!', e)
    }
}
