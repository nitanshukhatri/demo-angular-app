import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';
import { ValidationMessages } from '../models/validation-messages';

@Component({
  selector: 'app-show-errors',
  template: `
    <mat-error *ngIf="shouldShowErrors()"
     style="list-style-type: none;" >{{listOfErrors()[0]}}</mat-error>
`,
  styles: ['.validator {padding: 5px;  border-radius: 5px; font-size: 13px;} .vclose{ cursor: pointer;}']
})
export class ShowErrorsComponent implements OnInit {

  private static readonly errorMessages = {
    required: () => ValidationMessages.RequiredField,
    email: () => ValidationMessages.email,
    IncorrectEmail: () => ValidationMessages.IncorrectEmail,
    subscriptionType: () => ValidationMessages.subscriptionType,
    password: () => ValidationMessages.password,
    minlength: (params) => 'The min number of characters is ' + params.requiredLength,
    maxlength: (params) => 'The max allowed number of characters is ' + params.requiredLength,
    min: (params) => 'The min number of characters is ' + params.min,
    max: (params) => 'The max number of characters is ' + params.max,
    pattern: (params) => 'The required pattern is: ' + params.requiredPattern,
  };

  @Input() private control: AbstractControlDirective | AbstractControl;

  constructor() { }

  shouldShowErrors(): boolean {
    return this.control && this.control.errors && this.control.touched;
  }

  ngOnInit() {
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }

}
