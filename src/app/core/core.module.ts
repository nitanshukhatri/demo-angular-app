import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowErrorsComponent } from './components/show-errors.component';
import { MatFormFieldModule } from '@angular/material';
import { ToasterService } from './services/toaster.service';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  declarations: [
    ShowErrorsComponent
  ],
  providers: [
    ToasterService
  ],
  exports: [
    ShowErrorsComponent
  ],
})
export class CoreModule { }
