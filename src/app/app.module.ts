import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [
		//{ provide: LOCALE_ID, useValue: 'tr' },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
