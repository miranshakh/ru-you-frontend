// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from 'yup'

const requiredText = 'This field is required'

export const validationLogin = yup.object().shape({
    username: yup.string().required(requiredText),
    password: yup.string().required(requiredText),
})

export const validationName = yup.object().shape({
    title: yup.string().required(requiredText),
})

export const validationUser = yup.object().shape({
    firstName: yup.string().required(requiredText),
    lastName: yup.string().required(requiredText),
    username: yup.string().required(requiredText),
})

export const validationTemplateGroupScheme = yup.object().shape({
    title: yup.string().required(requiredText),
})

export const validationWorkflowForm = yup.object().shape({
    name: yup.string().required(requiredText),
    type: yup.string().required(requiredText),
})
