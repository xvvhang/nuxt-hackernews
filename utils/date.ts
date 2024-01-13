import day from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

day.extend(relativeTime)

export const format = (date: number, format: string | undefined) => day.unix(date).format(format || 'MMM D, YYYY')
export const fromNow = (date: number)  => day.unix(date).fromNow()
