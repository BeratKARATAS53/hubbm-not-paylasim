import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LessonService } from '../lesson.service';
import { TranslationService } from '../translation.service';
import { Card } from '../card';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss'],
	standalone: false
})
export class DetailsComponent implements OnInit {
	card?: Card;
	isCopied = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private lessonService: LessonService,
		public translationService: TranslationService,
		private titleService: Title,
		private metaService: Meta
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			const code = params['code'];
			if (code) {
				this.card = this.lessonService.getLessonByCode(code);
				if (this.card) {
					this.updateSeo();
				} else {
					this.router.navigate(['/']);
				}
			}
		});

		this.translationService.currentLang$.subscribe(() => {
			if (this.card) this.updateSeo();
		});
	}

	updateSeo() {
		if (!this.card) return;
		
		const lessonTitle = this.translationService.translate(this.card.code);
		const title = `${this.card.code} ${lessonTitle} Notları | HUBBM`;
		const description = `${this.card.code} - ${lessonTitle} dersi için Hacettepe Üniversitesi Bilgisayar Mühendisliği ders notları, kaynaklar ve faydalı bağlantılar.`;
		
		this.titleService.setTitle(title);
		this.metaService.updateTag({ name: 'description', content: description });
		this.metaService.updateTag({ property: 'og:title', content: title });
		this.metaService.updateTag({ property: 'og:description', content: description });
		this.metaService.updateTag({ property: 'og:image', content: this.card.image });
	}

	goBack() {
		this.router.navigate(['/']);
	}

	share() {
		if (this.card && !this.isCopied) {
			const url = window.location.href;
			navigator.clipboard.writeText(url).then(() => {
				this.isCopied = true;
				setTimeout(() => {
					this.isCopied = false;
				}, 3000);
			});
		}
	}
}
