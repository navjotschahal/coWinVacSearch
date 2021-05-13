import { Component, OnInit } from '@angular/core';
import { CowinQueryService } from '../services/cowin-query.service';

@Component({
  selector: 'app-search-cowin-center',
  templateUrl: './search-cowin-center.component.html',
  styleUrls: ['./search-cowin-center.component.css']
})
export class SearchCowinCenterComponent implements OnInit {

  constructor(
    private cowinQueryService: CowinQueryService
  ) { }

  ngOnInit(): void {
  }

}
