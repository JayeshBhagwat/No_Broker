import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  records = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>('/api/records').subscribe(data => this.records = [...data]);
  }
  totalEarnings(records) {
    return records.reduce((acc, cur) => acc + this.recordTotal(cur.items), 0);
  }
  totalItems(records) {
    return records.reduce((acc, cur) => acc + cur.items.length, 0);
  }
  recordTotal(items) {
    return items.reduce((acc, cur) => acc + cur.price, 0);
  }

}
