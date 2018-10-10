import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionFormComponent } from './form/features/subscription-form/subscription-form.component';

const routes: Routes = [
    { path: '', redirectTo: 'form', pathMatch: 'full', },
    { path: 'form', loadChildren: '../app/form/form.module#FormModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
