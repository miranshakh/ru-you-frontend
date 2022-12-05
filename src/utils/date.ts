import moment from 'moment'

export const DATE_FORMAT = 'YYYY-MM-DD'
export const DATETIME_FORMAT = 'DD.MM.YYYY, HH:mm'
export const TIME_FORMAT = 'HH:mm:ss'

export const DAYS = [
    { key: 'monday', title: 'Понедельник', shortTitle: 'Пн' },
    { key: 'tuesday', title: 'Вторник', shortTitle: 'Вт' },
    { key: 'wednesday', title: 'Среда', shortTitle: 'Ср' },
    { key: 'thursday', title: 'Четверг', shortTitle: 'Чт' },
    { key: 'friday', title: 'Пятница', shortTitle: 'Пт' },
    { key: 'saturday', title: 'Суббота', shortTitle: 'Сб' },
    { key: 'sunday', title: 'Воскресенье', shortTitle: 'Вс' },
]

export function getDateTime(date = new Date()) {
    return moment(date).format(DATETIME_FORMAT)
}

export function convertSecondsToTime(seconds: number | null) {
    if (!seconds) {
        return moment.utc(1000).format(TIME_FORMAT)
    }
    return moment.utc(seconds * 1000).format(TIME_FORMAT)
}
