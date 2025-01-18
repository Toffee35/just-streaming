export default function timeFormat(mins: number): string {
    if (mins < 1) {
        return "now"
    } else if (mins < 60) {
        return `${mins}m ago`
    } else if (mins < 60 * 24) {
        return `${Math.floor(mins / 60)}h ago`
    } else {
        return `${Math.floor(mins / 60 / 24)}d ago`
    }
}
