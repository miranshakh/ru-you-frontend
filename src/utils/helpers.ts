import humps from 'humps'

export const getFormData = (data: object) => {
    const formData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => formData.append(humps.decamelize(key), item))
            return
        }
        formData.append(humps.decamelize(key), value)
    })
    return formData
}
