import { Pipe, PipeTransform } from '@angular/core';
import { Experience } from './experiences.class';

// Pipe used to filter my experiences
@Pipe({
    name: 'experienceFilter',
})
export class experienceFilter implements PipeTransform {
    transform(experiences: Experience[], filter: string): any {
        // if no experiences or no filter or empty filter list, display all experiences
        if (!experiences || !filter || filter.length == 0) {
            return experiences;
        }
        // Check if any keyword of current experience match with any term of filter list
        return experiences.filter(experience => experience.keywords.some(keyword => filter.includes(keyword)));
    }
}