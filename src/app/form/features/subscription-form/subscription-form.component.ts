import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { CanComponentDeactivate } from '../../../core/contracts/can-component-deactivate';
import { IndexedDbService } from '../../../core/services/indexed.db.service';
import { BrowserDataService } from '../../../core/services/browser-data.service';
import { Validate } from '../../../core/models/validations';
import { MatSnackBar } from '@angular/material';
import { ToasterService } from 'src/app/core/services/toaster.service';



@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})

export class SubscriptionFormComponent implements OnInit, CanComponentDeactivate {
  subscriptionForm: FormGroup;
  errorList = [];

  constructor(private browserService: BrowserDataService, public toasterService: ToasterService) { }

  ngOnInit() {

    this.subscriptionForm = new FormGroup({
      email: new FormControl('', [Validate.isEmpty('email'), Validate.emailCriteria]),
      password: new FormControl('', [Validate.isEmpty('password'), Validators.minLength(5)]),
      subscriptionType: new FormControl('', [Validate.isEmpty('subscriptionType')])
    });

  }

  saveSubscriptionDetails(formRef) {
    if (formRef.valid) {
      this.browserService.setSubscription(this.subscriptionForm.value);
      this.toasterService.showToaster('Your Subscription Saved Successfully');
    } else {
      for (const val in this.subscriptionForm.value) {
        if (this.subscriptionForm.value.hasOwnProperty(val)) {
          this.subscriptionForm.controls[val].markAsTouched();
          this.errorList.push(val);
        }
      }
    }

  }

  canDeactivate() {
    const keys = Object.keys(this.subscriptionForm.value);
    const hasValue = keys.some(x => this.subscriptionForm.value[x]);
    return hasValue ? confirm('Some form fields has values and form is not submitted. Continue?') : true;
  }


}
