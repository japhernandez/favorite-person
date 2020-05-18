import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'favorite', pathMatch: 'full' },
  {
    path: 'favorite',
    loadChildren: () =>
      import('./modules/favorite/favorite.module').then(
        (m) => m.FavoriteModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
