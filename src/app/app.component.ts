import { Component } from '@angular/core';

import { firstClassLessons } from 'src/resources/first-class-lessons';
import { secondClassLessons } from 'src/resources/second-class-lessons';
import { thirdClassLessons } from 'src/resources/third-class-lessons';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	activeButton = 'home';

	cardMap: Record<string, any> = {
		'first-class': firstClassLessons,
		'second-class': secondClassLessons,
		'third-class': thirdClassLessons,
		'fourth-class': [],
		'technicals': [],
	};
	badgeClassMap: Record<any, string> = {
		'first-class': 'badge-primary',
		'second-class': 'badge-warning',
		'third-class': 'badge-danger',
		'fourth-class': 'badge-success',
		'technicals': 'badge-secondary',
	};

	constructor() {
		console.log('cardMap', this.cardMap);
	}

	changeActiveButton(button: string) {
		this.activeButton = button;
	}

	openDetail(code: string) {
		window.open(`/${code}`, 'blank');
	}
}
