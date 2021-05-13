import { Component, OnInit } from '@angular/core';
import { NavItem } from './shared/models/menu.interface';

import * as MenuData from 'src/assets/json/menu-json-data/menu-data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cowinCenterSearch';
  public navItems: NavItem[];

  constructor() {
    this.navItems = [];
  }

  ngOnInit(): void {
    this.navItems = MenuData.data;
  }

}
