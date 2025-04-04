export default function stringToDate(date: string): Date | null {
    if (date) {
        return new Date(date);
    } else {
        return null;
    }
}
