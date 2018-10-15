import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IndexedDbService } from '../../../core/services/indexed.db.service';
import { DataService } from '../../../core/services/data.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { BrowserDataService } from '../../../core/services/browser-data.service';

export interface Sub {
  email: string;
  password: any;
  subscriptionType: string;
}
let allSubscriptions: Sub[] = [];
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit, AfterViewInit {
  allSubscriptions = [];
  displayedColumns: string[] = ['email', 'password', 'subscriptionType'];

  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private browserService: BrowserDataService, private data: DataService) { }

  ngOnInit() {
    allSubscriptions = this.browserService.getSubscription();
    this.dataSource = new MatTableDataSource<any>(allSubscriptions);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {

  }

}
