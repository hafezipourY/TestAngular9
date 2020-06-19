import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

const routes: Routes =[
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path: 'home',
    component: EmployeeLayoutComponent,
    children: [
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'icons',      component: IconsComponent },
      { path: 'map',      component: MapsComponent },
      { path: 'notification',      component: NotificationsComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
