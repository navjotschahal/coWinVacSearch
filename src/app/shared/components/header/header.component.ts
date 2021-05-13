import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../../models/menu.interface';
import { Utility } from '../../Utility/utility';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() navItems: NavItem[];

  constructor() {
    this.navItems = [];
  }

  ngOnInit(): void {
    
  }

  // public isChildLength: (item: NavItem) => boolean = (item: NavItem): boolean => {
  //   let yes: boolean = item.children && item.children.length > 0 ? true : false;
  //   return yes;
  // }

  zerothMenuButtonTitle(item: NavItem): string {
    return Utility.isEmptyString(item.iconName) ? item.displayName : '';
  }

}
