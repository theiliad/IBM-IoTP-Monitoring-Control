import { Component } from '@angular/core';

@Component({
  selector: 'sidebar-component',
  template: `
    <aside class="sidebar" ng-controller="sidebar">
        <ul class="sidebarItems">
            <li [routerLinkActive]="['active']">
                <a [routerLink]="['/devices']"><i class="icon-location"></i>Devices</a>
            </li>

            <li [routerLinkActive]="['active']">
                <a [routerLink]="['/rules']"><i class="icon-location"></i>Rules</a>
            </li>
        </ul>
    </aside>`
})

export class SidebarComponent {}