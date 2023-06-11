import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GDPRComponent } from './gdpr/gdpr.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
	{
		path: '', component: AppComponent, children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: MainComponent },
			{ path: 'privacy', component: GDPRComponent }
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
