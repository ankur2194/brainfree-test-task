import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorseRoutingModule } from './horse-routing.module';
import { HorseComponent } from './horse.component';
import { HorseComponentsModule } from 'src/app/components/horse-components/horse-components.module';

@NgModule({
  declarations: [HorseComponent],
  imports: [CommonModule, HorseRoutingModule, HorseComponentsModule],
})
export class HorseModule {}
