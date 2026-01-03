import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Card } from './card';
import { firstClassLessons } from '../resources/first-class-lessons';
import { secondClassLessons } from '../resources/second-class-lessons';
import { thirdClassLessons } from '../resources/third-class-lessons';
import { technicals } from '../resources/technicals';

@Injectable({
	providedIn: 'root'
})
export class LessonService {
	private allLessons: Record<string, Card[]> = {
		'first-class': firstClassLessons,
		'second-class': secondClassLessons,
		'third-class': thirdClassLessons,
		'fourth-class': [],
		'technicals': technicals,
	};

	private activeFilterSubject = new BehaviorSubject<string>('home');
	private searchTextSubject = new BehaviorSubject<string>('');

	activeFilter$ = this.activeFilterSubject.asObservable();
	searchText$ = this.searchTextSubject.asObservable();

	filteredLessons$: Observable<Record<string, Card[]>> = combineLatest([
		this.activeFilter$,
		this.searchText$
	]).pipe(
		map(([filter, search]) => {
			let filtered = JSON.parse(JSON.stringify(this.allLessons));

			if (filter !== 'home' && filter !== 'versionNotes') {
				Object.keys(filtered).forEach(key => {
					filtered[key] = filtered[key].filter((card: Card) => card.badges.includes(filter));
				});
			}

			if (search && search.length >= 3) {
				Object.keys(filtered).forEach(key => {
					filtered[key] = filtered[key].filter((card: Card) =>
						this.searchLowercase(card.title, search) ||
						this.searchLowercase(card.code, search) ||
						this.searchInArray(card.keywords || [], search)
					);
				});
			}

			return filtered;
		})
	);

	setFilter(filter: string) {
		this.activeFilterSubject.next(filter);
	}

	setSearch(text: string) {
		this.searchTextSubject.next(text);
	}

	getLessonByCode(code: string): Card | undefined {
		for (const key in this.allLessons) {
			const found = this.allLessons[key].find(c => c.code === code);
			if (found) return found;
		}
		return undefined;
	}

	private searchLowercase(text: string, search: string): boolean {
		return text.toLowerCase().includes(search.toLowerCase());
	}

	private searchInArray(array: string[], search: string): boolean {
		return array.some((item) => this.searchLowercase(item, search));
	}
}
