function empty(value: string) {
    return value === '' || value === null || value === undefined || value.length === 0
}

export function required(value: string) {
    if (empty(value)) {
        return 'Это обязательное поле'
    }
    return ''
}
