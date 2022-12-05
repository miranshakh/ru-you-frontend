import React from 'react'
import cn from 'classnames'
import { css, StyleSheet } from 'aphrodite'
import { useDispatch } from 'react-redux'
import { COLORS } from '../utils/colors'
import Close from './Close'
import { removeColor } from '../state/colors/actions'

interface IProps {
    item: string
    onClick: (color: string) => void
}

export default function ColorDetail({ item, onClick }: IProps) {
    const dispatch = useDispatch()

    const onRemoveColor = () => {
        dispatch(removeColor(item))
    }

    return (
        <div>
            <div
                key={item}
                onClick={() => onClick(item)}
                className={cn('column is-1 hoverContainer', css(styles.colorContainer))}
                style={{ backgroundColor: item }}>
                <div className="hoverClose" onClick={(e) => {
                    e.stopPropagation()
                    onRemoveColor()
                }}>
                    <Close />
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    colorContainer: {
        width: 54,
        height: 54,
        borderRadius: 5,
        margin: 8,
    },
    saveBtn: {
        backgroundColor: COLORS.button,
        borderWidth: 0,
        color: COLORS.white,
        marginTop: 10,
    },
})
