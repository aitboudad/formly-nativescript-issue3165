import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNativescriptModule } from '@ngx-formly/nativescript';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyNativescriptModule
  ],
  declarations: [AppComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
