import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { GDPRComponent } from './gdpr/gdpr.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: MainComponent },
	{ path: 'details/:code', component: DetailsComponent },
	{ path: 'privacy', component: GDPRComponent },
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
