import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { HorseListTableComponent } from './horse-list-table/horse-list-table.component';
import { HorseCreateFormComponent } from './horse-create-form/horse-create-form.component';

const COMPONENTS = [HorseListTableComponent, HorseCreateFormComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
})
export class HorseComponentsModule {}
