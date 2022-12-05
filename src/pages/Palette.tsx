import React, { useState } from 'react'
import { css, StyleSheet } from 'aphrodite'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { SketchPicker } from 'react-color'
import BroadCrumb from '../components/BroadCrumb'
import Button from '../components/Common/Button'
import { COLORS } from '../utils/colors'
import { getColors } from '../state/colors/selectors'
import { createColor } from '../state/colors/actions'
import ColorDetail from '../components/ColorDetail'

export default function Palette() {
    const { colors } = useSelector(getColors)
    const [color, setColor] = useState('')
    const [updateColor, setUpdateColor] = useState('')
    const [showColorPicker, setShowColorPicker] = useState(false)

    const dispatch = useDispatch()

    const onSaveColor = () => {
        dispatch(createColor(color, updateColor))
        setShowColorPicker(!showColorPicker)
    }

    return (
        <div className={css(styles.container)}>
            <div>
                <BroadCrumb />

                <div className={css(styles.section)}>
                    <div className={cn('columns is-variable is-multiline', css(styles.columnOption))}>
                        {colors.map((item) => (
                            <ColorDetail
                                onClick={(i) => {
                                    setShowColorPicker(true)
                                    setColor(i)
                                    setUpdateColor(i)
                                }}
                                key={item}
                                item={item} />
                        ))}
                    </div>

                    {showColorPicker ? (
                        <span onMouseLeave={() => setShowColorPicker(false)}>
                            <SketchPicker
                                color={color}
                                onChangeComplete={(c) => setColor(c.hex)} />

                            <Button
                                onClick={onSaveColor}
                                text="Добавить цвет"
                                className={cn('is-fullwidth', css(styles.saveBtn))} />
                        </span>
                    ) : (
                        <Button
                            onClick={() => setShowColorPicker(true)}
                            text="Показать цветы"
                            className={cn('is-fullwidth', css(styles.saveBtn))} />
                    )}
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: '40px 60px',
    },
    saveBtn: {
        backgroundColor: COLORS.button,
        borderWidth: 0,
        color: COLORS.white,
        marginTop: 10,
    },
    section: {
        maxWidth: '40%',
    },
    columnOption: {
        marginLeft: '-0.45rem',
    },
})
