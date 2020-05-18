import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoriteComponent } from './favorite.component';

const routes: Routes = [
  {
    path: '',
    component: FavoriteComponent,
  },
];

@NgModule({
  declarations: [FavoriteComponent],
  imports: [CommonModule, FavoriteRoutingModule, RouterModule.forChild(routes)],
})
export class FavoriteModule {}
