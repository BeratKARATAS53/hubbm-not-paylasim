import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { GDPRComponent } from './gdpr/gdpr.component';
import { MainComponent } from './main/main.component';
import { VersionNotesComponent } from './version-notes/version-notes.component';
import { ContactComponent } from './contact/contact.component';

registerLocaleData(localeTr);

@NgModule({
	declarations: [AppComponent, DetailsComponent, GDPRComponent, MainComponent, VersionNotesComponent, ContactComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		FormsModule,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'tr-TR' },
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
