import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HorseRoutingModule } from './horse-routing.module';
import { HorseComponent } from './horse.component';
import { HorseComponentsModule } from 'src/app/components/horse-components/horse-components.module';
import { HorseCreateComponent } from './horse-create/horse-create.component';
import { ErrorInterceptor } from 'src/app/interceptors/error.interceptor';

@NgModule({
  declarations: [HorseComponent, HorseCreateComponent],
  imports: [CommonModule, HorseRoutingModule, HorseComponentsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
})
export class HorseModule {}
