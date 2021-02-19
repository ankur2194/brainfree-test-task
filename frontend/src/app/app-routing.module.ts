import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'horses',
    pathMatch: 'full',
  },
  {
    path: 'horses',
    loadChildren: () =>
      import('./pages/horse/horse.module').then((m) => m.HorseModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
