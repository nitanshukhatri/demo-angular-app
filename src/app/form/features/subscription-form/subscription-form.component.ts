import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { CanComponentDeactivate } from '../../../core/contracts/can-component-deactivate';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})

export class SubscriptionFormComponent implements OnInit, CanComponentDeactivate {
  subscriptionForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  errorList = [];

  constructor() { }

  ngOnInit() {
    this.subscriptionForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      subscriptionType: new FormControl('', [Validators.required])
    });
  }

  saveSubscriptionDetails(formRef) {
    console.log(formRef);
  }

  canDeactivate() {

    return false;

  }


}
