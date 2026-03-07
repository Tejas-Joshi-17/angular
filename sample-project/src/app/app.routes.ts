import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { authCheckGuard } from './guards/auth-check.guard';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path : "login", component : LoginComponent, title: 'login'},
    {path : "about", component : AboutComponent, title: 'about', canActivate : [authCheckGuard]},
    {path : "contact", component : ContactComponent, title: 'contact'},
    {path : "**", component : PageNotFoundComponent, title: 'page-not-found'}
];
