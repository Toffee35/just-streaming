export default function timeFormat(mins: number): string {
    if (mins < 1) {
        return "now"
    } else if (mins < 60) {
        return `${mins} mins ago`
    } else if (mins < 60 * 24) {
        return `${Math.floor(mins / 60)} hours ago`
    } else {
        return `${Math.floor(mins / 60 / 24)} days ago`
    }
}
