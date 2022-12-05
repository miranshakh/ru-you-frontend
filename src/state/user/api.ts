import apiClient from '../instance'
import { IUser } from '../../types/data'
import { FORM_URL } from '../../urls'

/**
 * Get user
 */
export const createUserApi = async (data: IUser): Promise<(IUser) | null> => {
    try {
        const formData = new FormData()

        if (data.image) {
            formData.append('image', data.image)
        }
        formData.append('id', '1')
        formData.append('action', 'send_data')

        formData.append('contact[name]', data.name)
        formData.append('contact[surname]', data.surname)
        formData.append('contact[patronymic]', data.patronymic)

        const { data: response } = await apiClient.post<IUser>(
            FORM_URL,
            formData,
        )

        return response
    } catch (e) {
        throw e
    }
}
