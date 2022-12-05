import React, { useRef, useState } from 'react'
import { Form, Formik } from 'formik'
import { css, StyleSheet } from 'aphrodite'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from 'lodash'
import Input from '../components/Common/Input'
import { COLORS } from '../utils/colors'
import NoImage from '../components/NoImage'
import Button from '../components/Common/Button'
import BroadCrumb from '../components/BroadCrumb'
import { createUser } from '../state/user/actions'
import { IUser } from '../types/data'
import { required } from '../validations/validators'
import { getUser } from '../state/user/selectors'

export default function FormScreen() {
    const [image, setImage] = useState('')
    const [response, setResponse] = useState({})
    let imageInput: any = useRef({})
    const dispatch = useDispatch()
    const { loading } = useSelector(getUser)
    console.log(loading)

    const onSubmit = (data: IUser) => {
        dispatch(createUser({
            ...data,
            image,
        }, (res) => (
            setResponse(res)
        )))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }

        const file = e.target.files[0]
        // @ts-ignore
        setImage(file)
    }

    return (
        <div className={css(styles.container)}>
            <div>
                <BroadCrumb />
            </div>

            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    patronymic: '',
                }} onSubmit={onSubmit}>
                <Form>
                    <div className={css(styles.section)}>
                        <Input
                            label="Имя"
                            className={css(styles.input)}
                            placeholder="Лев"
                            validate={required}
                            name="name" />

                        <Input
                            label="Фамилия"
                            className={css(styles.input)}
                            placeholder="Лещенко"
                            validate={required}
                            name="surname" />

                        <Input
                            label="Отчество"
                            className={css(styles.input)}
                            placeholder="Валерьянович"
                            validate={required}
                            name="patronymic" />

                        <label>Фото</label>

                        <div
                            className={cn('pointer', css(styles.imageContainer))}
                            onClick={() => imageInput.click()}>
                            {image ? (
                                <img
                                    style={{
                                        width: 120,
                                        height: 90,
                                        borderRadius: 10,
                                    }}
                                    // @ts-ignore
                                    src={URL.createObjectURL(image)} />
                            ) : (
                                <NoImage />
                            )}
                        </div>

                        <input
                            onChange={(e) => handleFileChange(e)}
                            accept="image/x-png,image/jpeg"
                            ref={(input) => {
                                imageInput = input
                            }}
                            className={css(styles.photoInput)}
                            name="image"
                            type="file" />

                        <Button
                            type="submit"
                            loading={loading}
                            text="Сохранить"
                            className={cn('is-fullwidth', css(styles.saveBtn))}
                        />

                        <div className={css(styles.responseSection)}>
                            <label>Response</label>
                            <div className={css(styles.responseContainer)}>
                                <span className="has-text-white">
                                    {!isEmpty(response) ? JSON.stringify(response) : ''}
                                </span>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: '40px 60px',
    },
    input: {
        backgroundColor: COLORS.inputColor,
        borderRadius: 10,
        color: 'white',
        borderWidth: 0,
        '::placeholder': {
            color: COLORS.labelColor,
        },
    },
    section: {
        maxWidth: '40%',
    },
    saveBtn: {
        backgroundColor: COLORS.button,
        borderWidth: 0,
        color: COLORS.white,
    },
    responseContainer: {
        borderRadius: 10,
        width: '100%',
        height: 90,
        backgroundColor: COLORS.inputColor,
    },
    responseSection: {
        marginTop: 50,
    },
    photoInput: {
        display: 'none',
    },
    imageContainer: {
        marginBottom: 40,
    },
})
