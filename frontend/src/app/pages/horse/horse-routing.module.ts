import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HorseComponent } from './horse.component';
import { HorseCreateComponent } from './horse-create/horse-create.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorseRoutingModule {}
