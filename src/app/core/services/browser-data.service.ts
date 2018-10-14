import { Injectable } from '@angular/core';
import { StorageLocation } from '../models/storagelocation';

const keyTokenName = 'sub';

@Injectable({providedIn: 'root'})
export class BrowserDataService {

  constructor() {}
  //#region Subscription

  getSubscription(): any {
    return JSON.parse(sessionStorage.getItem(keyTokenName));
  }

  setSubscription(subscription) {
    let data = [];
    if (JSON.parse(sessionStorage.getItem(keyTokenName))) {
    data = JSON.parse(sessionStorage.getItem(keyTokenName));
    }
    console.log(data);
    data.push(subscription);
    sessionStorage.setItem(keyTokenName, JSON.stringify(data));
  }

  removeSubscription() {
    sessionStorage.removeItem(keyTokenName);
  }

  //#region Any Data

  getData(key, storageLocation = StorageLocation.Local): any {
    if (storageLocation === StorageLocation.Local) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return JSON.parse(sessionStorage.getItem(key));
    }
  }

  setData(key, dataToBeStored, storageLocation = StorageLocation.Local) {
    if (storageLocation === StorageLocation.Local) {
      localStorage.setItem(key, JSON.stringify(dataToBeStored));
    } else {
      sessionStorage.setItem(key, JSON.stringify(dataToBeStored));
    }
  }

  removeData(key, storageLocation = StorageLocation.Local) {
    if (storageLocation === StorageLocation.Local) {
      localStorage.removeItem(key);
    } else {
      sessionStorage.removeItem(key);
    }
  }

}
