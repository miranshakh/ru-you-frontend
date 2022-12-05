import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import cn from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'
import { COLORS } from '../utils/colors'

export default function BroadCrumb() {
    const { pathname } = useLocation()

    const menu = [
        { name: 'Форма', id: 1, link: '/' },
        { name: 'Палитра', id: 2, link: '/palette' },
    ]

    return (
        <div className="columns">
            {menu.map((item) => (
                <NavLink
                    to={item.link}
                    className={cn(
                        'column is-1',
                        css(styles.title),
                        { [css(styles.active)]: pathname.endsWith(item.link) },
                    )}
                    key={item.id}>
                    {item.name}
                </NavLink>
            ))}
        </div>
    )
}

const styles = StyleSheet.create({
    title: {
        color: COLORS.white,
    },
    active: {
        textDecoration: 'underline',
    },
})
