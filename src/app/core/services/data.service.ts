import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

    private messageSource = new BehaviorSubject(false);
    currentStatus = this.messageSource.asObservable();

    constructor() { }

    changeStatus(message: boolean) {
        this.messageSource.next(message);
    }

}
