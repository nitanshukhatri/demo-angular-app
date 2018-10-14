import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowErrorsComponent } from './components/show-errors.component';
import { MatFormFieldModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  declarations: [
    ShowErrorsComponent
  ],
  providers: [
  ],
  exports: [
    ShowErrorsComponent
  ],
})
export class CoreModule { }
