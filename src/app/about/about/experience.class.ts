export class Experience {
    date: string;
    title: string;
    location: string;
    description: string;
    keywords: string[];

    constructor(date: string, title: string, location: string, description: string, keywords: string[]) {
        this.date = date;
        this.title = title;
        this.location = location;
        this.description = description;
        this.keywords = Array.from(keywords);
    }
}