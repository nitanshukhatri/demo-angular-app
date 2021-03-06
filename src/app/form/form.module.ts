import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { SubscriptionFormComponent } from './features/subscription-form/subscription-form.component';
import { FormComponent } from './form.component';
import {
  MatCardModule, MatFormFieldModule, MatInputModule,
  MatToolbarModule, MatSelectModule, MatDialogModule,
  MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ExitComponent } from './features/exit/exit.component';
import { ViewComponent } from './features/view/view.component';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    MaterialModule
  ],
  declarations: [
    FormComponent,
    SubscriptionFormComponent,
    ExitComponent,
    ViewComponent
  ]
})
export class FormModule { }
