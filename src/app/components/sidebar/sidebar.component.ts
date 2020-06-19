import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: 'link' },
  { path: 'notification', title: 'Notifications',  icon:'notifications', class: 'link' }

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  emplLog: boolean;
  agencyLog: boolean;
  adminLog: boolean;
  public WebsiteTitle : string= sessionStorage.getItem('title');

  constructor() { }
  

  logout(){
   
}
  
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
