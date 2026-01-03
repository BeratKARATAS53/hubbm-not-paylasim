import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { LessonService } from "./lesson.service";
import { TranslationService } from "./translation.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: false
})
export class AppComponent {
	searchText = '';
	activeFilter = 'home';
	isDetailsPage = false;
	showVersionNotes = false;
	showContact = false;

	constructor(
		private lessonService: LessonService,
		private router: Router,
		public translationService: TranslationService
	) {
		this.lessonService.activeFilter$.subscribe(filter => {
			if (filter === 'versionNotes') {
				this.showVersionNotes = true;
			} else {
				this.activeFilter = filter;
			}
		});

		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe((event: any) => {
			this.isDetailsPage = event.url.includes('/details/');
		});
	}

	onSearchChange() {
		this.lessonService.setSearch(this.searchText);
	}

	setFilter(filter: string) {
		this.lessonService.setFilter(filter);
		if (this.router.url.includes('/details/')) {
			this.router.navigate(['/home']);
		}
	}

	toggleVersionNotes(show: boolean) {
		this.showVersionNotes = show;
	}

	toggleContact(show: boolean) {
		this.showContact = show;
	}

	setLanguage(lang: string) {
		this.translationService.setLanguage(lang);
	}
}
