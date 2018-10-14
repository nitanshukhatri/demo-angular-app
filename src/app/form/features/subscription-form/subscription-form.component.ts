import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { CanComponentDeactivate } from '../../../core/contracts/can-component-deactivate';
import { IndexedDbService } from '../../../core/services/indexed.db.service';
import { BrowserDataService } from '../../../core/services/browser-data.service';


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

  constructor(private browserService: BrowserDataService) { }

  ngOnInit() {

    this.subscriptionForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      subscriptionType: new FormControl('', [Validators.required])
    });
    console.log(this.subscriptionForm);

  }

  saveSubscriptionDetails(formRef) {
    if (formRef.valid) {
      this.browserService.setSubscription(this.subscriptionForm.value);
    } else {
      for (const val in this.subscriptionForm.value){
        if (this.subscriptionForm.value.hasOwnProperty(val)) {
          this.subscriptionForm.controls[val].markAsTouched();
          this.errorList.push(val);
        }
      }
    }
    console.log(formRef);
  }

  canDeactivate() {
    const keys = Object.keys(this.subscriptionForm.value);
    const hasValue = keys.some(x => this.subscriptionForm.value[x]);
    return hasValue ? confirm('Some form fields has values and form is not submitted. Continue?') : true;
  }


   }
