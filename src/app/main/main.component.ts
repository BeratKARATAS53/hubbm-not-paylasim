import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LessonService } from '../lesson.service';
import { TranslationService } from '../translation.service';
import { Card } from '../card';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	standalone: false
})
export class MainComponent implements OnInit {
	isNotFound = false;

	constructor(
		public lessonService: LessonService,
		private router: Router,
		public translationService: TranslationService,
		private titleService: Title,
		private metaService: Meta
	) {
		this.lessonService.filteredLessons$.subscribe(lessons => {
			this.isNotFound = Object.values(lessons).every((arr: any) => arr.length === 0);
		});
	}

	ngOnInit() {
		this.updateSeo();
		this.translationService.currentLang$.subscribe(() => this.updateSeo());
	}

	updateSeo() {
		const title = this.translationService.translate('home') + ' | HUBBM Not Paylaşım';
		const description = this.translationService.translate('welcomeText') + ' - Hacettepe Üniversitesi Bilgisayar Mühendisliği ders notları ve kaynakları.';
		
		this.titleService.setTitle(title);
		this.metaService.updateTag({ name: 'description', content: description });
		this.metaService.updateTag({ property: 'og:title', content: title });
		this.metaService.updateTag({ property: 'og:description', content: description });
	}

	openDetail(card: Card) {
		this.router.navigate(['/details', card.code]);
	}
}
