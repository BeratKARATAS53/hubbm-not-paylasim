import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Card } from '../card';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
	card: Card = {
		code: '',
		title: '',
		image: '',
		website: null,
		exams: null,
		others: null,
		books: null,
		badges: [],
		keywords: [],
		createdAt: ''
	};

	constructor(private modal: NgbActiveModal) { }

	close(): void {
		this.modal.close();
	}
}
