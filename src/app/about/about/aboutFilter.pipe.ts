import { Pipe, PipeTransform } from '@angular/core';
import { Experience } from './experience.class';

// Pipe used to filter my experiences
@Pipe({
    name: 'aboutExperienceFilter',
})
export class AboutExperienceFilter implements PipeTransform {
    transform(experiences: Experience[], filter: string): any {
        // if no experiences or no filter or empty filter list, display all experiences
        if (!experiences || !filter || filter.length == 0) {
            return experiences;
        }
        // Check if any keyword of current experience match with any term of filter list
        return experiences.filter(experience => experience.keywords.some(keyword => filter.includes(keyword)));
    }
}