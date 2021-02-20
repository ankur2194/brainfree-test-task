import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HorseComponent } from './horse.component';
import { HorseCreateComponent } from './horse-create/horse-create.component';
import { HorseEditComponent } from './horse-edit/horse-edit.component';
import { HorseDetailComponent } from './horse-detail/horse-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HorseComponent,
  },
  {
    path: 'create',
    component: HorseCreateComponent,
  },
  {
    path: ':id',
    component: HorseDetailComponent,
  },
  {
    path: ':id/edit',
    component: HorseEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorseRoutingModule {}
