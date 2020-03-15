export class Experience {
    beginDate: string;
    endDate: string;
    title: string;
    location: string;
    description: string;
    keywords: string[];
    yearBeginDate: string;
    yearEndDate: string;
    monthBeginDate: string;
    monthEndDate: string;
    dayOfMonthBeginDate: string;
    dayOfMonthEndDate: string;

    constructor(beginDate: string, endDate: string, title: string, location: string, description: string, keywords: string[]) {
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.title = title;
        this.location = location;
        this.description = description;
        this.keywords = Array.from(keywords);

        // formatting date for display
        this.yearBeginDate = beginDate.split("/")[2];
        this.yearEndDate = endDate.split("/")[2];
        this.monthBeginDate = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(new Date(beginDate));
        this.monthEndDate = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(new Date(endDate));
        this.dayOfMonthBeginDate = beginDate.split("/")[1];
        this.dayOfMonthEndDate = endDate.split("/")[1];
    }
}