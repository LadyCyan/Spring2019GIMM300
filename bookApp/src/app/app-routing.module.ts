import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'add', loadChildren: './pages/add/add.module#AddPageModule' },
  { path: 'book-list', loadChildren: './pages/book-list/book-list.module#BookListPageModule' },
  { path: 'book-add', loadChildren: './pages/book-add/book-add.module#BookAddPageModule' },
  { path: 'book-base', loadChildren: './book-base/book-base.module#BookBasePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
