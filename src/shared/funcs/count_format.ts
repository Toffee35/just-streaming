export default function countFormat(numb: number): string {
    if (numb < 1000) {
        return `${numb}`
    } else if (numb < 1000000) {
        return `${Math.floor(numb / 1000)}k`
    } else if (numb < 1000000000) {
        return `${Math.floor(numb / 1000000)}m`
    } else {
        return `${Math.floor(numb / 1000000000)}b`
    }
}
