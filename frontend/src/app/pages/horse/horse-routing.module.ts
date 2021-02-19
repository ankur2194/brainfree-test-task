import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HorseComponent } from './horse.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HorseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorseRoutingModule {}
