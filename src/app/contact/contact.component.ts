import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from '../translation.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
	standalone: false
})
export class ContactComponent {
	@Output() closeEvent = new EventEmitter<void>();

	formData = {
		from: 'hubbm-not-paylasim',
		name: '',
		email: '',
		subject: '',
		content: ''
	};

	isSending = false;
	isSuccess = false;
	isError = false;

	constructor(
		private http: HttpClient,
		public translationService: TranslationService
	) { }

	close() {
		this.closeEvent.emit();
	}

	onSubmit() {
		if (this.isSending) return;

		this.isSending = true;
		this.isSuccess = false;
		this.isError = false;

		this.http.post('https://app.monkedo.com/webhook/t18qz7v1f1txwt0e', this.formData)
			.subscribe({
				next: () => {
					this.isSending = false;
					this.isSuccess = true;
					this.formData = { from: 'hubbm-not-paylasim', name: '', email: '', subject: '', content: '' };
					setTimeout(() => this.close(), 2000);
				},
				error: () => {
					this.isSending = false;
					this.isError = true;
				}
			});
	}
}
