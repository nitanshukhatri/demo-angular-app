import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IndexedDbService } from '../../../core/services/indexed.db.service';
import { DataService } from '../../../core/services/data.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface Sub {
  email: string;
  password: any;
  subscriptionType: string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, AfterViewInit {
  allSubscriptions = [];
  displayedColumns: string[] = ['email', 'password', 'subscriptionType'];
  dataSource = new MatTableDataSource<any>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private idbService: IndexedDbService, private data: DataService) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.idbService.all('Subscriptions').subscribe(Subscriptions => {
      this.allSubscriptions = Subscriptions;
      this.dataSource = Subscriptions;
      console.log(this.allSubscriptions);
    });
  }

}
