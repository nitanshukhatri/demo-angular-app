import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { SubscriptionFormComponent } from './features/subscription-form/subscription-form.component';
import { CanDeactivateService } from '../core/contracts/can-deactivate.service';
import { ExitComponent } from './features/exit/exit.component';
import { ViewComponent } from './features/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      { path: '', redirectTo: 'subscription', pathMatch: 'full' },
      { path: 'subscription', component: SubscriptionFormComponent, canDeactivate: [CanDeactivateService] },
      { path: 'view', component: ViewComponent },
      { path: 'exit', component: ExitComponent }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
