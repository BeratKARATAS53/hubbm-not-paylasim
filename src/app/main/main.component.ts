import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { firstClassLessons } from 'src/resources/first-class-lessons';
import { secondClassLessons } from 'src/resources/second-class-lessons';
import { technicals } from 'src/resources/technicals';
import { thirdClassLessons } from 'src/resources/third-class-lessons';
import { Card } from '../card';
import { DetailsComponent } from '../details/details.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: false
})
export class MainComponent {
	activeButton = 'home';
	searchText = '';
	notFound = false;

	originalCardMap = {};
	cardMap: Record<string, Card[]> = {
		'first-class': firstClassLessons,
		'second-class': secondClassLessons,
		'third-class': thirdClassLessons,
		'fourth-class': [],
		technicals,
	};
	badgeClassMap: Record<any, string> = {
		'first-class': 'badge-primary',
		'second-class': 'badge-purple',
		'third-class': 'badge-danger',
		'fourth-class': 'badge-success',
		'technicals': 'badge-warning',
	};

	constructor(private modal: NgbModal) {
		this.originalCardMap = JSON.parse(JSON.stringify(this.cardMap));
	}

	changeActiveButton(button: string) {
		this.notFound = false;

		this.activeButton = button;

		if (button === 'versionNotes') {
			this.cardMap = {};
			return;
		}
		if (button === 'home') {
			this.cardMap = JSON.parse(JSON.stringify(this.originalCardMap));
			return;
		}

		// Deep copy
		const cardMap = JSON.parse(JSON.stringify(this.originalCardMap));
		Object.keys(cardMap).forEach((key) => {
			cardMap[key] = cardMap[key].filter((card: any) => card.badges.includes(button));
		});
		this.cardMap = cardMap;

		if (Object.keys(this.cardMap).every((key) => this.cardMap[key].length === 0)) {
			this.notFound = true;
		}
	}

	openDetail(card: Card) {
		const modalRef =  this.modal.open(DetailsComponent, { size: 'lg', centered: true });
		modalRef.componentInstance.card = card;
	}

	search(): void {
		this.notFound = false;

		if (!this.searchText) {
			this.cardMap = JSON.parse(JSON.stringify(this.originalCardMap));
			this.activeButton = 'home';
			return;
		}

		if (this.searchText.length < 3) return;

		// Deep copy
		const cardMap = JSON.parse(JSON.stringify(this.originalCardMap));
		Object.keys(cardMap).forEach((key) => {
			cardMap[key] = cardMap[key].filter((card: any) => this.searchLowercase(card.title, this.searchText) || this.searchLowercase(card.code, this.searchText) || this.searchInArray(card.keywords, this.searchText));
		});
		this.cardMap = cardMap;

		if (Object.keys(this.cardMap).every((key) => this.cardMap[key].length === 0)) {
			this.notFound = true;
		}
	}

	searchLowercase(text: string, search: string): boolean {
		return text.toLowerCase().includes(search.toLowerCase());
	}

	searchInArray(array: string[], search: string): boolean {
		return array.some((item) => this.searchLowercase(item, search));
	}
}
