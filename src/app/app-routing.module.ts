import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'registro', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'noticias/:id', loadChildren: () => import('./pages/news-page/news-page.module').then(m => m.NewsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
