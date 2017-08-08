import { Component } from '@angular/core';

@Component({
  template:`
    <h2>Admin</h2>
    <nav>
        <a routerLinkActive="active" routerLink="./" [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
        <a routerLinkActive="active" routerLink="empAdmin">Emps</a>
        <a routerLinkActive="active" routerLink="heroAdmin">Heros</a>
        <router-outlet></router-outlet>
    </nav>
  `
})
export class AdminComponent{}