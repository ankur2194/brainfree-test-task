import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HorseListTableComponent } from './horse-list-table/horse-list-table.component';

const COMPONENTS = [HorseListTableComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, FontAwesomeModule],
})
export class HorseComponentsModule {}
