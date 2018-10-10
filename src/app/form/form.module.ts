import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { SubscriptionFormComponent } from './features/subscription-form/subscription-form.component';
import { FormComponent } from './form.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSelectModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ExitComponent } from './features/exit/exit.component';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    FormComponent,
    SubscriptionFormComponent,
    ExitComponent
  ]
})
export class FormModule { }
