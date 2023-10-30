export interface ITimesheet {
    id: string,
    assessment: number,
    breakMinutes: number,
    minutes: number,
    startTime: string,
    endTime: string,
    note: null,
    status: string,
    locationChecked: boolean,
    approvalPersonId: null,
    userId: string,
    companyId: string
}