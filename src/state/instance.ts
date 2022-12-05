import axios, { AxiosRequestConfig } from 'axios'
import humps from 'humps'

const baseUrl = 'https://test-job.pixli.app/'

const apiClient = axios.create({
    baseURL: `${baseUrl}`,
    // @ts-ignore
    transformResponse: [...axios.defaults.transformResponse, humps.camelizeKeys],
    // @ts-ignore
    transformRequest: [decamelize, ...axios.defaults.transformRequest],
})

apiClient.interceptors.request.use((config) => ({
    ...config,
    params: humps.decamelizeKeys(config.params),
}))

apiClient.interceptors.request.use((req: AxiosRequestConfig) => req)

// eslint-disable-next-line consistent-return
function decamelize(
    object: any,
) {
    if (!(object && !(object instanceof File))) {
        return object
    }

    if (object instanceof FormData) {
        return object
    }

    if (typeof object === 'object') {
        return humps.decamelizeKeys(object)
    }
}

export default apiClient
