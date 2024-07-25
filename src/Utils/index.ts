export function getDateString(date : Date) {
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDay().toString().padStart(2, '0')}`
}