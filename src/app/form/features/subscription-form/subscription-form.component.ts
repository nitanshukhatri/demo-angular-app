import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { CanComponentDeactivate } from '../../../core/contracts/can-component-deactivate';
import { IndexedDbService } from '../../../core/services/indexed.db.service';


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
  private win: any = window;
  private IDB = this.win.indexedDB || this.win.mozIndexedDB || this.win.webkitIndexedDB || this.win.msIndexedDB || this.win.shimIndexedDB;
  db: IDBDatabase;

  constructor(private idbService: IndexedDbService) { }

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
      this.idbService
        .put('Subscriptions', this.subscriptionForm.value)
        .subscribe((res1: any) => {
          console.log(res1);
        });
    }
    console.log(formRef);
  }

  canDeactivate() {

    const keys = Object.keys(this.subscriptionForm.value);
    const hasValue = keys.some(x => this.subscriptionForm.value[x]);
    return hasValue ? confirm('Some form fields has values and form is not submitted. Continue?') : true;
  }

  // makeCache(value) {
  //   const request = this.IDB.open('Subscriptions');
  //   request.onupgradeneeded = (e) => {
  //     e.target.transaction.abort(); //DOES NOT EXIST
  //     const db = request.result;
  //     const SubscriptionStore = db.createObjectStore('SubscriptionStore', { autoIncrement: true });
  //     SubscriptionStore.createIndex('email', 'email', { unique: true });
  //   };
  //   request.onerror = (e) => {

  //   }

  //   request.onsuccess = (e) => {
  //     const db = request.result;
  //     const tx = db.transaction('SubscriptionStore', 'readwrite');
  //     const store = tx.objectStore('SubscriptionStore');
  //     const index = store.index('email');

  //     store.put(value);
  //     tx.oncomplete = () => {
  //       try {
  //         db.close();
  //       } catch (e) {

  //       }
  //     };
  //   };

  // }

