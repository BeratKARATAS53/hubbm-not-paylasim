import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { GDPRComponent } from './gdpr/gdpr.component';
import { MainComponent } from './main/main.component';

registerLocaleData(localeTr);

@NgModule({
	declarations: [AppComponent, DetailsComponent, GDPRComponent, MainComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		NgbModalModule,
	],
	providers: [
		{ provide : LOCALE_ID, useValue : 'tr-TR' },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
