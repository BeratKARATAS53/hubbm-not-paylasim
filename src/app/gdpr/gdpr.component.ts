import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
	selector: 'app-gdpr',
	templateUrl: './gdpr.component.html',
	styleUrls: ['./gdpr.component.scss'],
	standalone: false
})
export class GDPRComponent implements OnInit {

	constructor(private titleService: Title, private metaService: Meta) {}

	ngOnInit() {
		this.titleService.setTitle('Gizlilik Politikası | HUBBM Not Paylaşım');
		this.metaService.updateTag({ name: 'description', content: 'HUBBM Not Paylaşım platformu gizlilik politikası ve veri kullanımı hakkında bilgiler.' });
	}
}
