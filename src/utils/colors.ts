export const COLORS = {
    black: '#000',
    white: '#fff',
    line: '#232b3c',
    main: '#111827',
    title: '#6a7280',
    active: '#11b981',
    default: '#d1d5da',
    backgroundTitle: '#242a38',
    description: '#78859a',
    bell: '#6a7280',
    button: '#007AFF',
    table: '#ebecee',
    tableText: '#3e4857',
    background: '#fbfbfb',
    red: '#d32f2f',
    labelColor: 'rgba(235, 235, 245, 0.6)',
    inputColor: 'rgba(118, 118, 128, 0.24)',
}

export const chartColors = [
    '#f44336',
    '#8BC34A',
    '#E91E63',
    '#CDDC39',
    '#9C27B0',
    '#FFEB3B',
    '#673AB7',
    '#FFC107',
    '#3F51B5',
    '#FF9800',
    '#2196F3',
    '#FF5722',
    '#03A9F4',
    '#795548',
    '#00BCD4',
    '#9E9E9E',
    '#009688',
    '#607D8B',
    '#4CAF50',

    '#ef5350',
    '#9CCC65',
    '#EC407A',
    '#D4E157',
    '#AB47BC',
    '#FFEE58',
    '#7E57C2',
    '#FFCA28',
    '#5C6BC0',
    '#FFA726',
    '#42A5F5',
    '#FF7043',
    '#29B6F6',
    '#8D6E63',
    '#26C6DA',
    '#BDBDBD',
    '#26A69A',
    '#78909C',
    '#66BB6A',
]

export function getRandomColor() {
    const letters = '0123456789ABCDEF'.split('')
    let color = '#'

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
