import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IndexedDbService } from './core/services/indexed.db.service';
import { DataService } from './core/services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName: String;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private breakpointObserver: BreakpointObserver, private idbService: IndexedDbService, private data: DataService) { }

  ngOnInit() {


    this.userName = 'Test User';
    this.idbService.setName('SubscriptionStore');

    this.idbService.create([{
      name: 'Subscriptions'
    }]).subscribe(done2 => {
      this.data.changeStatus(true);
    });

  }


}
