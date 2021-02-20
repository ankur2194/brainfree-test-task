import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HorseListTableComponent } from './horse-list-table/horse-list-table.component';
import { HorseCreateFormComponent } from './horse-create-form/horse-create-form.component';
import { HorseEditFormComponent } from './horse-edit-form/horse-edit-form.component';
import { HorseDetailFieldsComponent } from './horse-detail-fields/horse-detail-fields.component';

const COMPONENTS = [
  HorseListTableComponent,
  HorseCreateFormComponent,
  HorseEditFormComponent,
  HorseDetailFieldsComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, RouterModule, FontAwesomeModule, ReactiveFormsModule],
})
export class HorseComponentsModule {}
