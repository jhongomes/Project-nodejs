


interface IDateProvider {
    dateNow(): Date;
    addDays(days: number): Date;
    addHours(hours: number): Date;
}
export { IDateProvider}