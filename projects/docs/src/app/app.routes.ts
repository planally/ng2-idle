import {Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuickstartComponent } from './quickstart/quickstart.component';
type PathMatch = "full" | "prefix" | undefined;
export const routes = [
    { path: 'quickstart', component: QuickstartComponent },
    { path: '', redirectTo: '/quickstart', pathMatch: 'full'  as PathMatch},
    { path: '**', component: PageNotFoundComponent}
];