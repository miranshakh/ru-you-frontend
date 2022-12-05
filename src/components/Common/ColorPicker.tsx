import { Field } from 'formik'
import React, { useState } from 'react'
import cn from 'classnames'
import Button from './Button'
import ValidationErrorMessage from './ValidationErrorMessage'

const colors = [
    { color: '#00d1b2' },
    { color: '#3273dc' },
    { color: '#48c774' },
    { color: '#ffdd57' },
    { color: '#f14668' },
]

interface IProps {
    label: string
    validate?: {}
    name: string
}

export default function ColorPicker({ label, validate, name }: IProps) {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="field">
            <div className="control">
                {label ? <label htmlFor={name}>{label}</label> : null}&nbsp;
            </div>

            <Field name={name} validate={validate}>
                {({ form, field }: any) => (
                    <div className={cn('dropdown', { 'is-active': showDropdown })}>
                        <div className="dropdown-triggger">
                            <Button
                                text="Выберите цвет"
                                icon="ion-md-arrow-dropdown"
                                className="button"
                                // @ts-ignore
                                style={{ background: field.value, color: 'white' }}
                                onClick={() => setShowDropdown(!showDropdown)} />
                        </div>

                        <div className="dropdown-menu">
                            {colors.map((item) => (
                                <Button
                                    key={item.color}
                                    onClick={() => {
                                        form.setFieldValue(name, item.color)
                                        setShowDropdown(!showDropdown)
                                    }}
                                    // @ts-ignore
                                    style={{ background: item.color }}
                                    className="button" />
                            ))}
                        </div>
                    </div>
                )}
            </Field>

            <ValidationErrorMessage name={name} />
        </div>
    )
}
